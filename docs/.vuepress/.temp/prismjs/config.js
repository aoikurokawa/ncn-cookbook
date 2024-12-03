import "/mnt/nvme0n1/dev/ncn-cookbook/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "/mnt/nvme0n1/dev/ncn-cookbook/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "/mnt/nvme0n1/dev/ncn-cookbook/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "/mnt/nvme0n1/dev/ncn-cookbook/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "/mnt/nvme0n1/dev/ncn-cookbook/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "/mnt/nvme0n1/dev/ncn-cookbook/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
