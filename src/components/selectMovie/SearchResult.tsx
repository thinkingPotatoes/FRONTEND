import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { MovieResponseList } from '../../types/search';
import Subtitle1 from '../common/texts/Subtitle1';
import MovieItem from './MovieItem';

function SearchResult({ searchResults }: { searchResults: MovieResponseList[] }) {
  const navigate = useNavigate();
  const handleReview = (id: string) => {
    navigate(`/review/${id}`);
  };

  return (
    <SearchResultWrapper>
      {searchResults.length > 0 ? (
        searchResults.map((movieResponse) => (
          <MovieItem
            key={movieResponse.docId}
            movie={movieResponse}
            onClick={() => handleReview(movieResponse.docId)}
          />
        ))
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
  flex-direction: column;
  justify-content: center;
  padding-top: 24px;
`;

const NoResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 52px;
  color: var(--dark-grey-700);
`;

export default SearchResult;
