import { paramGenerator } from "utils";
import Axios from "./axios";

export const getRepos = async (filters: ISearchFilters) => {
  const params = paramGenerator(filters);
  const result: IGithubResponse = await Axios.get("/search/repositories", {
    params,
  });
  return result.items;
};
