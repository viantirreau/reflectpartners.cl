module.exports = {
  siteMetadata: {
    title: `Reflect Partners`,
    description: `Reflect Partners ofrece servicios fotográficos y de entretención en diversos tipos de eventos, tales como matrimonios, cumpleaños, eventos corporativos y muchos más`,
    author: `@viantirreau`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `reflectpartners-cl`,
        short_name: `reflectpartners`,
        start_url: `/`,
        background_color: `#ffdb01`,
        theme_color: `#ffdb01`,
        display: `minimal-ui`,
        icon: `src/images/rp-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-transition-link`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`lato\:300,400,700,900`, `montserrat\:300,400,700,900`],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
