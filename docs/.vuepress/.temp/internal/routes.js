export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Cooking with Jito Restaking"} }],
  ["/building-ncn/core-logic.html", { loader: () => import(/* webpackChunkName: "building-ncn_core-logic.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/building-ncn/core-logic.html.js"), meta: {"title":"Core Logic"} }],
  ["/building-ncn/ncn-design.html", { loader: () => import(/* webpackChunkName: "building-ncn_ncn-design.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/building-ncn/ncn-design.html.js"), meta: {"title":"NCN Design"} }],
  ["/building-ncn/node-operator-client.html", { loader: () => import(/* webpackChunkName: "building-ncn_node-operator-client.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/building-ncn/node-operator-client.html.js"), meta: {"title":"Node Operator Client"} }],
  ["/building-ncn/permissionless-cranker.html", { loader: () => import(/* webpackChunkName: "building-ncn_permissionless-cranker.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/building-ncn/permissionless-cranker.html.js"), meta: {"title":"Permissionless Cranker"} }],
  ["/building-ncn/pricing.html", { loader: () => import(/* webpackChunkName: "building-ncn_pricing.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/building-ncn/pricing.html.js"), meta: {"title":"Pricing"} }],
  ["/building-ncn/reward-payments.html", { loader: () => import(/* webpackChunkName: "building-ncn_reward-payments.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/building-ncn/reward-payments.html.js"), meta: {"title":"Rewards Payment"} }],
  ["/building-ncn/snapshot.html", { loader: () => import(/* webpackChunkName: "building-ncn_snapshot.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/building-ncn/snapshot.html.js"), meta: {"title":"Snapshot"} }],
  ["/getting-started/installation.html", { loader: () => import(/* webpackChunkName: "getting-started_installation.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/getting-started/installation.html.js"), meta: {"title":"Installation"} }],
  ["/getting-started/python-client.html", { loader: () => import(/* webpackChunkName: "getting-started_python-client.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/getting-started/python-client.html.js"), meta: {"title":"Python Client"} }],
  ["/getting-started/rust-client.html", { loader: () => import(/* webpackChunkName: "getting-started_rust-client.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/getting-started/rust-client.html.js"), meta: {"title":"Rust Client"} }],
  ["/getting-started/typescript-client.html", { loader: () => import(/* webpackChunkName: "getting-started_typescript-client.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/getting-started/typescript-client.html.js"), meta: {"title":"TypeScript Client"} }],
  ["/core-concepts/ncn.html", { loader: () => import(/* webpackChunkName: "core-concepts_ncn.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/core-concepts/ncn.html.js"), meta: {"title":"NCN"} }],
  ["/core-concepts/operator.html", { loader: () => import(/* webpackChunkName: "core-concepts_operator.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/core-concepts/operator.html.js"), meta: {"title":"Operator"} }],
  ["/core-concepts/overview.html", { loader: () => import(/* webpackChunkName: "core-concepts_overview.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/core-concepts/overview.html.js"), meta: {"title":"Overview"} }],
  ["/core-concepts/vault.html", { loader: () => import(/* webpackChunkName: "core-concepts_vault.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/core-concepts/vault.html.js"), meta: {"title":"Vault"} }],
  ["/developer-resources/developer-resources.html", { loader: () => import(/* webpackChunkName: "developer-resources_developer-resources.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/developer-resources/developer-resources.html.js"), meta: {"title":"Learning & Core Resources for Jito Restaking"} }],
  ["/guide/ncn-design.html", { loader: () => import(/* webpackChunkName: "guide_ncn-design.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/guide/ncn-design.html.js"), meta: {"title":"NCN Design"} }],
  ["/guide/restaking-program.html", { loader: () => import(/* webpackChunkName: "guide_restaking-program.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/guide/restaking-program.html.js"), meta: {"title":"Restaking Program"} }],
  ["/guide/vault-program.html", { loader: () => import(/* webpackChunkName: "guide_vault-program.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/guide/vault-program.html.js"), meta: {"title":"Vault Program"} }],
  ["/introduction/jito-restaking.html", { loader: () => import(/* webpackChunkName: "introduction_jito-restaking.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/introduction/jito-restaking.html.js"), meta: {"title":"Intro to Jito Restaking"} }],
  ["/introduction/ncn-overview.html", { loader: () => import(/* webpackChunkName: "introduction_ncn-overview.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/introduction/ncn-overview.html.js"), meta: {"title":"NCN Overview"} }],
  ["/references/jito-tip-router.html", { loader: () => import(/* webpackChunkName: "references_jito-tip-router.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/references/jito-tip-router.html.js"), meta: {"title":"Jito Tip Router Program"} }],
  ["/references/overview.html", { loader: () => import(/* webpackChunkName: "references_overview.html" */"/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/references/overview.html.js"), meta: {"title":"Overview of Real-World Projects"} }],
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
