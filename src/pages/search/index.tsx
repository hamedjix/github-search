import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import Filters from "components/Filters";
import Loader from "components/Loader/Loader";
import RepoCard from "components/RepoCard";
import { useGithubRepos } from "services";

type Props = {};

const Search = (props: Props) => {
  const { data: repos, isLoading } = useGithubRepos();
  return (
    <Box flex="1">
      <Filters />
      <Box position="relative">
        {!isLoading && Array.isArray(repos) ? (
          <Grid
            p={4}
            templateColumns={{
              base: "repeat(1, minmax(200px, 1fr))",
              md: "repeat(1, minmax(200px, 1fr))",
              lg: "repeat(3, minmax(200px, 1fr))",
            }}
            gap={6}
          >
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
