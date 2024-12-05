import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/introduction/introduction.html.vue"
const data = JSON.parse("{\"path\":\"/introduction/introduction.html\",\"title\":\"Introduction\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"What is NCN\",\"slug\":\"what-is-ncn\",\"link\":\"#what-is-ncn\",\"children\":[]},{\"level\":2,\"title\":\"Examples\",\"slug\":\"examples\",\"link\":\"#examples\",\"children\":[]},{\"level\":2,\"title\":\"References\",\"slug\":\"references\",\"link\":\"#references\",\"children\":[]}],\"git\":{\"updatedTime\":1733401873000,\"contributors\":[{\"name\":\"aoikurokawa\",\"email\":\"ht.so.ik0102@gmail.com\",\"commits\":2,\"url\":\"https://github.com/aoikurokawa\"},{\"name\":\"Aoi Kurokawa\",\"email\":\"62386689+aoikurokawa@users.noreply.github.com\",\"commits\":1,\"url\":\"https://github.com/Aoi Kurokawa\"}]},\"filePathRelative\":\"introduction/introduction.md\"}")
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
