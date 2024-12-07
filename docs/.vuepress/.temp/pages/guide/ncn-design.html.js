import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/guide/ncn-design.html.vue"
const data = JSON.parse("{\"path\":\"/guide/ncn-design.html\",\"title\":\"NCN Design\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Onchain NCN Program\",\"slug\":\"onchain-ncn-program\",\"link\":\"#onchain-ncn-program\",\"children\":[{\"level\":3,\"title\":\"Pricing\",\"slug\":\"pricing\",\"link\":\"#pricing\",\"children\":[]},{\"level\":3,\"title\":\"Snapshot\",\"slug\":\"snapshot\",\"link\":\"#snapshot\",\"children\":[]},{\"level\":3,\"title\":\"Core Logic\",\"slug\":\"core-logic\",\"link\":\"#core-logic\",\"children\":[]},{\"level\":3,\"title\":\"Rewards Payment\",\"slug\":\"rewards-payment\",\"link\":\"#rewards-payment\",\"children\":[]}]},{\"level\":2,\"title\":\"Node Operator Client\",\"slug\":\"node-operator-client\",\"link\":\"#node-operator-client\",\"children\":[]},{\"level\":2,\"title\":\"Permissionless Cranker\",\"slug\":\"permissionless-cranker\",\"link\":\"#permissionless-cranker\",\"children\":[]}],\"git\":{\"updatedTime\":1733538236000,\"contributors\":[{\"name\":\"aoikurokawa\",\"email\":\"ht.so.ik0102@gmail.com\",\"commits\":1,\"url\":\"https://github.com/aoikurokawa\"},{\"name\":\"Aoi Kurokawa\",\"email\":\"62386689+aoikurokawa@users.noreply.github.com\",\"commits\":2,\"url\":\"https://github.com/Aoi Kurokawa\"}]},\"filePathRelative\":\"guide/ncn-design.md\"}")
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
