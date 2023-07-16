import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useDebounce from '../../hooks/useDebounce';
import { ReactComponent as LeftPrevSvg } from '../../assets/icon/angle-left-btn.svg';
import { ReactComponent as InputCancelSvg } from '../../assets/icon/input-cancel.svg';
import { ReactComponent as SearchSvg } from '../../assets/icon/search.svg';

// API로 받아오는 MovieData (현재 랜덤 API 이용)
interface MovieData {
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

  function onChangeData(e: React.FormEvent<HTMLInputElement>) {
    setKeyword(e.currentTarget.value);
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
    const b = res
      .filter((list: Movie) => list.city.includes(keyword))
      .slice(0, 8);
    setSearchResults(b);
  }

  const debouncedData = useDebounce(keyword);
  useEffect(() => {
    if (debouncedData) {
      updateData();
    }
  });

  function removeKeyword() {
    setKeyword('');
    onChange(true);
    onSearch('', false);
  }

  return (
    <>
      <SearchContainer>
        <LeftButtonBox>
          <LeftPrevSvg />
        </LeftButtonBox>
        <SearchBar>
          <Search
            value={keyword}
            onChange={onChangeData}
            placeholder="검색어를 입력해주세요."
          />
          {keyword && (
            <ExitBox onClick={removeKeyword}>
              <InputCancelSvg />
            </ExitBox>
          )}
        </SearchBar>

        <RightButtonBox
          onClick={() => {
            // 클릭하면 그 단어로 검색
            setKeyword(keyword);
            onSearch(keyword, true);
            onChange(false);
          }}
        >
          <SearchSvg />
        </RightButtonBox>
      </SearchContainer>

      {searchResults.length > 0 && keyword && (
        <AutoSearchContainer>
          <AutoSearchWrap>
            {searchResults.map((search, idx) => (
              <AutoSearchData
                key={search.city}
                onClick={() => {
                  // 클릭하면 그 단어로 검색
                  setKeyword('');
                  onSearch(search.city, true);
                }}
              >
                <a href="#">{search.city}</a>
              </AutoSearchData>
            ))}
          </AutoSearchWrap>
        </AutoSearchContainer>
      )}
    </>
  );
}

export default SearchBox;

const SearchContainer = styled.div`
  display: flex;
  width: 375px;
  height: 44px;
  margin: 6px 0px;
  align-items: stretch;
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

const RightButtonBox = styled.div`
  display: flex;
  width: 40px;
  height: 44px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 0px 16px 0px 4px;
  justify-content: center;
`;

const Search = styled.input`
  display: flex;
  padding: 12px 16px;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  border-radius: 8px;
  background-color: #1c1c25;
  border: none;
  color: #c3c3c6;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.014px;
    color: #7e7e87;
  }
  &:focus {
    outline: none;
  }
`;

const AutoSearchContainer = styled.div`
  z-index: 3;
`;

const AutoSearchWrap = styled.ul`
  list-style: none;
  padding: 0 20px;
  margin: 0;
`;

const AutoSearchData = styled.li`
  height: 52px;
  width: 100%;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  letter-spacing: -0.016px;
  z-index: 4;
  &:hover {
    cursor: pointer;
  }

  a {
    color: #c3c3c6;
    line-height: 52px;
  }
`;

const ExitBox = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  transform: translate(-10px, 13px);
`;

const SearchBar = styled.div`
  display: flex;
  width: 263px;
  flex-direction: row-reverse;
`;
