import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/building-ncn/ncn-design.html.vue"
const data = JSON.parse("{\"path\":\"/building-ncn/ncn-design.html\",\"title\":\"NCN Design\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Onchain NCN Program\",\"slug\":\"onchain-ncn-program\",\"link\":\"#onchain-ncn-program\",\"children\":[]},{\"level\":2,\"title\":\"Operator Client\",\"slug\":\"operator-client\",\"link\":\"#operator-client\",\"children\":[]},{\"level\":2,\"title\":\"Permissionless Cranker\",\"slug\":\"permissionless-cranker\",\"link\":\"#permissionless-cranker\",\"children\":[]}],\"git\":{\"updatedTime\":1733775085000,\"contributors\":[{\"name\":\"aoikurokawa\",\"email\":\"ht.so.ik0102@gmail.com\",\"commits\":1,\"url\":\"https://github.com/aoikurokawa\"}]},\"filePathRelative\":\"building-ncn/ncn-design.md\"}")
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
