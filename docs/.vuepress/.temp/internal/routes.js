export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Cooking with Jito Restaking"} }],
  ["/introduction/introduction.html", { loader: () => import(/* webpackChunkName: "introduction_introduction.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/introduction/introduction.html.js"), meta: {"title":"Introduction"} }],
  ["/core-concepts/ncn.html", { loader: () => import(/* webpackChunkName: "core-concepts_ncn.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/core-concepts/ncn.html.js"), meta: {"title":"NCN"} }],
  ["/core-concepts/operator.html", { loader: () => import(/* webpackChunkName: "core-concepts_operator.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/core-concepts/operator.html.js"), meta: {"title":"Operator"} }],
  ["/core-concepts/vault.html", { loader: () => import(/* webpackChunkName: "core-concepts_vault.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/core-concepts/vault.html.js"), meta: {"title":"Vault"} }],
  ["/references/jito-tip-router.html", { loader: () => import(/* webpackChunkName: "references_jito-tip-router.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/references/jito-tip-router.html.js"), meta: {"title":"Jito Tip Router Program"} }],
  ["/getting-started/installation.html", { loader: () => import(/* webpackChunkName: "getting-started_installation.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/getting-started/installation.html.js"), meta: {"title":"Installation"} }],
  ["/getting-started/rust-client.html", { loader: () => import(/* webpackChunkName: "getting-started_rust-client.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/getting-started/rust-client.html.js"), meta: {"title":"Rust Client"} }],
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
