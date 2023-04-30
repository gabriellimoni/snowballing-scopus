module.exports = {
  parseCsv: (data) => {
    let csv = Object.keys(data[0])
      .map((key) => `"${key}"`)
      .join(";");
    csv += "\n";

    data
      .map((obj) => Object.values(obj).map((d) => `"${d}"`))
      .forEach((d) => {
        csv += d;
        csv += "\n";
      });
    return csv;
  },
};
