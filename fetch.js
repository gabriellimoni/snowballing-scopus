const apiKey = "";
const baseUrl = "https://api.elsevier.com/content/search/scopus";

const makeUrl = (article) =>
  `${baseUrl}?query=REF("${article}")&view=complete&sort=-citedby-count`;

module.exports = {
  fetchCitationsFromArticle: async (article) => {
    const data = await fetch(makeUrl(article), {
      headers: {
        "X-ELS-APIKey": apiKey,
      },
    }).then((result) => result.json());

    // TODO pagination

    return data["search-results"]["entry"];
  },
};
