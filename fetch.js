const apiKey = "";
const baseUrl = "https://api.elsevier.com/content/search/scopus";

const makeUrl = (article) =>
  `${baseUrl}?query=REF("${article}")&view=complete&sort=-citedby-count`;

module.exports = {
  fetchCitationsFromArticle: async (article) => {
    const result = [];

    let url = makeUrl(article);
    let hasNext;
    do {
      const data = await fetch(url, {
        headers: {
          "X-ELS-APIKey": apiKey,
        },
      }).then((res) => res.json());
      result.push(...data["search-results"]["entry"]);

      hasNext = data["search-results"]["link"].find((l) => l["@ref"] == "next");
      if (hasNext) url = hasNext["@href"];
    } while (hasNext);

    return result;
  },
};
