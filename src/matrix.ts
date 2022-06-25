import matrixStyle from 'bundle-text:./matrix.css'
import {IBatchBlock} from "@logseq/libs/dist/LSPlugin";


const importGtdMatrix = () => {
    logseq.provideStyle(matrixStyle)
    logseq.Editor.registerSlashCommand("GTD Matrix", insertGtdMatrixTemplate)
};

const insertGtdMatrixTemplate = async () => {
    const targetBlock = await logseq.Editor.getCurrentBlock()
    if (targetBlock != null) {
        await logseq.Editor.insertBatchBlock(targetBlock.uuid, gtdMatrixTemplate, {})
    }
}

const gtdMatrixTemplate: IBatchBlock = {
    content: "## #.v-gtd-matrix\ntemplate:: v-eisenhower",
    children: [
        {"content": "### [[TODO]]", children: [{content: "#### example"}]},
        {"content": "### [[DECIDE]]", children: [{content: "#### example"}]},
        {"content": "### [[DELEGATE]]", children: [{content: "#### example"}]},
        {"content": "### [[ELIMINATE]]", children: [{content: "#### example"}]}
    ]
};

export default importGtdMatrix

