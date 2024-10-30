module.exports = {
  siteMetadata: {
    title: `Gatsby Sydney Ecommerce Theme`,
    siteUrl: `https://jamm.matter.design`,
  },
  plugins: [

    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-PNFBGFRC', // 替换为你的 GTM 容器 ID
        includeInDevelopment: true,
        defaultDataLayer: { platform: 'gatsby' },
        // 可选：指定 GTM 脚本的路径
       // gtmAuth: 'YOUR_GTM_ENV_AUTH_STRING',
        //gtmPreview: 'YOUR_GTM_ENV_PREVIEW_NAME',
        dataLayerName: 'dataLayer',
      },
    },
    // 其他插件...
  ],
};
