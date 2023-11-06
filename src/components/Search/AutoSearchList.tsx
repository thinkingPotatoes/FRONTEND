import styled from 'styled-components';
import { MovieResponseList } from '../../types/search';
import { localStorageKey, updateRecentSearch, useSearch } from '../../hooks/useSearchContext';
import { useEffect } from 'react';

interface AutoSearchListProps {
  searchResults: MovieResponseList[];
  onClick: (movie: string) => void;
}

function AutoSearchList({ searchResults, onClick }: AutoSearchListProps) {
  const { recentSearch, setRecentSearch } = useSearch();
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(recentSearch));
  }, [recentSearch]);

  function handleSearchItemClick(movie: string) {
    const keyword = movie.trim();
    onClick(keyword);
    const updatedRecentSearches = updateRecentSearch(recentSearch, keyword.trim());
    setRecentSearch(updatedRecentSearches);
  }

  return (
    <AutoSearchContainer>
      <AutoSearchWrap>
        {searchResults.map((search, idx) => (
          <AutoSearchData key={idx} onClick={() => handleSearchItemClick(search.title)}>
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
