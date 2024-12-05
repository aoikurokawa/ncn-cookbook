import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/guide/core-concepts.html.vue"
const data = JSON.parse("{\"path\":\"/guide/core-concepts.html\",\"title\":\"Core Concepts\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"NCN\",\"slug\":\"ncn\",\"link\":\"#ncn\",\"children\":[]},{\"level\":2,\"title\":\"Operator\",\"slug\":\"operator\",\"link\":\"#operator\",\"children\":[]},{\"level\":2,\"title\":\"Vault\",\"slug\":\"vault\",\"link\":\"#vault\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/core-concepts.md\"}")
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
