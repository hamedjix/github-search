import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface IFilterContext {
  filters: ISearchFilters;
  updateFilters: (p: ISearchFilters) => void;
}
const initialState: ISearchFilters = {
  language: "",
  order: "desc",
  sort: "stars",
  page: 1,
};
export const FilterContext = createContext<IFilterContext>({
  filters: initialState,
  updateFilters: () => {},
});

const SearchFilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<ISearchFilters>(initialState);
  useEffect(() => {
    console.log(filters);
  }, [filters]);
  const updateFilters = (p: ISearchFilters) => {
    setFilters((prev) => ({ ...prev, ...p }));
  };
  return (
    <FilterContext.Provider value={{ filters, updateFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useSearchParams = () => {
  return useContext(FilterContext);
};
FilterContext.displayName = "Filters Context";

export default SearchFilterProvider;
