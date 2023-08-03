import styled from 'styled-components';
import { MovieData } from './SearchBox';
import { MAX_RECENT_SEARCH, localStorageKey } from './RecentSearch';

interface AutoSearchListProps {
  searchResults: MovieData[];
  onClick: (city: string) => void;
}

function AutoSearchList({ searchResults, onClick }: AutoSearchListProps) {
  const handleSearchItemClick = (city: string) => {
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
  };

  return (
    <AutoSearchContainer>
      <AutoSearchWrap>
        {searchResults.map((search, idx) => (
          <AutoSearchData key={search.city} onClick={() => handleSearchItemClick(search.city)}>
            <a href="#">{search.city}</a>
          </AutoSearchData>
        ))}
      </AutoSearchWrap>
    </AutoSearchContainer>
  );
}

export default AutoSearchList;

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
