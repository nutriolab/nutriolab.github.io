# Nutriolab 🍞 🌮 🥬

## Instructions
How to update:
1. [Page link](#page)
- Go to [content](/content) folder
- Select the language (en/id) folder
- Select the page you want to update
- Find the edit button
- Update the value of `permalink`
- Click "Commit Changes" and make sure "Commit directly to the 'main' branch" is checked.
- Go to [links](/_data/links) file
- Update the link you want to update
- Click "Commit Changes" and make sure "Commit directly to the 'main' branch" is checked.

2. [Page title](#page)
- Go to [content](/content) folder
- Select the language (en/id) folder
- Select the page you want to update
- Find the edit button
- Update the value of `title`
- Click "Commit Changes" and make sure "Commit directly to the 'main' branch" is checked.

3. [Page content](#content)
- Go to [_data](/_data) folder
- Select the language (en/id) folder
- Select the page you want to update
- Find the edit button
- Update the file
- Find the variable you want to update and update the value (Variable names varies depending on the page, search the value you want to update and if it is there, then it is editable)
- Click "Commit Changes" and make sure "Commit directly to the 'main' branch" is checked.

4. [Adding a new page](#new-page)
- Add new `.md` file on each language at [content](/content)
- Add new `.yaml` file on each language at [_data](/_data)
- Add menu to menu file [_data/menu.yaml](/_data/menu.yaml) based on the file name you use at the [content](/content)

## Notes
- If values contain weird text like `<span class='underline'><b>We are the extension of your team</b></span>`, it's because it needs some styling/formatting. That syntax is HTML syntax. Refer to Google on how to use HTML and CSS syntaxes if you need to style/format your text.
