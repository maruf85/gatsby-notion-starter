import type { GatsbyConfig } from "gatsby"
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: "My First Gatsby Site",
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: 'gatsby-source-rest-api',
      options: {
        endpoints: [
          'https://jsonplaceholder.typicode.com/posts',
        ],
      },
    },
    {
      resolve: `gatsby-source-notion-api`,
      options: {
        token: process.env.NOTION_SECRET,
        databaseId: process.env.NOTION_DATABASE_ID,
        propsToFrontmatter: true,
        lowerTitleLevel: true,
      },
    },
  ],
}

export default config
