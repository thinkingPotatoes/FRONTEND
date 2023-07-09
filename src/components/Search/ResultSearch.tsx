import { styled } from 'styled-components';

const Subtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  height: 56px;
  padding: 0px 4px 0px 20px;
  color: #e4e4e5;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.09px;
`;

const MovieList = styled.div`
  display: flex;
`;

const ResultSearch: React.FC = () => {
  return (
    <>
      <Subtitle>검색 된 영화</Subtitle>
      <MovieList>{}</MovieList>
    </>
  );
};

export default ResultSearch;
