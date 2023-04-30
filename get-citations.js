const fs = require("fs");
const { fetchCitationsFromArticle } = require("./fetch");
const { mapResult } = require("./map");
const { parseCsv } = require("./parse");

const articleName =
  "DeepTest: Automated Testing of Deep-Neural-Network-driven Autonomous Cars";

async function run() {
  const data = await fetchCitationsFromArticle(articleName);
  const mappedData = mapResult(data);

  if (mappedData.length == 0) return;

  const csv = parseCsv(mappedData);
  fs.writeFileSync("out.csv", csv);
}

run();
