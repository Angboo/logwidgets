import '@logseq/libs'
import {LSPluginBaseInfo} from "@logseq/libs/dist/LSPlugin";
import importGtdMatrix from "./matrix";

function main(baseInfo: LSPluginBaseInfo) {
    console.info(`#${baseInfo.id}: MAIN`);
    importGtdMatrix();

}

// bootstrap
logseq.ready(main).catch(console.error)
