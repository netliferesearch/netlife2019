# Netlife 2019

[![Netlify Status](https://api.netlify.com/api/v1/badges/371ab6b8-38f2-43e5-b92b-c68e571b567d/deploy-status)](https://app.netlify.com/sites/netlife2019/deploys)

Monorepo for the netlife.com website.

## Tech stack

- Frontend: React with Gatsby
- Styling: Tailwind and PostCSS
- Hosting & ops: Netlify
- CMS: Sanity

## Development
0. Copy the file `.env.development.template` and name it `.env.development`. Paste in the secret tokens in the empty strings.
1. Run `npm install` in the root of the project. Lerna will handle installation for the backend and frontend.
2. Run `npm run dev` to start the Sanity studio (`localhost:3333`) and Gatsby (`localhost:8000`).
3. Deploy Sanity schema changes by running `npm run graphql-deploy`.
4. Changes made to the Gatsby config files requires Gatsby to be restarted. 
5. Run tests in `/web` by writing `npm run test`

## Forms
Forms are using Netlify forms hook. To create a new form. Use unique form name and deploy to Netlify. 
Your form name should be in the forms section list in Netlify after your first submission. You need to do some setup for that specific form in the section Settings and usage.
Form name "default" is used as a default form to hei@netlife.com. Others are using the page slug for now.

## Sanity Studio (CMS)
To makes changes to the content, go to: https://netlife2019-studio.netlify.com

The admin can add additional users.

## Deployment
We use Netlify as a web host. This GitHub repo is connected Netlify, and Netlify will build whenever code is pushed to the master branch. Netlify also handles our serverless functions.

Netlify is also connected to Sanity with a webhook, and will build when something is changed in Sanity.

It should build in about a minute. If nothing changes then something in the build process went wrong. The build log in Netlify should tell you what. It is recommended connecting a Slack bot between the Netlify site and your Slack user when developing. If something goes wrong the last working version will be the version deployed in production.

### Build hooks are broken
TODO: Exersize for the reader.
Until then, build manually by `sanity deploy` from /studio and manual restart of Gatsby preview in gatsbyjs.com dashboard.


## Project rules
- Styling should be done with the Tailwind classes. Using `@apply` or plain CSS should only be used for edge cases.
- Components should not have state by default. Don't use class for components if you need state, use functions and hooks instead.
- Follow the WCAG 2.0 guidelines with Difi's modifications/interpretation: https://uu.difi.no/krav-og-regelverk/wcag-20-standarden
- All components should have 100% width. Only the grid or other layout components should decide the width of components, except for components with display inline.
- The components should not concern itself with spacing. There are wrapper classes handling the spacing.

## How the internal link system works
Advanced links supports external and internal URLs, and the nofollow attribute.

To link something to a document i Sanity you select the document you want to reference to in the dropdown menu.

If you want to add a new document that can be linked to, you have to add a field called `slug`, it has to have a value, so make it required.

Edit the following files:
- `studio/schemas/objects/link.js`: Add the document's name to the list of references.
- `web/src/components/Link.js`: Add a fragment query for it in internalPage, like the others.

You will need to restart Gatsby and deploy the graphql schemas at some point while doing this.
