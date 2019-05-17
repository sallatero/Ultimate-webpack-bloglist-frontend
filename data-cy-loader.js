const dataCyLoader = (source) => {
  const dataAttribute = 'data-cy=\"([^"]*)\"'

  if (source.match(dataAttribute)) {
    source = source.replace(new RegExp(dataAttribute, 'g'), '')
  }
  return source
}

module.exports = dataCyLoader