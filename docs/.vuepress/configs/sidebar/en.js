// import type { SidebarOptions } from '@vuepress/theme-default'

export const sidebarEn = {
  '/': [
    {
      text: 'Introduction',
      collapsible: true,
      children: [
        '/introduction/jito-restaking.md',
        '/introduction/ncn-overview.md',
      ],
    },
    {
      text: 'Core Concepts',
      collapsible: true,
      children: [
        '/core-concepts/overview.md',
        '/core-concepts/ncn.md',
        '/core-concepts/operator.md',
        '/core-concepts/vault.md',
      ],
    },
    {
      text: 'Getting Started',
      collapsible: true,
      children: [
        '/getting-started/installation.md',
        '/getting-started/rust-client.md',
        '/getting-started/typescript-client.md',
        '/getting-started/python-client.md',
      ],
    },
    {
      text: 'Integrating with Jito Restaking',
      children: [
        '/integrating-with-jito-restaking/restaking-program.md',
        '/integrating-with-jito-restaking/vault-program.md',
      ],
    },
    {
      text: 'Building NCN',
      children: [
        '/building-ncn/ncn-design.md',
        '/building-ncn/pricing.md',
        '/building-ncn/snapshot.md',
        '/building-ncn/core-logic.md',
        '/building-ncn/reward-payments.md',
      ],
    },
    {
      text: 'References',
      children: [
        '/references/overview.md',
        '/references/jito-tip-router.md',
      ],
    },
    {
      text: 'Developer Resources',
      collapsible: true,
      children: [
        '/developer-resources/developer-resources.md',
      ],
    },
  ],
  '/advanced/': [
    {
      text: 'Advanced',
      children: [
        '/advanced/architecture.md',
        '/advanced/plugin.md',
        '/advanced/theme.md',
      ],
    },
    {
      text: 'Cookbook',
      children: [
        '/advanced/cookbook/README.md',
        '/advanced/cookbook/usage-of-client-config.md',
        '/advanced/cookbook/adding-extra-pages.md',
        '/advanced/cookbook/making-a-theme-extendable.md',
        '/advanced/cookbook/passing-data-to-client-code.md',
        '/advanced/cookbook/markdown-and-vue-sfc.md',
        '/advanced/cookbook/resolving-routes.md',
      ],
    },
  ],
  '/reference/': [
    {
      text: 'Core',
      collapsible: true,
      children: [
        '/reference/cli.md',
        '/reference/config.md',
        '/reference/frontmatter.md',
        '/reference/components.md',
        '/reference/plugin-api.md',
        '/reference/theme-api.md',
        '/reference/client-api.md',
        '/reference/node-api.md',
      ],
    },
    {
      text: 'Bundlers',
      children: ['/reference/bundler/vite.md', '/reference/bundler/webpack.md'],
    },
    {
      text: 'Ecosystem',
      children: [
        {
          text: 'Default Theme',
          link: 'https://ecosystem.vuejs.press/themes/default/',
        },
        {
          text: 'Plugins',
          link: 'https://ecosystem.vuejs.press/plugins/',
        },
      ],
    },
  ],
}