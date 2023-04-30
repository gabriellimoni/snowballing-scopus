const { writeCsvCitations } = require("./get-citations");

const articleName =
  "Using Ontologies for Test Suites Generation for Automated and Autonomous Driving Functions";

(async function run() {
  writeCsvCitations(articleName);
})();
