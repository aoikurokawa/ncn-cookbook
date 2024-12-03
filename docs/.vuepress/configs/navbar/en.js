// import type { NavbarOptions } from '@vuepress/theme-default'
// import { VERSION } from '../meta.js'

export const navbarEn = [
  {
    text: "Guide",
    children: [
      "/guide/introduction.md",
      "/guide/getting-started.md",
      "/guide/ncn-design.md",
      "/guide/page.md",
      "/guide/markdown.md",
      "/guide/assets.md",
      "/guide/i18n.md",
      "/guide/deployment.md",
      "/guide/theme.md",
      "/guide/plugin.md",
      "/guide/bundler.md",
      "/guide/migration.md",
      "/guide/troubleshooting.md",
    ],
  },
  {
    text: "Reference",
    children: [
      {
        text: "Jito Restaking",
        children: [
          {
            text: "Jito Restaking Repository",
            link: "https://github.com/jito-foundation/restaking",
          },
          {
            text: "Jito Restaking Documentation",
            link: "https://docs.restaking.jito.network/",
          },
          {
            text: "Jito Restaking CLI",
            link: "https://docs.restaking.jito.network/tools/00_cli/",
          }
        ],
      },
      {
        text: "Bundlers",
        children: [
          "/reference/bundler/vite.md",
          "/reference/bundler/webpack.md",
        ],
      },
      {
        text: "Ecosystem",
        children: [
          {
            text: "Default Theme",
            link: "https://ecosystem.vuejs.press/themes/default/",
          },
          {
            text: "Plugins",
            link: "https://ecosystem.vuejs.press/plugins/",
          },
        ],
      },
    ],
  },

  {
    text: "Learn More",
    children: [
      {
        text: "Advanced",
        children: [
          "/advanced/architecture.md",
          "/advanced/plugin.md",
          "/advanced/theme.md",
          {
            text: "Cookbook",
            link: "/advanced/cookbook/",
          },
        ],
      },
      {
        text: "Resources",
        children: [
          {
            text: "Ecosystem",
            link: "https://ecosystem.vuejs.press/",
          },
          {
            text: "MarketPlace",
            link: "https://marketplace.vuejs.press",
          },
          {
            text: "Contributing Guide",
            link: "https://github.com/vuepress/core/blob/main/CONTRIBUTING.md",
          },
        ],
      },
    ],
  },
//   {
//     text: `v${VERSION}`,
//     children: [
//       {
//         text: "Changelog",
//         link: "https://github.com/vuepress/core/blob/main/CHANGELOG.md",
//       },
//       {
//         text: "v1.x",
//         link: "https://v1.vuepress.vuejs.org",
//       },
//       {
//         text: "v0.x",
//         link: "https://v0.vuepress.vuejs.org",
//       },
//     ],
//   },
  // TODO: remove the type assertion
];
