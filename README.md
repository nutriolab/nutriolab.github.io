# Nutriolab 🍞 🌮 🥬

## Instructions
How to update:
0. [SEO](#seo)
- Go to [_data](/_data) folder
- Select the language (en/id) folder
- Open `default.yaml` file
- Update variable that you want to update

1. [Page link](#page)
- Go to [pages](/pages) folder
- Select the language (en/id) folder
- Select the page you want to update
- Find the edit button
- Update the value of `permalink`
- Click "Commit Changes" and make sure "Commit directly to the 'main' branch" is checked.
- Select the menu file
- Update the link of the page that you updated
- Click "Commit Changes" and make sure "Commit directly to the 'main' branch" is checked.

2. [Page title/description](#page)
- Go to [pages](/pages) folder
- Select the language (en/id) folder
- Select the page you want to update
- Find the edit button
  - Update the value of `title` for the page title
  - Update the value of `description` for the page description (used in SEO)
- Click "Commit Changes" and make sure "Commit directly to the 'main' branch" is checked.

3. [Page content](#content)
- Go to [_data](/_data) folder
- Select the language (en/id) folder
- Select the page you want to update
- Find the edit button
- Find the variable you want to update and update the value (Variable names varies depending on the page, search the value you want to update and if it is there, then it is editable)
- Click "Commit Changes" and make sure "Commit directly to the 'main' branch" is checked.

4. [Social Media](#social-media)
- Go to [social media file](/_data/social_media.yaml)
- Update link of the social media you want to update

## Notes
- Assets/media are stored in the [assets/media directory](/assets/media)
- If values contain weird text like `<span class='underline'><b>We are the extension of your team</b></span>`, it's because it needs some styling/formatting. That syntax is HTML syntax. Refer to Google on how to use HTML and CSS syntaxes if you need to style/format your text.
