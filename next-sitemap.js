module.exports = {
  siteUrl: `${process.env.NEXT_PUBLIC_SITE_URL}`,
  exclude: ['/ua/404', '/404'],
  changefreq: 'monthly',
  priority: 1,
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        disallow: '',
      },
    ],
    additionalSitemaps: [],
  },
};
