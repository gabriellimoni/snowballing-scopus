const fs = require("fs");
const { fetchCitationsFromArticle } = require("./fetch");
const { mapResult } = require("./map");
const { parseCsv } = require("./parse");

module.exports = {
  writeCsvCitations: async (articleName) => {
    const data = await fetchCitationsFromArticle(articleName);
    const mappedData = mapResult(data);

    if (mappedData.length == 0) return;

    const csv = parseCsv(articleName, mappedData);
    fs.writeFileSync("out.csv", csv);
  },
};
