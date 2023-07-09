import { useState } from 'react';
import RecentSearch from '../components/Search/RecentSearch.tsx';
import SearchBox from '../components/Search/SearchBox.tsx';
import HotSearch from '../components/Search/HotSearch.tsx';
import ResultSearch from '../components/Search/ResultSearch.tsx';
import RecommendSearch from '../components/Search/RecommendSearch.tsx';

function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [showDefaultSearch, setDefaultSearch] = useState(true);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (searchWord: string) => {
    setKeyword(searchWord);
  };

  const handleChange = (booleanCheck: boolean) => {
    setDefaultSearch(booleanCheck);
  };
  return (
    <>
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
    </>
  );
}
export default SearchPage;
