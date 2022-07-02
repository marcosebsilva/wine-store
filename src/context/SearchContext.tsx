import React, { useCallback, createContext, useContext, useMemo, useState } from 'react';

export type UpdateSearchFunction = (newValues: Partial<SearchOptions>) => void;

export type SearchOptions  = {
  query: string,
  minPrice: number | null,
  maxPrice: number | null,
}

interface SearchContextValue extends SearchOptions {
  updateSearch: UpdateSearchFunction;
}

const initialContext: SearchContextValue = {
  query: '',
  maxPrice: null,
  minPrice: null,
  updateSearch: () => {},
};

const SearchContext = createContext<SearchContextValue>(initialContext);

export function SearchProvider({ children }: React.PropsWithChildren) {
  const [searchOptions, updateSearchOptions] = useState<SearchOptions>(initialContext);

  const updateSearch = useCallback((newValues: Partial<SearchOptions>) => {
    updateSearchOptions((prev) => ({
      ...prev,
      ...newValues
    }))
  }, []);

  const value = useMemo(
    () => ({ ...searchOptions, updateSearch }),
    [searchOptions, updateSearch],
  );

  return (
    <SearchContext.Provider value={value}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  return useContext(SearchContext);
}
