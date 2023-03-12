const fs = require("fs");
const path = require("path");
const { Template, Clause } = require("@accordproject/cicero-core");
const { Engine } = require("@accordproject/cicero-engine");

async function initTemplate() {

    const data = {
        $class: "org.combinedao.IntentContract.SignLetter",
        member: "Mr. Bean"
    };

    const template = await Template.fromDirectory("./");
    
    // const testInput = fs.readFileSync(
    // path.resolve(__dirname, "text/", "grammar.tem.md"),
    // "utf8"
    // );

    const clause = new Clause(template);

    clause.setData({
        $class: "org.combinedao.IntentContract.IntentContract",
        member: "Mr. Bean"
    });
    
}

initTemplate();