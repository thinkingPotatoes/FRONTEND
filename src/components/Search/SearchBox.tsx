import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useDebounce from '../../hooks/useDebounce';
import { ReactComponent as LeftPrevSvg } from '../../assets/icon/angle-left-btn.svg';
import AutoSearchList from './AutoSearchList';
import SearchInputBar from './SearchInputBar';
import { MAX_RECENT_SEARCH, localStorageKey } from './RecentSearch';
import useLocalStorage from '../../hooks/useLocalStorage';

// API로 받아오는 MovieData (현재 랜덤 API 이용)
export interface MovieData {
  city: string;
  growth_from_2000_to_2013: string;
  latitude: number;
  longitude: number;
  population: string;
  rank: string;
  state: string;
}

interface Movie {
  includes(data: string): boolean;
  city: string;
}

interface SearchBoxProps {
  onSearch: (keyword: string, booleanCheck: boolean) => void;
  onChange: (keyword: boolean) => void;
}

function SearchBox({ onChange, onSearch }: SearchBoxProps) {
  const [keyword, setKeyword] = useState<string>('');
  const [searchResults, setSearchResults] = useState<MovieData[]>([]);
  const [isSearch, setIsSearch] = useState(false);
  const [recentSearch, setRecentSearch] = useLocalStorage({
    key: localStorageKey,
    initialValue: [],
  });

  const debouncedData = useDebounce(keyword);

  useEffect(() => {
    if (debouncedData) {
      updateData();
    }
  }, [debouncedData]);

  function onChangeData(e: React.FormEvent<HTMLInputElement>) {
    setKeyword(e.currentTarget.value);
    setIsSearch(false);
    if (e.currentTarget.value.length === 0) {
      onChange(true);
      onSearch('', false);
    } else {
      onChange(false);
    }
  }

  async function fetchData() {
    const res = await fetch(
      'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
    );
    const data = await res.json();
    return data.slice(0, 100);
  }

  async function updateData() {
    const res = await fetchData();
    const b = res.filter((list: Movie) => list.city.includes(keyword)).slice(0, 8);
    setSearchResults(b);
  }

  function removeKeyword() {
    setKeyword('');
    onChange(true);
    onSearch('', false);
    setIsSearch(false);
  }

  function onSearchClick() {
    setKeyword(keyword);
    onSearch(keyword, true);
    onChange(false);
    if (keyword.trim() !== '') {
      const updatedRecentSearches = recentSearch ? [...recentSearch] : [];
      if (!updatedRecentSearches.includes(keyword)) {
        updatedRecentSearches.unshift(keyword);
        if (updatedRecentSearches.length > MAX_RECENT_SEARCH) {
          updatedRecentSearches.pop();
        }
        setRecentSearch(updatedRecentSearches);
        localStorage.setItem(localStorageKey, JSON.stringify(updatedRecentSearches));
      }
    }
  }

  return (
    <>
      <SearchContainer>
        <LeftButtonBox onClick={removeKeyword}>
          <LeftPrevSvg />
        </LeftButtonBox>
        <SearchInputBar
          keyword={keyword}
          onChange={onChangeData}
          onClear={removeKeyword}
          onSearch={onSearchClick}
          isSearch={isSearch}
        />
      </SearchContainer>

      {searchResults.length > 0 && keyword && !isSearch && (
        <AutoSearchList
          searchResults={searchResults}
          onClick={(city) => {
            setKeyword(city);
            onSearch(city, true);
            setIsSearch(true);
          }}
        />
      )}

      {searchResults.length === 0 && keyword && (
        <NoSearchResult>검색된 결과가 없습니다.</NoSearchResult>
      )}
    </>
  );
}

const SearchContainer = styled.div`
  display: flex;
  width: calc(100%);
  padding: 6px 16px 0 0;
  font-family: Pretendard;
  align-items: center;
`;

const LeftButtonBox = styled.div`
  display: flex;
  width: 40px;
  height: 44px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
  margin-right: 12px;
`;

const NoSearchResult = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-default);
  text-align: center;
  padding: 16px 0px;

  /* Subtitle1 */
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.048px;
`;

export default SearchBox;
