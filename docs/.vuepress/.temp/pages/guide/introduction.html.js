import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/guide/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/guide/introduction.html\",\"title\":\"Introduction\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"What is NCN\",\"slug\":\"what-is-ncn\",\"link\":\"#what-is-ncn\",\"children\":[]},{\"level\":2,\"title\":\"Examples\",\"slug\":\"examples\",\"link\":\"#examples\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/introduction.md\"}")
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
