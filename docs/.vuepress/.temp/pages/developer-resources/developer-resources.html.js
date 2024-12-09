import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/developer-resources/developer-resources.html.vue"
const data = JSON.parse("{\"path\":\"/developer-resources/developer-resources.html\",\"title\":\"Learning & Core Resources for Jito Restaking\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Developer Learning Resources\",\"slug\":\"developer-learning-resources\",\"link\":\"#developer-learning-resources\",\"children\":[]},{\"level\":2,\"title\":\"Jito Restaking Core Repos\",\"slug\":\"jito-restaking-core-repos\",\"link\":\"#jito-restaking-core-repos\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"developer-resources/developer-resources.md\"}")
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
