import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/building-ncn/core-logic.html.vue"
const data = JSON.parse("{\"path\":\"/building-ncn/core-logic.html\",\"title\":\"Core Logic\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Keeper\",\"slug\":\"keeper\",\"link\":\"#keeper\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"building-ncn/core-logic.md\"}")
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
