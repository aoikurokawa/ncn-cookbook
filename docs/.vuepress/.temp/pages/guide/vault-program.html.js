import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/guide/vault-program.html.vue"
const data = JSON.parse("{\"path\":\"/guide/vault-program.html\",\"title\":\"Vault Program\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":3,\"title\":\"Initialize Vault\",\"slug\":\"initialize-vault\",\"link\":\"#initialize-vault\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/vault-program.md\"}")
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
