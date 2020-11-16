module.exports = {
  pathPrefix: "/website",
  siteMetadata: {
    title: `Studio Frostbit`,
    description: `Studio Frostbit - Student Company`,
    author: `@studiofrostbit`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: [`./src/styling/resources.scss`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Studio Frostbit`,
        short_name: `Studio Frostbit`,
        start_url: `.`,
        background_color: `#ffffff`,
        theme_color: `#29b27e`,
        display: `minimal-ui`,
        icon: `src/images/Icon.png`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-no-javascript",
  ],
}
