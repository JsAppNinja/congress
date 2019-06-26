interface SanitizedSearchParams {
  [param: string]: string;
}

export default (param: string): string => {
  const search = window.location.search.slice(1);
  const searchParams: SanitizedSearchParams = search
    .split('&')
    .reduce(
      (
        sanitizedSearchParams: SanitizedSearchParams,
        searchParam: string
      ): SanitizedSearchParams => {
        const searchParamInArray = searchParam.split('=');
        sanitizedSearchParams[searchParamInArray[0]] = searchParamInArray[1];

        return sanitizedSearchParams;
      },
      {}
    );

  const searchParam = searchParams[param];

  if (!!searchParam) {
    return searchParam;
  } else {
    return '';
  }
};
