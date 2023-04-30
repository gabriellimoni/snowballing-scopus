module.exports = {
  mapResult: (data) => {
    return data.map((d) => {
      const scopusUrl = d.link.find((l) => l["@ref"] == "scopus")["@href"];
      const authorNames = d.author.map((a) => a.authname).join(";");

      return {
        scopusUrl,
        authorNames,
        title: d["dc:title"],
        doi: d["prism:doi"],
        abstract: d["dc:description"],
        pubDate: d["prism:coverDate"],
        citationCount: d["citedby-count"],
      };
    });
  },
};
