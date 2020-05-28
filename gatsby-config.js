module.exports = {
  pathPrefix: "/website",
  siteMetadata: {
    title: `Studio FrostBit`,
    description: `Lorem ipsum`,
    author: `@Studio_FrostBit`,
  },
  plugins: [
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
        name: `Studio FrostBit`,
        short_name: `Studio FrostBit`,
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
