import matrixStyle from 'bundle-text:./matrix.css'
import {IBatchBlock} from "@logseq/libs/dist/LSPlugin";


const importGtdMatrix = () => {
    logseq.provideStyle(matrixStyle)
    logseq.Editor.registerSlashCommand("GTD Matrix", insertGtdMatrixTemplate)
    logseq.Editor.registerSlashCommand("GTD Task Query", insertTaskQuery)
};

const insertGtdMatrixTemplate = async () => {
    const targetBlock = await logseq.Editor.getCurrentBlock()
    if (targetBlock != null) {
        await logseq.Editor.insertBatchBlock(targetBlock.uuid, gtdMatrixTemplate, {})
    }
}

const insertTaskQuery = async () => {
    const targetBlock = await logseq.Editor.getCurrentBlock()
    if (targetBlock != null) {
        await logseq.Editor.insertBlock(targetBlock.uuid, gtdTaskQueryTemplate, {before: true})
    }
}

const gtdMatrixTemplate: IBatchBlock = {
    content: "## #.v-gtd-matrix",
    children: [
        {"content": "### [[TODO]]", children: [{content: "#### example"}]},
        {"content": "### [[DECIDE]]", children: [{content: "#### example"}]},
        {"content": "### [[DELEGATE]]", children: [{content: "#### example"}]},
        {"content": "### [[ELIMINATE]]", children: [{content: "#### example"}]}
    ]
};

const gtdTaskQueryTemplate: string = `#+BEGIN_QUERY
 {:title [:b "Query"]
 :query [:find (pull ?b [*])
 :where
 [task ?b #{"LATER","TODO","DOING","NOW","DONE"}]
 [priority ?b #{"A","B","C"}]
]
 :table-view? false
 }
 #+END_QUERY`


export default importGtdMatrix

