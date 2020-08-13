const extractCountriesNames = (data: Array<{ cioc: string, name: string }>) =>
  data.map(({ cioc, name }) => ({ value: cioc, label: name }));

export {
  extractCountriesNames
}
