/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://kmchmk.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
}
