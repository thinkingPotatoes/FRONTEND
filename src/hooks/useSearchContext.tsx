import React, { createContext, useContext, useState, useEffect } from 'react';

interface SearchContextType {
  recentSearch: string[];
  setRecentSearch: (searches: string[]) => void;
}

export const localStorageKey = 'recentSearchList';
export const MAX_RECENT_SEARCH = 10;
const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [recentSearch, setRecentSearch] = useState<string[]>(
    JSON.parse(localStorage.getItem(localStorageKey)!),
  );

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(recentSearch));
  }, [recentSearch]);

  return (
    <SearchContext.Provider value={{ recentSearch, setRecentSearch }}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useContext not provided');
  }
  return context;
}

export function updateRecentSearch(recentSearch: string[], keyword: string) {
  if (!recentSearch) {
    return [];
  }

  const updatedRecentSearches = [...recentSearch];

  const movieIndex = updatedRecentSearches.indexOf(keyword);
  if (movieIndex !== -1) {
    updatedRecentSearches.splice(movieIndex, 1);
  }

  updatedRecentSearches.unshift(keyword);

  if (updatedRecentSearches.length > MAX_RECENT_SEARCH) {
    updatedRecentSearches.pop();
  }

  return updatedRecentSearches;
}
