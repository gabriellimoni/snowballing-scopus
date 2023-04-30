module.exports = {
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
      .map((obj) =>
        Object.values(obj).map((d) => (d ? `"${d.replace(/"/g, '""')}"` : ""))
      )
      .forEach((d) => {
        csv += `"${originArticle.replace(/"/g, '""')}";`;
        csv += d;
        csv += "\n";
      });
    return csv;
  },
};
