export const paramGenerator: (filters: ISearchFilters) => IRequestParams = (
  filters
) => {
  const transformedFilters: IRequestParams = {
    q: "",
    order: "desc",
    sort: "stars",
    page: 1,
    per_page: 30,
  };
  const reposLanguage = filters.language
    ? `language:${filters.language}`
    : `language: all`;

  transformedFilters.q = reposLanguage;
  transformedFilters.sort = filters.sort || "stars";
  transformedFilters.order = filters.order || "desc";

  return transformedFilters;
};

// Authorize
export const LocalStoragChecker = () => {
  return localStorage.getItem("sgr-logged") === "loggedIn" ? true : false;
};
export const localStorageManage = (flag: boolean) => {
  if (flag) {
    localStorage.setItem("sgr-logged", "loggedIn");
    return;
  }
  localStorage.setItem("sgr-logged", "loggedOut");
};
