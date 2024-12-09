import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/building-ncn/pricing.html.vue"
const data = JSON.parse("{\"path\":\"/building-ncn/pricing.html\",\"title\":\"Pricing\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Tracked Mints\",\"slug\":\"tracked-mints\",\"link\":\"#tracked-mints\",\"children\":[{\"level\":3,\"title\":\"TrackedMints\",\"slug\":\"trackedmints\",\"link\":\"#trackedmints\",\"children\":[]},{\"level\":3,\"title\":\"MintEntry\",\"slug\":\"mintentry\",\"link\":\"#mintentry\",\"children\":[]}]},{\"level\":2,\"title\":\"Weight Table\",\"slug\":\"weight-table\",\"link\":\"#weight-table\",\"children\":[{\"level\":3,\"title\":\"WeightTable\",\"slug\":\"weighttable\",\"link\":\"#weighttable\",\"children\":[]},{\"level\":3,\"title\":\"WeightEntry\",\"slug\":\"weightentry\",\"link\":\"#weightentry\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"building-ncn/pricing.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
