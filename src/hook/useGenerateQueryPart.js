function useGenerateQueryPart(filter, filterSlugToQueryParts) {
  let filterPart = '';

  for (const filterSlug in filter) {
    if (filter[filterSlug]) {
      let concatString = filterPart === '' ? '' : '&';
      filterPart =  filterPart.concat(concatString, filterSlugToQueryParts[filterSlug]);
    }
  }

  return filterPart;
}

export default useGenerateQueryPart;