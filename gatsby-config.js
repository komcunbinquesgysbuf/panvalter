module.exports = {
  siteMetadata: {
    title: `panvalter`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: "gatsby-transformer-remark", options: {
        plugins: [
          {
            resolve: "gatsby-remark-normalize-paths",
            options: {
              pathFields:
              - pages
            },
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              staticFolderName: '.',
              include: ['featured'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {maxWidth: 800},
          },
        ],
      },
    },
  ]
};