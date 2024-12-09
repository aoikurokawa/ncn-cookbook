import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/references/overview.html.vue"
const data = JSON.parse("{\"path\":\"/references/overview.html\",\"title\":\"Overview of Real-World Projects\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[],\"git\":{\"updatedTime\":1733775661000,\"contributors\":[{\"name\":\"Aoi Kurokawa\",\"email\":\"62386689+aoikurokawa@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Aoi Kurokawa\"}]},\"filePathRelative\":\"references/overview.md\"}")
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
