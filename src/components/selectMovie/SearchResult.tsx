import styled from 'styled-components';
import { MovieResponseList } from '../../types/search';
import Subtitle1 from '../common/texts/Subtitle1';
import MovieItem from './MovieItem';

function SearchResult({ searchResults }: { searchResults: MovieResponseList[] }) {
  return (
    <SearchResultWrapper>
      {searchResults.length > 0 ? (
        searchResults.map((movieResponse) => <MovieItem movie={movieResponse} />)
      ) : (
        <NoResult>
          <Subtitle1>검색 결과가 없습니다</Subtitle1>
        </NoResult>
      )}
    </SearchResultWrapper>
  );
}

const SearchResultWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  height: 52px;
`;

const NoResult = styled.div`
  color: var(--dark-grey-700);
`;

export default SearchResult;
