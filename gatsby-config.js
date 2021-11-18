module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "marriage site",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Shippori Antique', 'sans-serif']
        }
      }
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    
  ],
};
