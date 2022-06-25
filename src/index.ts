import '@logseq/libs'
import {LSPluginBaseInfo} from "@logseq/libs/dist/LSPlugin";


function main (baseInfo: LSPluginBaseInfo) {
    console.info(`#${baseInfo.id}: MAIN`);

}

// bootstrap
logseq.ready(main).catch(console.error)
