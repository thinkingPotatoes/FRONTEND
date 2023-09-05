import { useState } from 'react';
import { styled } from 'styled-components';
import RecentSearch from '../components/Search/RecentSearch.tsx';
import SearchBox from '../components/Search/SearchBox.tsx';
import ResultSearch from '../components/Search/ResultSearch.tsx';

import { QueryClient, QueryClientProvider } from 'react-query';
import { MovieResponseList } from '../components/types/search.ts';

const queryClient = new QueryClient();

function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [showDefaultSearch, setDefaultSearch] = useState(true);
  const [showResult, setShowResult] = useState(false);
  const [searchResults, setSearchResults] = useState<MovieResponseList[]>([]);

  const handleSearch = (searchWord: string, booleanCheck: boolean) => {
    setKeyword(searchWord);
    setShowResult(booleanCheck);
  };

  const handleChange = (booleanCheck: boolean) => {
    setDefaultSearch(booleanCheck);
  };
  return (
    <QueryClientProvider client={queryClient}>
      <SearchFrame>
        <SearchBox
          onSearch={handleSearch}
          onChange={handleChange}
          setResults={setSearchResults}
          keyNow={keyword}
        />
        {showDefaultSearch && (
          <>
            <RecentSearch
              onSearch={handleSearch}
              onChange={handleChange}
              setResults={setSearchResults}
              keyNow={keyword}
            />
          </>
        )}
        {showResult && (
          <>
            <ResultSearch results={searchResults} />
          </>
        )}
      </SearchFrame>
    </QueryClientProvider>
  );
}

const SearchFrame = styled.div`
  margin: 0 -20px;
`;

export default SearchPage;
