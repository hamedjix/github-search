import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "context/filtersContext";
import { paramGenerator } from "utils";
import Axios from "./axios";

export const getRepos = async (filters: ISearchFilters) => {
  const params = paramGenerator(filters);
  const result: IGithubResponse = await Axios.get("/search/repositories", {
    params,
  });
  return result.items;
};

export const useGithubRepos = () => {
  const { filters } = useSearchParams();
  return useQuery(["Repos", filters], ({ queryKey }) => {
    return getRepos(queryKey[1] as ISearchFilters);
  });
};
