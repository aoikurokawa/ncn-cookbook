import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/getting-started/getting-started.html.vue"
const data = JSON.parse("{\"path\":\"/getting-started/getting-started.html\",\"title\":\"Getting Started\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{},\"filePathRelative\":\"getting-started/getting-started.md\"}")
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
