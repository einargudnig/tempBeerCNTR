const config = require('./config');

module.exports = {
  /* Your site config here */
    pathPrefix: config.pathPrefix,
    siteMetadata: {
      title: 'Einar Guðni',
      description: 'My homepage',
    },
    plugins: [
      'gatsby-plugin-react-helmet',
      'gatsby-plugin-sass',
      {
        resolve: 'gatsby-source-filesystem',
        options: {
          name: 'src',
          path: `${__dirname}/src/`
        }
      },
      'gatsby-plugin-sharp',
      {
        resolve: 'gatsby-transformer-remark',
        options: {
          plugins: [
            'gatsby-remark-relative-images',
            {
              resolve: 'gatsby-remark-images',
              options: {
                maxWidth: 750,
                linkImagesToOriginal: false
              }
            }
          ]
        }
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: config.manifestName,
          short_name: config.manifestShortName,
          start_url: config.pathPrefix || config.manifestStartUrl,
          background_color: config.manifestBackgroundColor,
          theme_color: config.manifestThemeColor,
          display: config.manifestDisplay,
          icon: config.manifestIcon, // This path is relative to the root of the site.
        },
      },
      'gatsby-plugin-sass',
      'gatsby-plugin-sitemap',
      'gatsby-plugin-offline',
    ]
}
