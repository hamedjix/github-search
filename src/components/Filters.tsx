import { Flex, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { useSearchParams } from "context/filtersContext";
import languages from "utils/languages.json";
import Pagination from "./Pagination";

type Props = {};

const Filters = (props: Props) => {
  const { updateFilters } = useSearchParams();
  const onLanguageChange = (
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

  return (
    <Flex p={4} justify="space-between">
      <Flex justify="space-between" gap={10}>
        <FormControl display="flex" alignItems="center">
          <FormLabel>Language:</FormLabel>
          <Select
            minW={170}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              onLanguageChange(e.target.value, "language")
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
          <FormLabel wordBreak="keep-all">Sort:</FormLabel>
          <Select
            minW={170}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              onLanguageChange(e.target.value, "sort")
            }
          >
            <option value="stars">Stars</option>
            <option value="forks" defaultChecked>
              Forks
            </option>
          </Select>
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel>Order:</FormLabel>
          <Select
            defaultValue="desc"
            minW={170}
            h={50}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              onLanguageChange(e.target.value, "order")
            }
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        </FormControl>
      </Flex>
      <Pagination />
    </Flex>
  );
};

export default Filters;
