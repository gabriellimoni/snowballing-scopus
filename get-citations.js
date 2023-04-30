const fs = require("fs");
const { fetchCitationsFromArticle } = require("./fetch");
const articleName =
  "DeepTest: Automated Testing of Deep-Neural-Network-driven Autonomous Cars";

async function run() {
  const data = await fetchCitationsFromArticle(articleName);

  fs.writeFileSync(
    "out.json",
    JSON.stringify(data["search-results"]["entry"], null, "  ")
  );
}

run();
