import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Cooking with Jito Restaking\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Contributing\",\"slug\":\"contributing\",\"link\":\"#contributing\",\"children\":[]},{\"level\":2,\"title\":\"How to Read the Cookbook\",\"slug\":\"how-to-read-the-cookbook\",\"link\":\"#how-to-read-the-cookbook\",\"children\":[]}],\"git\":{\"updatedTime\":1733429394000,\"contributors\":[{\"name\":\"Aoi Kurokawa\",\"email\":\"62386689+aoikurokawa@users.noreply.github.com\",\"commits\":3,\"url\":\"https://github.com/Aoi Kurokawa\"}]},\"filePathRelative\":\"README.md\"}")
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
