import { Button, HStack } from "@chakra-ui/react";
import { useSearchParams } from "context/filtersContext";

type Props = {};

const Pagination = (props: Props) => {
  const { filters, updateFilters } = useSearchParams();
  const nextPage = () => {
    updateFilters({ page: (filters.page as number) + 1 });
  };
  const prevPage = () => {
    if ((filters.page as number) > 1) {
      updateFilters({ page: (filters.page as number) - 1 });
    }
  };
  return (
    <HStack spacing={2}>
      <Button
        colorScheme="linkedin"
        disabled={(filters.page as number) < 2}
        onClick={prevPage}
      >
        Prev
      </Button>
      <Button>Page: {filters.page}</Button>
      <Button colorScheme="linkedin" onClick={nextPage}>
        Next
      </Button>
    </HStack>
  );
};

export default Pagination;
