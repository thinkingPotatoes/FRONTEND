import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ReactComponent as LeftPrevSvg } from '../../assets/icon/angle-left-btn.svg';
import AutoSearchList from './AutoSearchList';
import SearchInputBar from './SearchInputBar';
import { useQuery } from 'react-query';
import axios from '../../api/apiController';
import { MovieResponseList } from '../../types/search';
import { useNavigate } from 'react-router-dom';
import { localStorageKey, updateRecentSearch, useSearch } from '../../hooks/useSearchContext';

export interface SearchBoxProps {
  onSearch: (keyword: string, booleanCheck: boolean) => void;
  onChange: (keyword: boolean) => void;
  setResults: React.Dispatch<React.SetStateAction<MovieResponseList[]>>;
  keyNow: string;
}

export const fetchAutocompleteSuggestions = async (keyword: string) => {
  try {
    const response = await axios.post(`/movies/search?page=0&size=10&sort=repRlsDate,desc`, {
      keyword: keyword,
    });
    return response.data.data.searchMovieResponseList;
  } catch (error) {
    throw new Error('Network response was not ok');
  }
};

export function useAutocompleteQuery(keyword: string) {
  return useQuery(['autocomplete', keyword], () => fetchAutocompleteSuggestions(keyword), {
    //custom query
  });
}

function SearchBox({ onChange, onSearch, setResults, keyNow }: SearchBoxProps) {
  const Navigate = useNavigate();
  const [keyword, setKeyword] = useState<string>('');
  const [isSearch, setIsSearch] = useState(false);
  const [fromRecentKeyword, setFromRecentKeyword] = useState(false);

  const { data: searchResults } = useAutocompleteQuery(keyword);

  const { recentSearch, setRecentSearch } = useSearch();
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(recentSearch));
  }, [recentSearch]);

  useEffect(() => {
    setKeyword(keyNow);
    setFromRecentKeyword(true);
  }, [keyNow]);

  useEffect(() => {
    setResults(searchResults);
  }, [searchResults]);

  function onChangeData(e: React.FormEvent<HTMLInputElement>) {
    setFromRecentKeyword(false);
    setKeyword(e.currentTarget.value);
    setIsSearch(false);
    if (e.currentTarget.value.length === 0) {
      onChange(true);
      onSearch('', false);
    } else {
      onChange(false);
    }
  }

  function removeKeyword() {
    if (keyNow.length === 0) {
      Navigate('/');
    }
    setKeyword('');
    onChange(true);
    onSearch('', false);
    setIsSearch(false);
  }

  function linkToPrevPage() {
    if (keyNow.length === 0) {
      Navigate('/');
    }
    setKeyword('');
    onChange(true);
    onSearch('', false);
    setIsSearch(false);
  }

  function onSearchClick() {
    setKeyword(keyword);

    onSearch(keyword, true);
    setIsSearch(true);
    onChange(false);
    if (keyword.trim() !== '') {
      const updatedRecentSearches = updateRecentSearch(recentSearch, keyword.trim());
      setRecentSearch(updatedRecentSearches);
    }
  }

  return (
    <>
      <SearchContainer>
        <LeftButtonBox onClick={linkToPrevPage}>
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
      {keyword && (
        <>
          {searchResults?.length > 0 && !isSearch && !fromRecentKeyword && (
            <AutoSearchList
              searchResults={searchResults}
              onClick={(movie) => {
                setKeyword(movie);
                onSearch(movie, true);
                setIsSearch(true);
              }}
            />
          )}
          {searchResults?.length === 0 && <NoSearchResult>검색된 결과가 없습니다.</NoSearchResult>}
        </>
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
