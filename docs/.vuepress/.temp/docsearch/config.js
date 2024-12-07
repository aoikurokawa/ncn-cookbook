
import { DocSearch, injectDocSearchConfig } from "/mnt/nvme0n1/dev/ncn-cookbook/node_modules/@vuepress/plugin-docsearch/lib/client/index.js"
import '/mnt/nvme0n1/dev/ncn-cookbook/node_modules/@docsearch/css/dist/style.css'
import '/mnt/nvme0n1/dev/ncn-cookbook/node_modules/@vuepress/plugin-docsearch/lib/client/styles/docsearch.css'
import '/mnt/nvme0n1/dev/ncn-cookbook/node_modules/@vuepress/plugin-docsearch/lib/client/styles/vars.css'

export default {
  enhance({ app }) {
    injectDocSearchConfig(app)
    app.component('SearchBox', DocSearch)
  },
}
