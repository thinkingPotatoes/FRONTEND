import styled from 'styled-components';
import { MAX_RECENT_SEARCH, localStorageKey } from './RecentSearch';
import { MovieResponseList } from '../types/search';

interface AutoSearchListProps {
  searchResults: MovieResponseList[];
  onClick: (city: string) => void;
}

function AutoSearchList({ searchResults, onClick }: AutoSearchListProps) {
  function handleSearchItemClick(city: string) {
    onClick(city);

    const storedList = localStorage.getItem(localStorageKey);
    let updatedSearches: string[] = [];
    if (storedList) {
      updatedSearches = JSON.parse(storedList);
    }

    if (updatedSearches.length >= MAX_RECENT_SEARCH) {
      updatedSearches.pop();
    }
    updatedSearches.unshift(city);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedSearches));
  }

  return (
    <AutoSearchContainer>
      <AutoSearchWrap>
        {searchResults.map((search, idx) => (
          <AutoSearchData key={search.title} onClick={() => handleSearchItemClick(search.title)}>
            <a href="#">{search.title}</a>
          </AutoSearchData>
        ))}
      </AutoSearchWrap>
    </AutoSearchContainer>
  );
}

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
    text-decoration: none;
  }
`;

export default AutoSearchList;
