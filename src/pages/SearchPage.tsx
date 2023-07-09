import { useState } from 'react';
import RecentSearch from '../components/Search/RecentSearch.tsx';
import SearchBox from '../components/Search/SearchBox.tsx';
import HotSearch from '../components/Search/HotSearch.tsx';

function SearchPage() {
  const [keyword, setKeyword] = useState('');
  const [showDefaultSearch, setDefaultSearch] = useState(true);

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
    </>
  );
}
export default SearchPage;
