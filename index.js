const fs = require("fs");
const { getCitationsCsv } = require("./get-citations");

const articleNames = [
  "Using Ontologies for Test Suites Generation for Automated and Autonomous Driving Functions",
  "Towards Improved Testing For Deep Learning",
];

(async function run() {
  let withHeader = true;
  let csv = "";
  for (const articleName of articleNames) {
    csv += await getCitationsCsv(articleName, withHeader);
    withHeader = false;
  }

  fs.writeFileSync("out.csv", csv);
})();
