// @ts-check
const { themes } = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DevOps CI/CD Pipeline Documentation',
  tagline: 'Deploying to Vercel & GitHub Pages with GitHub Actions',
  favicon: 'img/favicon.ico',
  url: 'https://Beautero-ks.github.io',
  baseUrl: '/my-devops-docs/',
  organizationName: 'Beautero-ks',
  projectName: 'my-devops-docs',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/Beautero-ks/my-devops-docs/edit/main/',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/Beautero-ks/my-devops-docs/edit/main/',
          postsPerPage: 5,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/devops-social-card.jpg',
    navbar: {
      title: 'DevOps Pipeline',
      logo: {
        alt: 'DevOps Logo',
        src: 'img/logo.svg',
      },
      items: [
        { type: 'doc', docId: 'intro', position: 'left', label: 'Documentation' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { to: '/showcase', label: 'Showcase', position: 'left' },
        {
          href: 'https://github.com/Beautero-ks/my-devops-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            { label: 'Architecture', to: '/docs/cicd-architecture' },
            { label: 'Vercel Deployment', to: '/docs/vercel-deployment' },
            { label: 'GitHub Pages', to: '/docs/github-pages-deployment' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/Beautero-ks/my-devops-docs' },
            { label: 'Vercel', href: 'https://vercel.com' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} DevOps Pipeline Project. Built with Docusaurus.`,
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ['yaml', 'bash', 'diff'],
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
  },
};

module.exports = config;