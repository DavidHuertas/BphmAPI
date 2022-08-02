module.exports = {
  title: 'Blasphemous API',
  tagline: 'Documentation for Blasphemous API',
  url: 'https://bphm-api-docs.vercel.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/blasphemous-icon.png',
  organizationName: 'davidhuertas', // Usually your GitHub org/user name.
  projectName: 'Blasphemous API', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Blasphemous API - Docs',
      logo: {
        alt: 'Blasphemous API logo',
        src: 'img/blasphemous-icon.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/davidhuertas/BphmAPI',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `This site is not filiate nor funded by The Game Kitchen. It was made with the sole purpose of fun and knowledge. Blasphemous API ${new Date().getFullYear()}. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
