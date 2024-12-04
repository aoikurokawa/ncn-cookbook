export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Cooking with NCN"} }],
  ["/core-concepts/vault.html", { loader: () => import(/* webpackChunkName: "core-concepts_vault.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/core-concepts/vault.html.js"), meta: {"title":"Vault"} }],
  ["/getting-started/cli.html", { loader: () => import(/* webpackChunkName: "getting-started_cli.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/getting-started/cli.html.js"), meta: {"title":"Vault"} }],
  ["/guide/getting-started.html", { loader: () => import(/* webpackChunkName: "guide_getting-started.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/guide/getting-started.html.js"), meta: {"title":"Getting Started"} }],
  ["/guide/introduction.html", { loader: () => import(/* webpackChunkName: "guide_introduction.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/guide/introduction.html.js"), meta: {"title":"Introduction"} }],
  ["/guide/ncn-design.html", { loader: () => import(/* webpackChunkName: "guide_ncn-design.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/guide/ncn-design.html.js"), meta: {"title":"NCN Design"} }],
  ["/guide/restaking-program.html", { loader: () => import(/* webpackChunkName: "guide_restaking-program.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/guide/restaking-program.html.js"), meta: {"title":"Restaking Program"} }],
  ["/guide/vault-program.html", { loader: () => import(/* webpackChunkName: "guide_vault-program.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/guide/vault-program.html.js"), meta: {"title":"Vault Program"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
