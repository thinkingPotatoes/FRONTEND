import { useState } from 'react';
import { RecentSearch } from '../components/Search/RecentSearch.tsx';
import SearchBox from '../components/Search/SearchBox.tsx';
import HotSearch from '../components/Search/HotSearch.tsx';
import ResultSearch from '../components/Search/ResultSearch.tsx';
import RecommendSearch from '../components/Search/RecommendSearch.tsx';
import { styled } from 'styled-components';

function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [showDefaultSearch, setDefaultSearch] = useState(true);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (searchWord: string, booleanCheck: boolean) => {
    setKeyword(searchWord);
    setShowResult(booleanCheck);
  };

  const handleChange = (booleanCheck: boolean) => {
    setDefaultSearch(booleanCheck);
  };
  return (
    <SearchFrame>
      <SearchBox onSearch={handleSearch} onChange={handleChange}></SearchBox>
      {showDefaultSearch && (
        <>
          <RecentSearch />
          <HotSearch />
        </>
      )}
      {showResult && (
        <>
          <RecommendSearch />
          <ResultSearch />
        </>
      )}
    </SearchFrame>
  );
}
export default SearchPage;

const SearchFrame = styled.div`
  margin: 0 -20px;
`;
