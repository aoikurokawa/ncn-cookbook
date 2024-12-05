export const themeData = JSON.parse("{\"locales\":{\"/\":{\"navbar\":[{\"text\":\"Home\",\"children\":[\"/introduction/introduction.md\",\"/getting-started/getting-started.md\",\"/core-concepts/ncn.md\",\"/guide/restaking-program.md\"]},{\"text\":\"Reference\",\"children\":[{\"text\":\"Jito Restaking\",\"children\":[{\"text\":\"Jito Restaking Repository\",\"link\":\"https://github.com/jito-foundation/restaking\"},{\"text\":\"Jito Restaking Documentation\",\"link\":\"https://docs.restaking.jito.network/\"},{\"text\":\"Jito Restaking CLI\",\"link\":\"https://docs.restaking.jito.network/tools/00_cli/\"}]}]},{\"text\":\"Learn More\",\"children\":[{\"text\":\"Advanced\",\"children\":[\"/advanced/architecture.md\",\"/advanced/plugin.md\",\"/advanced/theme.md\",{\"text\":\"Cookbook\",\"link\":\"/advanced/cookbook/\"}]},{\"text\":\"Resources\",\"children\":[{\"text\":\"Ecosystem\",\"link\":\"https://ecosystem.vuejs.press/\"},{\"text\":\"MarketPlace\",\"link\":\"https://marketplace.vuejs.press\"},{\"text\":\"Contributing Guide\",\"link\":\"https://github.com/vuepress/core/blob/main/CONTRIBUTING.md\"}]}]}],\"sidebar\":{\"/\":[{\"text\":\"Introduction\",\"children\":[\"/introduction/introduction.md\"]},{\"text\":\"Getting Started\",\"children\":[\"/getting-started/getting-started.md\",\"/getting-started/installation.md\"]},{\"text\":\"Core Concepts\",\"children\":[\"/core-concepts/ncn.md\",\"/core-concepts/operator.md\",\"/core-concepts/vault.md\"]},{\"text\":\"Guides\",\"children\":[\"/guide/restaking-program.md\",\"/guide/vault-program.md\",\"/guide/ncn-design.md\",\"/guide/assets.md\",\"/guide/i18n.md\",\"/guide/deployment.md\",\"/guide/theme.md\",\"/guide/plugin.md\",\"/guide/bundler.md\",\"/guide/migration.md\",\"/guide/troubleshooting.md\"]},{\"text\":\"References\",\"children\":[\"/references/jito-tip-router.md\"]}],\"/advanced/\":[{\"text\":\"Advanced\",\"children\":[\"/advanced/architecture.md\",\"/advanced/plugin.md\",\"/advanced/theme.md\"]},{\"text\":\"Cookbook\",\"children\":[\"/advanced/cookbook/README.md\",\"/advanced/cookbook/usage-of-client-config.md\",\"/advanced/cookbook/adding-extra-pages.md\",\"/advanced/cookbook/making-a-theme-extendable.md\",\"/advanced/cookbook/passing-data-to-client-code.md\",\"/advanced/cookbook/markdown-and-vue-sfc.md\",\"/advanced/cookbook/resolving-routes.md\"]}],\"/reference/\":[{\"text\":\"Core\",\"collapsible\":true,\"children\":[\"/reference/cli.md\",\"/reference/config.md\",\"/reference/frontmatter.md\",\"/reference/components.md\",\"/reference/plugin-api.md\",\"/reference/theme-api.md\",\"/reference/client-api.md\",\"/reference/node-api.md\"]},{\"text\":\"Bundlers\",\"children\":[\"/reference/bundler/vite.md\",\"/reference/bundler/webpack.md\"]},{\"text\":\"Ecosystem\",\"children\":[{\"text\":\"Default Theme\",\"link\":\"https://ecosystem.vuejs.press/themes/default/\"},{\"text\":\"Plugins\",\"link\":\"https://ecosystem.vuejs.press/plugins/\"}]}]},\"editLinkText\":\"Edit this page on GitHub\",\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"navbar\":[],\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
