/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: '1. CI/CD Architecture',
      collapsed: false,
      items: [
        '01-cicd-architecture/index',
        '01-cicd-architecture/github-actions-deep-dive',
        '01-cicd-architecture/pipeline-strategy',
        '01-cicd-architecture/diagrams',
      ],
    },
    {
      type: 'category',
      label: '2. Vercel Deployment',
      items: [
        '02-vercel-deployment/index',
        '02-vercel-deployment/configuration',
        '02-vercel-deployment/secrets-management',
        '02-vercel-deployment/troubleshooting',
      ],
    },
    {
      type: 'category',
      label: '3. GitHub Pages Deployment',
      items: [
        '03-github-pages-deployment/index',
        '03-github-pages-deployment/setup-guide',
        '03-github-pages-deployment/custom-domain',
        '03-github-pages-deployment/limitations',
      ],
    },
    {
      type: 'category',
      label: '4. Best Practices',
      items: [
        '04-best-practices/index',
        '04-best-practices/security',
        '04-best-practices/monitoring',
        '04-best-practices/cost-optimization',
      ],
    },
    '05-troubleshooting/common-errors',
  ],
};

module.exports = sidebars;