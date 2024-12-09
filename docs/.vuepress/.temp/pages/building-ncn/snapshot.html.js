import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/building-ncn/snapshot.html.vue"
const data = JSON.parse("{\"path\":\"/building-ncn/snapshot.html\",\"title\":\"Snapshot\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Epoch Snapshot\",\"slug\":\"epoch-snapshot\",\"link\":\"#epoch-snapshot\",\"children\":[]},{\"level\":2,\"title\":\"Operator Snapshot\",\"slug\":\"operator-snapshot\",\"link\":\"#operator-snapshot\",\"children\":[{\"level\":3,\"title\":\"OperatorSnapshot\",\"slug\":\"operatorsnapshot\",\"link\":\"#operatorsnapshot\",\"children\":[]},{\"level\":3,\"title\":\"VaultOperatorStakeWeight\",\"slug\":\"vaultoperatorstakeweight\",\"link\":\"#vaultoperatorstakeweight\",\"children\":[]}]}],\"git\":{},\"filePathRelative\":\"building-ncn/snapshot.md\"}")
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
