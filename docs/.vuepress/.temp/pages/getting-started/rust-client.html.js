import comp from "/mnt/nvme0n1/dev/ncn-cookbook/docs/.vuepress/.temp/pages/getting-started/rust-client.html.vue"
const data = JSON.parse("{\"path\":\"/getting-started/rust-client.html\",\"title\":\"Rust Client\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"Jito Restaking Client\",\"slug\":\"jito-restaking-client\",\"link\":\"#jito-restaking-client\",\"children\":[]},{\"level\":2,\"title\":\"Jito Vault Client\",\"slug\":\"jito-vault-client\",\"link\":\"#jito-vault-client\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"getting-started/rust-client.md\"}")
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
