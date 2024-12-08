import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/getting-started/client.html.vue"
const data = JSON.parse("{\"path\":\"/getting-started/client.html\",\"title\":\"Client\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Rust\",\"slug\":\"rust\",\"link\":\"#rust\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"getting-started/client.md\"}")
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
