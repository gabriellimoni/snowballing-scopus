const { fetchCitationsFromArticle } = require("./fetch");
const { mapResult } = require("./map");
const { parseCsv } = require("./parse");

module.exports = {
  getCitationsCsv: async (articleName, withHeader = true) => {
    const data = await fetchCitationsFromArticle(articleName);
    const mappedData = mapResult(data);

    if (mappedData.length == 0) return;

    const csv = parseCsv(articleName, mappedData, withHeader);
    return csv;
  },
};
