# ✨ Starter Gatsby Sanity Theme ✨

This is a Starter [Gatsby](https://gatsbyjs.com) theme powered by [Sanity](https://www.sanity.io).

Click the button below to use this theme to create a new site using the Stackbit:

[![Create with Stackbit](https://assets.stackbit.com/badge/create-with-stackbit.svg)](https://app.stackbit.com/create?theme=https://github.com/stackbit-themes/starter-gatsby-sanity&utm_source=theme-readme&utm_medium=referral&utm_campaign=stackbit_themes)

<img src="https://themes.stackbit.com/images/starter-demo-1024x768.png" width="600">


## Editing Content

Once Stackbit creates a site, you can start editing the content using the free on-page editing experience provided by the [Stackbit Studio](https://stackbit.com?utm_source=project-readme&utm_medium=referral&utm_campaign=user_themes).

[![](https://i3.ytimg.com/vi/zd9lGRLVDm4/hqdefault.jpg)](https://stackbit.link/project-readme-lead-video)

Here's a few resources to get you started:

- 📺 &nbsp; [Editing Content](https://stackbit.link/project-readme-editing-video)
- 📺 &nbsp; [Adding, Reordering and Deleting Items](https://stackbit.link/project-readme-adding-video)
- 📺 &nbsp; [Collaboration](https://stackbit.link/project-readme-collaboration-video)
- 📺 &nbsp; [Publishing](https://stackbit.link/project-readme-publishing-video)
- 📚 &nbsp; [Stackbit Documentation](https://stackbit.link/project-readme-documentation)

If you need a hand, make sure to check the [Stackbit support page](https://stackbit.link/project-readme-support).


## Develop Locally

1. [Create a site](https://app.stackbit.com/create?theme=https://github.com/stackbit-themes/starter-gatsby-sanity&utm_source=theme-readme&utm_medium=referral&utm_campaign=stackbit_themes) from this theme using Stackbit.

1. Stackbit will create a new GitHub repository, a [Sanity](https://www.sanity.io) project, and deploy the site via the selected serverless deployment platform (e.g., [Netlify](https://www.netlify.com)).

1. Stackbit will deploy the [Sanity Studio](https://www.sanity.io/studio) and [Stanity GraphQL API](https://www.sanity.io/docs/graphql) for you.

1. When finished, clone the generated repository.

1. Install npm dependencies:

        npm install

1. Optionally, run Sanity Studio locally by installing sanity-cli, and then installing and running the studio from the `/studio` directory. You may be required to login with the Sanity CLI.

        npm install -g @sanity/cli
        cd studio
        sanity install
        sanity start

1. Set the following environment variables locally.

   - `SANITY_PROJECT_ID` - Sanity project ID (you can copy it from the `api.projectId` key in [studio/sanity.json](studio/sanity.json))
   - `SANITY_DATASET` - Sanity dataset name (optional, default is `production`)
   - `SANITY_TOKEN` - Sanity read-write token (you can copy it from the "environment" section in your Netlify site https://app.netlify.com/sites/<netlify-site-name>/settings/deploys#environment)

1. Start the Gatsby local development server (run from project root):

        npm run develop

1. Open [http://localhost:8000/](http://localhost:8000/) in the browser

1. 🎉


## Contributing

To contribute to this theme please follow the following steps:

1. Create an empty Sanity project

1. Clone this repository locally

1. Run npm install

        npm install

1. Create Sanity read-write Sanity token and assign it to `SANITY_TOKEN` environment variable

1. Assign Sanity project ID and dataset to `SANITY_PROJECT_ID` and `SANITY_DATASET` environment variables respectively

1. Import the initial theme contents by running

        node sanity-export/import.js

1. Replace the `SANITY_PROJECT_ID` in [studio/sanity.json](studio/sanity.json) with your Sanity project id

1. Install and start local Sanity Studio

1. Run gatsby locally

        npm run develop

1. When you have finished updating the code and contents in Sanity Studio, import the contents back to sanity-export/export.js by running

        node sanity-export/export.js

1. Set back the `"projectId": "SANITY_PROJECT_ID"` in [studio/sanity.json](studio/sanity.json)
     
1. Submit a pull-request

1. 🎉


## Colophon

Generated at `2021-02-14T16:04:07.807Z` by Stackbit version `0.3.48`.
