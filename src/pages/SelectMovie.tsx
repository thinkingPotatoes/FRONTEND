import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Head1 from '../components/common/texts/Head1';
import RecentSearch from '../components/selectMovie/RecentSearch';
import SearchResult from '../components/selectMovie/SearchResult';
import TopBar from '../components/selectMovie/TopBar';
import useDebounce from '../hooks/useDebounce';
import { MovieResponseList } from '../types/search';
import SearchBar from './SearchBar';

function SelectMovie() {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState<MovieResponseList[]>([
    // {
    //   docId: '',
    //   genre: '액션,드라마,SF',
    //   nation: '미국',
    //   poster:
    //     'https://upload.wikimedia.org/wikipedia/ko/1/1f/%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
    //   prodYear: '2010',
    //   title: '아이언 맨 2',
    // },
  ]);

  const debouncedKeyword = useDebounce(keyword);

  useEffect(() => {
    // axios instance 머지 되면 수정 필요
    axios
      .post(`http://localhost:8080/movies/search?page=0&size=10&sort=repRlsDate,desc`, {
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
        {keyword ? <SearchResult searchResults={searchResults} /> : <RecentSearch />}
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
