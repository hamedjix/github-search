import moment from "moment";
export const paramGenerator: (filters: ISearchFilters) => IRequestParams = (
  filters
) => {
  const transformedFilters: IRequestParams = {
    q: "",
    order: "desc",
    sort: "stars",
  };

  // const startMoment = moment(filters.dateRange.start);
  // const endMoment = moment(filters.dateRange.end);
  // const reposDate = `created:${startMoment.format()}..${endMoment.format()}`;
  const reposLanguage = filters.language
    ? `language:${filters.language} `
    : "language:javascript";

  transformedFilters.q = reposLanguage;
  transformedFilters.sort = "stars";
  transformedFilters.order = "desc";

  return transformedFilters;
};
