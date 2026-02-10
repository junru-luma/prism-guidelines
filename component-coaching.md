# Alerts

Keywords: alert, notification, banner, toast, message, info, warning, error, success

Length: 1-2 short sentences (50-120 characters). Four types: informational (blue, 'i' icon), warning (yellow, warning icon), error (red, 'x' icon), success (green, checkmark icon). Sentence case. Clear, direct, non-alarming tone. [Action] + [Result/Impact] structure.

## Subtypes

### Informational Alert
- **Icon:** 'i' icon
- **Color:** Blue
- **Usage:** Use for neutral information, tips, or general updates. For communicating changes that don't require immediate action.
- **Example:** A new feature has been added to your dashboard.

### Warning Alert
- **Icon:** Warning icon
- **Color:** Yellow
- **Usage:** Use for potential issues that require attention but aren't critical errors. For situations that may cause problems if unaddressed.
- **Example:** Your storage is at 90% capacity. Consider upgrading soon.

### Error Alert
- **Icon:** 'x' icon
- **Color:** Red
- **Usage:** Use for critical issues that prevent users from proceeding. For system failures, validation errors, or unsuccessful actions.
- **Example:** Payment failed. Please check your payment details and try again.

### Success Alert
- **Icon:** Checkmark icon
- **Color:** Green
- **Usage:** Use to confirm successful completion of actions. For positive feedback after user interactions.
- **Example:** Your changes have been successfully saved.

## Do
- Use sentence case for all alert text
- Lead with consequence or question, follow with directive, end with outcome
- Use [Action] + [Result/Impact] structure
- Use standard phrasing for similar alert types
- Maintain consistent terminology for common actions
- End complete sentences with periods
- Keep between 50-120 characters
- Match tone to alert type (informational vs. error)
- Include next steps when relevant (e.g. 'Please try again')
- Use contextual phrasing for irreversible actions ('You cannot undo this action')
- Use question format for assistance options ('Have an emergency?')
- Include notification references when applicable ('[Person] will be notified')
- Keep tone direct and clear without being alarming
- Be professional but conversational

## Don't
- Don't use alarming or aggressive language
- Don't use technical jargon unless necessary
- Don't mix alert types (e.g. success message in error alert)
- Don't exceed 120 characters
- Don't omit the action/result structure
- Don't use inconsistent terminology across similar alerts
- Don't use inconsistent punctuation (keep periods at end of complete sentences)


# Buttons

Keywords: button, btn, cta, action, submit, primary, secondary, tertiary

Length: 1-3 words (max 25 characters). Sentence case (capitalize first word only). Verb + Object format preferred. Three types: Primary (solid blue bg + white text), Secondary (white bg + visible stroke), Tertiary (no fill, text only).

## Subtypes

### Primary Button
- **Style:** Solid blue background fill + white text
- **Usage:** The main action on a page or in a modal; the most important or most frequently used action.
- **Examples:** Save changes | Submit | Continue
- **Call to action:** Strong verbs: 'Create', 'Send', 'Save'

### Secondary Button
- **Style:** White background fill (visible stroke) + black/gray text
- **Usage:** Alternative or supporting actions; important but not the main focus.
- **Examples:** Cancel | Back | Close
- **Call to action:** Neutral verbs: 'Cancel', 'Back'

### Tertiary Button
- **Style:** No fill (no stroke) + solely black/gray text
- **Usage:** Supplementary actions, links, or less common options.
- **Examples:** Learn more | View details | Message patient
- **Call to action:** Descriptive or navigational verbs

## Do
- Use sentence case (capitalize first word only)
- Use Verb + Object format: 'Add new insurance', 'Send payment', 'Create workflow'
- Alternative: Single verb or noun for common actions: 'Save', 'Cancel', 'Filters'
- Be specific about the action: 'Upload faxes' not just 'Upload'
- Use recognizable patterns ('New chat' follows the 'New + noun' pattern)
- Use consistent verbs for similar actions (e.g. 'Create' not 'Make' or 'Build')
- Use clear opposites for opposing actions: 'Save' / 'Cancel'
- Use strong verbs for primary buttons: 'Create', 'Send', 'Save'
- Use neutral verbs for secondary buttons: 'Cancel', 'Back'
- Keep to 1-3 words, max 25 characters
- Use '+' icon before text for creation/addition actions
- Icon should reinforce, not replace, the text
- All buttons can have appropriate icons
- Prioritize clarity over brevity, but be as concise as possible

## Don't
- Don't use Title Case (e.g. 'Save Changes' is wrong, use 'Save changes')
- Don't use all caps
- Don't use vague labels like 'Submit' when you can be specific
- Don't use different verbs for the same action type
- Don't exceed 25 characters
- Don't use icons without accompanying text labels


# Input Fields

Keywords: input, field, text field, form, label, placeholder, dropdown, select, textbox, textarea

Labels: 1-3 words, sentence case, max 25 chars. Required fields: asterisk (*) at the end. Placeholder: format examples only (max 20 chars). Helper text: below field, max 50 chars. Error pattern: 'Please enter a valid [field type]', max 40 chars. No punctuation at end.

## Field Types

### Standard Text Field
- **Usage:** Simple text entry with label. Use for names, emails, basic text input.
- **Examples:** First name * | Email address *
- **Placeholder:** No placeholder needed

### Format-Specific Field
- **Usage:** Text entry with format indicators. Use for dates, phone numbers, structured inputs.
- **Examples:** Date of birth * | Phone number
- **Placeholder:** Show example format: 'MM/DD/YYYY', '000-000-0000'

### Selection Field
- **Usage:** Dropdown or selection component. Use for choosing from predefined options.
- **Examples:** Country * | Role *
- **Placeholder:** Use 'Select' only

## Sections

### Labels
- **Format:** Noun or Noun phrase
- **Length:** 1-3 words, max 25 characters (including spaces and asterisk)
- **Case:** Sentence case (capitalize first word only)
- **Position:** Always above the input field
- **Good examples:** First name * | Email * | Phone number | Date of birth *
- **Bad examples:** First Name (incorrect capitalization) | Email: (incorrect punctuation) | * Email (incorrect asterisk position)

### Placeholders
- **Purpose:** To provide format guidance, not instructions
- **Max chars:** 20
- **Rules:** Standard text fields: no placeholder. Format-specific fields: show example format. Selection fields: use 'Select' only.
- **Good examples:** MM/DD/YYYY | Select | 000-000-0000
- **Bad examples:** Enter your first name... (unnecessary for standard fields) | Select an option... (too wordy) | Choose from the list. (too wordy, includes punctuation)

### Helper Text
- **Purpose:** To provide format requirements that cannot be covered by placeholder text
- **Position:** Below the input field, above any error messages
- **Max chars:** 50
- **Case:** Sentence case
- **Format:** No punctuation at the end for single instructions
- **Use when:** Format is too complex for placeholder | Multiple format requirements exist | Input has specific constraints
- **Good examples:** Must contain at least one number | 8-12 characters with no spaces | Must match the format XXX-XX-XXXX
- **Bad examples:** Your password must be secure! (not specific about format requirements) | Please be sure to include a number in your password. (too wordy) | Password requirements: 8+ characters, 1 uppercase, 1 number, 1 special character. (too many requirements for helper text)

### Error Messages
- **Pattern:** Please enter a valid [field type]
- **Case:** Sentence case
- **Format:** No punctuation at the end
- **Max chars:** 40
- **Error types:** Format errors: when input doesn't match required format | Missing required field: when required field is empty
- **Good examples:** Please enter a valid email address | Please enter a valid phone number | Please enter a valid date of birth
- **Bad examples:** Invalid email address. (incorrect pattern, includes punctuation) | Please Enter A Valid Email Address (incorrect capitalization) | Email is required! (incorrect pattern, includes punctuation)

## Do
- Use sentence case for labels
- Place asterisk (*) at the end of required field labels
- Use format examples for placeholders: 'MM/DD/YYYY', '000-000-0000'
- Use 'Select' as placeholder for dropdowns
- Keep error messages under 40 characters
- Follow 'Please enter a valid [field]' error pattern
- Keep helper text under 50 characters
- Place labels above the input field
- Be specific but concise ('Phone number' not just 'Phone')
- Use recognizable patterns ('First name'/'Last name')
- Keep placeholder text to max 20 characters
- Use helper text only when format is too complex for placeholder

## Don't
- Don't put asterisk before the label ('* Email' is wrong)
- Don't use punctuation at end of labels, placeholders, or error messages
- Don't use 'Enter your...' as placeholder text
- Don't use Title Case for labels
- Don't use wordy placeholder text ('Choose from the list.')
- Don't use helper text when placeholder is sufficient
- Don't use 'Invalid [field]' error pattern
- Don't exceed 25 characters for labels
- Don't exceed 20 characters for placeholder text
- Don't use 'Email is required!' error pattern (incorrect pattern and punctuation)


# Tooltips

Keywords: tooltip, tip, hint, popover, hover, info icon

Brief explanations (20-75 chars). Sentence case. White text on grey background. Use 'i' icon in circle for information tooltips. Key information first, then details. Supplements but does not replace essential UI text.

## Scope Guidelines
- **Use tooltips for:** Brief clarifications | Field definitions | Explaining icons
- **Use inline help for:** Multi-step processes | Complex concepts | Essential information
- **Note:** Tooltips should supplement, not replace, essential UI text

## Information Hierarchy
- Key information first (action, object, outcome)
- Details after (constraints, requirements)
- For date/time information: action first, then who, when, where

## Action Guidance
- For status indicators: include next steps if applicable
- For form fields: include validation requirements
- For disabled elements: explain why disabled and how to enable

## Duration Guidelines
- **Simple UI:** 20-40 characters
- **Complex functions:** 40-75 characters
- **Icon-only buttons:** Must have tooltips explaining function

## Examples
- Last eligibility run by [Staff Name] on March 17, 2025 at 3:30PM CST
- Established Patient - 15m
- Edit patient details
- Requires manager approval
- Press Ctrl+S to save changes

## Do
- Keep simple tooltips to 20-40 characters
- Keep complex tooltips to 40-75 characters
- Put key information first (action, object, outcome)
- Include next steps for status indicators
- Include validation requirements for form fields
- For disabled elements: explain why disabled and how to enable
- Always add tooltips to icon-only buttons
- Align tooltip terminology with documentation
- Use consistent verbs across similar actions
- Maintain consistent voice across the application
- For date/time: action first, then who, when, where

## Don't
- Don't use tooltips for multi-step processes (use inline help)
- Don't use tooltips to replace essential UI text
- Don't exceed 75 characters
- Don't omit tooltips on icon-only buttons
- Don't use inconsistent terminology


# Settings

Keywords: setting, preference, config, toggle, switch, option

Setting name: 3-7 words, Title Case, clear and action-oriented. Description: 1-2 sentences, sentence case, direct language. Professional, informative, slightly technical when necessary.

## Format Types

### Toggle Settings
- **Pattern:** Enable this setting to [action] [object] in [location] [benefit].
- **Example:** Enable this setting to hide messages in Hub and Patient Profile from users who shouldn't have access based on their provisioning.

### Selection Settings
- **Pattern:** Select whether [object] in [location] should [action A] or [action B].
- **Example:** Should new messages in the Collaboration Hub or Patient Profile be secure or non-secure text by default?

### Information Fields
- **Pattern:** If using [feature], [instruction for action].
- **Example:** If using Luma Health's web-based referral form, send this form link to your referring providers.

### Numeric Settings
- **Pattern:** What is the [quantity measure] of [action]?
- **Example:** What is the maximum number of times that Luma Health should attempt to contact a patient about an inbound referral?

## Do
- Use Title Case for setting names
- Use sentence case for descriptions
- Follow toggle format: 'Enable this setting to [action]...'
- Follow selection format: 'Select whether [object] should...'
- Follow information field format: 'If using [feature], [instruction]...'
- Follow numeric format: 'What is the [quantity measure] of [action]?'
- Keep descriptions to 1-2 sentences
- Be specific about the setting's effect and location
- Keep setting names to 3-7 words
- Be clear and action-oriented in naming

## Don't
- Don't use vague setting names
- Don't omit the benefit/impact in descriptions
- Don't use technical jargon in descriptions
- Don't use more than 7 words for setting names
- Don't use sentence case for setting names (use Title Case)


# Table Headers

Keywords: table, header, column, grid, data table, list

Length: 1-2 words (max 20 chars). Title Case. Neutral, descriptive tone. Noun or short noun phrase.

## Do
- Use Title Case for all column headers
- Keep to 1-2 words maximum
- Use nouns or short noun phrases
- Stay under 20 characters
- Examples: 'Title', 'Patients', 'Status', 'Delivery Time', 'Created', 'Specialty', 'Confidence', 'Received', 'Facility', 'Type'

## Don't
- Don't use sentence case for table headers!
- Don't use verbs in column headers
- Don't exceed 20 characters
- Don't use abbreviations without established convention


# Statuses

Keywords: status, state, badge, tag, chip, indicator, progress

Use sentence case for all status indicators (e.g., 'In progress', 'Pending review', 'Completed').

## Do
- Use sentence case: 'In progress', 'Pending review', 'Completed'
- Be consistent across the product
- Use clear, recognizable status labels

## Don't
- Don't use Title Case for statuses ('In Progress' is wrong)
- Don't use all caps
- Don't use technical or ambiguous status labels


# Modals

Keywords: modal, dialog, popup, overlay, confirm, confirmation, delete, warning, archive

Title: 2-5 words, sentence case. Body: 1-3 sentences, sentence case. Confirmation/warning modals typically use 'Are you sure?' title. Include 'This cannot be undone' for destructive/irreversible actions. Primary button should match the title question.

## Subtypes

### Deletion Modal
- **Title:** Delete [Item Name]? or Delete the [item type] '[item name]'?
- **Body:** This cannot be undone. / This action will permanently remove [item] and all associated data. This cannot be undone.
- **Example:** Title: 'Delete the checklist "New patient"?' Body: 'This cannot be undone.'

### Confirmation Modal
- **Title:** Are you sure?
- **Body:** Clearly state what will happen when the action is confirmed.
- **Example:** Title: 'Are you sure?' Body: 'Deleting this workflow will permanently remove this and any data related to it.'

### Warning Modal
- **Title:** Are you sure? or Warning
- **Body:** Explain consequences and include 'This action cannot be undone' for irreversible actions.
- **Example:** Title: 'Are you sure?' Body: 'Please review carefully to ensure accuracy before proceeding. Splitting this fax will create new faxes in the defined groups. This action cannot be undone.'

### Archive Modal
- **Title:** Are you sure?
- **Body:** Archiving this [item] will remove it from [location/system]. This cannot be reversed.
- **Example:** Title: 'Are you sure?' Body: 'Archiving this fax will remove it from Fax Transform. This cannot be reversed.'

### Information Modal
- **Title:** Brief description of information being presented
- **Body:** 1-2 sentences with necessary details or instructions.
- **Example:** Title: 'System Maintenance' Body: 'Luma will be unavailable on Sunday, May 12 from 2-4am ET for scheduled maintenance.'

### Success Modal
- **Title:** Success or specific action completed
- **Body:** Confirmation of completed action and any next steps.
- **Example:** Title: 'Workflow Created' Body: 'Your new workflow has been successfully created and is now active.'

## Do
- Use 'Are you sure?' for confirmation, warning, and archive modals
- Include 'This cannot be undone' or 'This cannot be reversed' for irreversible/destructive actions
- Match button copy to title: 'Are you sure?' → 'I'm sure'
- If the modal title is a question, the button copy should answer it
- Reference the specific item being affected (checklist, workflow, fax)
- Use sentence case for titles and body text
- Keep titles to 2-5 words
- Deletion title: 'Delete [Item Name]?' or 'Delete the [type] "[name]"?'
- Success title: specific action completed (e.g. 'Workflow Created')
- Keep body text to 1-3 sentences
- Clearly state consequences in confirmation modals

## Don't
- Don't use vague body text that doesn't explain consequences
- Don't forget 'This cannot be undone' for destructive actions
- Don't use generic button labels that don't match the action
- Don't use Title Case for modal titles
- Don't exceed 3 sentences in body text
- Don't omit the specific item being affected


# Descriptive/General Copy

Keywords: copy, text, label, heading, paragraph, description, general, writing

Flexible length (typically 1-3 sentences per concept). Sentence case. Conversational but professional tone. Clear explanations with occasional brand personality. Active voice. Second person ('you'). Clarity first, positive framing.

## Do
- Use sentence case everywhere except Title Case where specified
- Use active voice when describing actions
- Use second person ('you') when addressing the user
- Prioritize clarity over cleverness
- Focus on what users can do (positive framing)
- Use 'zip code' (not 'Post code' or 'Postal code')
- Remove unnecessary words while maintaining clarity
- Be professional yet approachable, expert but not jargony
- Keep to 1-3 sentences per concept typically

## Don't
- Don't use passive voice for user actions
- Don't use first person ('we', 'I')
- Don't use jargon or overly technical language
- Don't be clever at the expense of clarity
- Don't focus on limitations (use positive framing instead)
- Don't use 'Post code' or 'Postal code' (use 'zip code')
