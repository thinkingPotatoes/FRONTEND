import { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../api/apiController';
import Head1 from '../components/common/texts/Head1';
import RecentSearch from '../components/selectMovie/RecentSearch';
import SearchBar from '../components/selectMovie/SearchBar';
import SearchResult from '../components/selectMovie/SearchResult';
import TopBar from '../components/selectMovie/TopBar';
import useDebounce from '../hooks/useDebounce';
import useLocalStorage from '../hooks/useLocalStorage';
import { MovieResponseList } from '../types/search';

const localStorageKey = 'recentSearchList';

function SelectMovie() {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<MovieResponseList[]>([]);
  const [recentSearch, setRecentSearch] = useLocalStorage({
    key: localStorageKey,
    initialValue: [],
  });
  const debouncedKeyword = useDebounce(keyword);

  const saveRecentSearch = (title: string) => {
    const newRecentSearch = JSON.parse(localStorage.getItem(localStorageKey) || '');
    const exist = newRecentSearch.indexOf(title);
    if (exist !== -1) {
      newRecentSearch.splice(exist, 1);
    }
    setRecentSearch([title, ...newRecentSearch]);
  };

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(recentSearch));
  }, [recentSearch]);

  useEffect(() => {
    if (debouncedKeyword.length === 0) return;
    axios
      .post(`/movies/search?page=0&size=20&sort=repRlsDate,desc`, {
        keyword: debouncedKeyword,
      })
      .then((data) => {
        setSearchResults(data.data.data.searchMovieResponseList);
      });
  }, [debouncedKeyword]);

  return (
    <SelectMovieWrapper>
      <TopBar />
      <Main>
        <Head1>리뷰를 쓸 영화를 선택해주세요</Head1>
        <Gap />
        <SearchBar
          placeholder="영화 이름, 감독 이름 등"
          keyword={keyword}
          setKeyword={setKeyword}
        />
        {keyword ? (
          <SearchResult searchResults={searchResults} saveRecentSearch={saveRecentSearch} />
        ) : (
          <RecentSearch setKeyword={setKeyword} />
        )}
      </Main>
    </SelectMovieWrapper>
  );
}

const SelectMovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: var(--dark-grey-800);

  input::placeholder,
  textarea::placeholder {
    color: var(--dark-grey-500);
  }
`;

const Main = styled.div`
  padding-top: 24px;
`;

const Gap = styled.div`
  height: 17px;
`;

export default SelectMovie;
