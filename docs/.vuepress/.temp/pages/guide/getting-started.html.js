import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/guide/getting-started.html.vue"
const data = JSON.parse("{\"path\":\"/guide/getting-started.html\",\"title\":\"Getting Started\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Initialize NCN\",\"slug\":\"initialize-ncn\",\"link\":\"#initialize-ncn\",\"children\":[]},{\"level\":2,\"title\":\"Initialize Operator\",\"slug\":\"initialize-operator\",\"link\":\"#initialize-operator\",\"children\":[]},{\"level\":2,\"title\":\"Initialize Vault\",\"slug\":\"initialize-vault\",\"link\":\"#initialize-vault\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/getting-started.md\"}")
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
