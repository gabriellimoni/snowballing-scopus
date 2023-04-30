const fs = require("fs");
const { fetchCitationsFromArticle } = require("./fetch");
const { mapResult } = require("./map");
const articleName =
  "DeepTest: Automated Testing of Deep-Neural-Network-driven Autonomous Cars";

async function run() {
  const data = await fetchCitationsFromArticle(articleName);

  const mappedData = mapResult(data);

  fs.writeFileSync("out.json", JSON.stringify(mappedData, null, "  "));
}

run();
