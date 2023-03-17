import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Select,
  useColorModeValue,
} from "@chakra-ui/react";
import { useSearchParams } from "context/filtersContext";
import languages from "utils/languages.json";
import Pagination from "./Pagination";

type Props = {};

const Filters = (props: Props) => {
  const { updateFilters } = useSearchParams();
  const onFilterChange = (
    value: string,
    type: "language" | "order" | "sort"
  ) => {
    switch (type) {
      case "language":
        updateFilters({ language: value });
        break;
      case "sort":
        updateFilters({ sort: value });
        break;
      case "order":
        updateFilters({ order: value });
        break;

      default:
        updateFilters({ language: "javascript", sort: "stars", order: "desc" });
        break;
    }
  };
  const bg = useColorModeValue("#EEF1FF", "#1A202C");

  return (
    <Flex
      className="sticky"
      p={4}
      justify="space-between"
      overflowX="auto"
      bg={bg}
    >
      <HStack spacing={5}>
        <FormControl display="flex" alignItems="center">
          <FormLabel fontSize={16} my={0}>
            Language:
          </FormLabel>
          <Select
            size="sm"
            w={170}
            minW={120}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              onFilterChange(e.target.value, "language")
            }
          >
            {languages.map((lang) => (
              <option key={lang.title} value={lang.value}>
                {lang.title}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel fontSize={16} my={0}>
            Sort:
          </FormLabel>
          <Select
            size="sm"
            w={170}
            minW={120}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              onFilterChange(e.target.value, "sort")
            }
          >
            <option value="stars">Stars</option>
            <option value="forks" defaultChecked>
              Forks
            </option>
          </Select>
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel fontSize={16} my={0}>
            Order:
          </FormLabel>
          <Select
            defaultValue="desc"
            size="sm"
            w={170}
            minW={120}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              onFilterChange(e.target.value, "order")
            }
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        </FormControl>
      </HStack>
      <Pagination />
    </Flex>
  );
};

export default Filters;
