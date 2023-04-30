module.exports = {
  // TODO use lib to avoid common errors such as parsing ""
  parseCsv: (originArticle, data, withHeader = true) => {
    let csv = "";
    if (withHeader) {
      csv = '"originArticle";';
      csv += Object.keys(data[0])
        .map((key) => `"${key}"`)
        .join(";");
      csv += "\n";
    }

    data
      .map((obj) => Object.values(obj).map((d) => `"${d}"`))
      .forEach((d) => {
        csv += `"${originArticle}";`;
        csv += d;
        csv += "\n";
      });
    return csv;
  },
};
