import { createContext, ReactNode, useContext, useState } from "react";

interface IFilterContext {
  filters: ISearchFilters;
  updateFilters: (p: ISearchFilters) => void;
}
export const FilterContext = createContext<IFilterContext>({
  filters: {},
  updateFilters: () => {},
});

export const SearchFilterProvider = ({ children }: { children: ReactNode }) => {
  const [filters, setFilters] = useState<ISearchFilters>({});
  const updateFilters = (p: ISearchFilters) => {
    setFilters(p);
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
