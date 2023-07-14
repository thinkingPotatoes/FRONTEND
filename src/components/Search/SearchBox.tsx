import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useDebounce from '../../hooks/useDebounce.tsx';
// import { ReactComponent as Cancel } from '../assets/img/material-symbols_cancel.svg';

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

const SearchBox: React.FC<SearchBoxProps> = ({ onChange, onSearch }) => {
  const [keyword, setKeyword] = useState<string>('');
  const [searchResults, setSearchResults] = useState<MovieData[]>([]);
  const onChangeData = (e: React.FormEvent<HTMLInputElement>) => {
    setKeyword(e.currentTarget.value);
    if (e.currentTarget.value.length === 0) {
      onChange(true);
      onSearch('', false);
    } else {
      onChange(false);
    }
  };

  const fetchData = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    fetch(
      'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json',
    )
      .then((res) => res.json())
      .then((data) => data.slice(0, 100));

  const updateData = async () => {
    const res = await fetchData();
    const b = res
      .filter((list: Movie) => list.city.includes(keyword))
      .slice(0, 8);
    setSearchResults(b);
  };

  const debouncedData = useDebounce(keyword);
  useEffect(() => {
    if (debouncedData) {
      updateData();
    }
  });

  const removeKeyword = () => {
    setKeyword('');
    onChange(true);
    onSearch('', false);
  };

  return (
    <>
      <SearchContainer>
        <LeftButtonBox>
          <svg
            className="prevSvg"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8.50001 12.8L14.2 18.4C14.6 18.8 15.2 18.8 15.6 18.4C16 18 16 17.4 15.6 17L10.7 12L15.6 6.99999C16 6.59999 16 5.99999 15.6 5.59999C15.4 5.39999 15.2 5.29999 14.9 5.29999C14.6 5.29999 14.4 5.39999 14.2 5.59999L8.50001 11.2C8.10001 11.7 8.10001 12.3 8.50001 12.8C8.50001 12.7 8.50001 12.7 8.50001 12.8Z"
              fill="#9E9EA4"
            />
          </svg>
        </LeftButtonBox>
        <SearchBar>
          <Search
            value={keyword}
            onChange={onChangeData}
            placeholder="검색어를 입력해주세요."
          />
          {keyword && (
            <ExitBox onClick={removeKeyword}>
              {/* <Cancel /> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.60004 11.3333L8.00004 8.93331L10.4 11.3333L11.3334 10.4L8.93337 7.99998L11.3334 5.59998L10.4 4.66665L8.00004 7.06665L5.60004 4.66665L4.66671 5.59998L7.06671 7.99998L4.66671 10.4L5.60004 11.3333ZM8.00004 14.6666C7.07782 14.6666 6.21115 14.4915 5.40004 14.1413C4.58893 13.7911 3.88337 13.3162 3.28337 12.7166C2.68337 12.1166 2.20849 11.4111 1.85871 10.6C1.50893 9.78887 1.33382 8.9222 1.33337 7.99998C1.33337 7.07776 1.50849 6.21109 1.85871 5.39998C2.20893 4.58887 2.68382 3.88331 3.28337 3.28331C3.88337 2.68331 4.58893 2.20842 5.40004 1.85865C6.21115 1.50887 7.07782 1.33376 8.00004 1.33331C8.92226 1.33331 9.78893 1.50842 10.6 1.85865C11.4112 2.20887 12.1167 2.68376 12.7167 3.28331C13.3167 3.88331 13.7918 4.58887 14.142 5.39998C14.4923 6.21109 14.6672 7.07776 14.6667 7.99998C14.6667 8.9222 14.4916 9.78887 14.1414 10.6C13.7912 11.4111 13.3163 12.1166 12.7167 12.7166C12.1167 13.3166 11.4112 13.7918 10.6 14.142C9.78893 14.4922 8.92226 14.6671 8.00004 14.6666Z"
                  fill="#9E9EA4"
                />
              </svg>
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
          <svg
            className="searchSvg"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.71 20.29L18 16.61C19.4401 14.8144 20.1375 12.5353 19.9488 10.2413C19.7601 7.94733 18.6997 5.81281 16.9855 4.27667C15.2714 2.74053 13.0338 1.91954 10.7329 1.9825C8.43207 2.04546 6.24275 2.98759 4.61517 4.61517C2.98759 6.24275 2.04546 8.43207 1.9825 10.7329C1.91954 13.0338 2.74053 15.2714 4.27667 16.9855C5.81281 18.6997 7.94733 19.7601 10.2413 19.9488C12.5353 20.1375 14.8144 19.4401 16.61 18L20.29 21.68C20.383 21.7738 20.4936 21.8482 20.6154 21.8989C20.7373 21.9497 20.868 21.9758 21 21.9758C21.132 21.9758 21.2627 21.9497 21.3846 21.8989C21.5065 21.8482 21.6171 21.7738 21.71 21.68C21.8903 21.4936 21.991 21.2444 21.991 20.985C21.991 20.7257 21.8903 20.4765 21.71 20.29ZM11 18C9.61556 18 8.26218 17.5895 7.11103 16.8203C5.95989 16.0511 5.06268 14.9579 4.53287 13.6788C4.00306 12.3997 3.86443 10.9923 4.13453 9.63439C4.40463 8.27653 5.07131 7.02925 6.05028 6.05028C7.02925 5.07131 8.27653 4.40463 9.63439 4.13453C10.9923 3.86443 12.3997 4.00306 13.6788 4.53287C14.9579 5.06268 16.0511 5.95989 16.8203 7.11103C17.5895 8.26218 18 9.61556 18 11C18 12.8565 17.2625 14.637 15.9498 15.9498C14.637 17.2625 12.8565 18 11 18Z"
              fill="#9E9EA4"
            />
          </svg>
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
};

export default SearchBox;
