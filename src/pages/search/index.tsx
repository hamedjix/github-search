import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { useQuery } from "@tanstack/react-query";
import Header from "components/Header";
import RepoCard from "components/RepoCard";
import { useSearchParams } from "context/filtersContext";
import { getRepos } from "services";

type Props = {};

const Search = (props: Props) => {
  const { filters } = useSearchParams();

  const { data: repos, isLoading } = useQuery(
    ["Repos", filters],
    ({ queryKey }) => {
      console.log(queryKey);
      return getRepos(queryKey[1] as ISearchFilters);
    }
  );
  return (
    <Box>
      <Header />

      {!isLoading && Array.isArray(repos) ? (
        <Grid
          p={4}
          templateColumns="repeat(3, 1fr)"
          gap={6}
          position="relative"
        >
          {repos.map((repo) => (
            <GridItem key={repo.id} w="100%">
              <RepoCard repo={repo} />
            </GridItem>
          ))}
        </Grid>
      ) : (
        <Text>Loading....</Text>
      )}
    </Box>
  );
};

export default Search;
