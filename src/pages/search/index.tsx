import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Filters from "components/Filters";
import Loader from "components/Loader/Loader";
import RepoCard from "components/RepoCard";
import { useSearchParams } from "context/filtersContext";
import { getRepos } from "services";

type Props = {};

const Search = (props: Props) => {
  const { filters } = useSearchParams();

  const { data: repos, isLoading } = useQuery(
    ["Repos", filters],
    ({ queryKey }) => {
      return getRepos(queryKey[1] as ISearchFilters);
    }
  );
  return (
    <Box flex="1">
      <Filters />

      <Box position="relative">
        {!isLoading && Array.isArray(repos) ? (
          <Grid p={4} templateColumns="repeat(3, minmax(200px, 1fr) )" gap={6}>
            {repos.map((repo) => (
              <GridItem key={repo.id} w="100%">
                <RepoCard repo={repo} />
              </GridItem>
            ))}
          </Grid>
        ) : (
          <Center position="absolute" w="full" top={52}>
            <Loader />
          </Center>
        )}
      </Box>
    </Box>
  );
};

export default Search;
