#!/usr/bin/env node

/**
 * build-coaching.js
 *
 * Converts component-coaching.md → component-coaching.json
 * Zero external dependencies — pure Node.js.
 *
 * Usage:  node scripts/build-coaching.js
 */

const fs = require('fs');
const path = require('path');

// ── Utilities ──────────────────────────────────────────────

/** Convert "Good examples" → "goodExamples", "Max chars" → "maxChars", "Simple UI" → "simpleUI" */
function camelCase(str) {
  // Known acronyms that should stay uppercase
  var acronyms = { 'ui': 'UI', 'id': 'ID', 'api': 'API', 'url': 'URL' };

  // Split on spaces and hyphens
  var words = str.trim().split(/[\s-]+/);
  return words
    .map(function (word, i) {
      var lower = word.toLowerCase();
      // Check for known acronyms (not in first position)
      if (i > 0 && acronyms[lower]) return acronyms[lower];
      return i === 0 ? lower : lower.charAt(0).toUpperCase() + lower.slice(1);
    })
    .join('');
}

/** Keys whose values should always be split into arrays */
var ARRAY_KEYS = [
  'examples', 'goodExamples', 'badExamples', 'useWhen',
  'errorTypes', 'useTooltipsFor', 'useInlineHelpFor'
];

function isArrayKey(key) {
  return ARRAY_KEYS.indexOf(key) !== -1;
}

/** Try to parse a value as a number, return original string if not numeric */
function maybeNumber(val) {
  if (/^\d+(\.\d+)?$/.test(val.trim())) {
    return Number(val.trim());
  }
  return val;
}

/** Extract plain bullet list items (lines starting with "- ") */
function parseBulletList(text) {
  return text
    .split('\n')
    .filter(function (line) { return line.trim().match(/^- /); })
    .map(function (line) { return line.trim().replace(/^-\s+/, ''); });
}

/** Parse "- **Key:** Value" lines into an object */
function parseKeyValueBullets(text) {
  var obj = {};
  var lines = text.split('\n');
  for (var i = 0; i < lines.length; i++) {
    var match = lines[i].match(/^[\s]*-\s+\*\*(.+?):\*\*\s*(.*)/);
    if (match) {
      var rawKey = match[1].trim();
      var key = camelCase(rawKey);
      var value = match[2].trim();
      if (isArrayKey(key)) {
        // Use | as separator for array values (avoids comma-in-value issues)
        obj[key] = value.split('|').map(function (v) { return v.trim(); }).filter(Boolean);
      } else {
        obj[key] = maybeNumber(value);
      }
    }
  }
  return obj;
}

/** Split text by ### headings, parse each as { name, ...keyValues } */
function parseSubsections(text) {
  // Split on ### heading lines
  var parts = text.split(/\n(?=###\s)/);
  var results = [];
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i].trim();
    if (!part.match(/^###\s/)) continue;
    var lines = part.split('\n');
    var name = lines[0].replace(/^###\s+/, '').trim();
    var body = lines.slice(1).join('\n');
    var props = parseKeyValueBullets(body);
    props.name = name;
    // Reorder so name is first
    var ordered = { name: name };
    var keys = Object.keys(props);
    for (var k = 0; k < keys.length; k++) {
      if (keys[k] !== 'name') ordered[keys[k]] = props[keys[k]];
    }
    results.push(ordered);
  }
  return results;
}

// ── Main ───────────────────────────────────────────────────

var mdPath = path.join(__dirname, '..', 'component-coaching.md');
var outPath = path.join(__dirname, '..', 'component-coaching.json');

if (!fs.existsSync(mdPath)) {
  console.error('ERROR: ' + mdPath + ' not found');
  process.exit(1);
}

var md = fs.readFileSync(mdPath, 'utf-8');

// Split into component blocks by H1 (# )
// Handle both start-of-file and mid-file H1s
var componentBlocks = md.split(/(?:^|\n)(?=# [^#])/);

var components = [];

for (var b = 0; b < componentBlocks.length; b++) {
  var block = componentBlocks[b].trim();
  if (!block.match(/^# [^#]/)) continue;

  var component = {};

  // Extract component name from H1
  var nameMatch = block.match(/^#\s+(.+)/);
  if (!nameMatch) continue;
  component.name = nameMatch[1].trim();

  // Split into H2 sections
  var h2Parts = block.split(/\n(?=## [^#])/);
  var header = h2Parts[0]; // Everything before first H2

  // Parse keywords
  var kwMatch = header.match(/\nKeywords:\s*(.+)/i);
  if (kwMatch) {
    component.keywords = kwMatch[1].split(',').map(function (k) { return k.trim(); }).filter(Boolean);
  }

  // Parse description: paragraph(s) after Keywords line, before first H2
  var headerLines = header.split('\n');
  var kwLineIdx = -1;
  for (var h = 0; h < headerLines.length; h++) {
    if (headerLines[h].trim().match(/^Keywords:/i)) {
      kwLineIdx = h;
      break;
    }
  }
  if (kwLineIdx >= 0) {
    var descLines = headerLines.slice(kwLineIdx + 1).filter(function (l) { return l.trim().length > 0; });
    component.description = descLines.join(' ').trim();
  }

  // Process each H2 section
  for (var s = 1; s < h2Parts.length; s++) {
    var sec = h2Parts[s].trim();
    var secNameMatch = sec.match(/^##\s+(.+)/);
    if (!secNameMatch) continue;
    var secName = secNameMatch[1].trim();
    var secBody = sec.replace(/^##\s+.+\n?/, '');

    var secLower = secName.toLowerCase();

    if (secLower === 'do') {
      component.dos = parseBulletList(secBody);
    } else if (secLower === "don't") {
      component.donts = parseBulletList(secBody);
    } else if (secLower === 'subtypes') {
      component.subtypes = parseSubsections(secBody);
    } else if (secLower === 'field types') {
      component.fieldTypes = parseSubsections(secBody);
    } else if (secLower === 'format types') {
      component.formatTypes = parseSubsections(secBody);
    } else if (secLower === 'sections') {
      var subs = parseSubsections(secBody);
      component.sections = {};
      for (var j = 0; j < subs.length; j++) {
        var sectionKey = camelCase(subs[j].name);
        var entry = {};
        var subKeys = Object.keys(subs[j]);
        for (var sk = 0; sk < subKeys.length; sk++) {
          if (subKeys[sk] !== 'name') entry[subKeys[sk]] = subs[j][subKeys[sk]];
        }
        component.sections[sectionKey] = entry;
      }
    } else if (secLower === 'examples') {
      component.examples = parseBulletList(secBody);
    } else if (secLower === 'scope guidelines') {
      component.scopeGuidelines = parseKeyValueBullets(secBody);
    } else if (secLower === 'information hierarchy') {
      component.informationHierarchy = parseBulletList(secBody);
    } else if (secLower === 'action guidance') {
      component.actionGuidance = parseBulletList(secBody);
    } else if (secLower === 'duration guidelines') {
      component.durationGuidelines = parseKeyValueBullets(secBody);
    } else {
      console.warn('  Warning: unknown section "' + secName + '" in ' + component.name);
    }
  }

  // Validation
  var required = ['name', 'keywords', 'description', 'dos', 'donts'];
  var missing = [];
  for (var r = 0; r < required.length; r++) {
    var field = component[required[r]];
    if (!field || (Array.isArray(field) && field.length === 0)) {
      missing.push(required[r]);
    }
  }
  if (missing.length > 0) {
    console.error('ERROR: Component "' + component.name + '" is missing: ' + missing.join(', '));
    process.exit(1);
  }

  components.push(component);
}

if (components.length === 0) {
  console.error('ERROR: No components found in component-coaching.md');
  process.exit(1);
}

var output = {
  version: '1.1',
  components: components
};

fs.writeFileSync(outPath, JSON.stringify(output, null, 2) + '\n');
console.log('Built component-coaching.json with ' + components.length + ' component(s)');
