import { styled } from 'styled-components';
import { ReactComponent as PosterImage } from '../../assets/image/poster/poster_sm.svg';

interface Props {
  index: number;
  title: string;
  rating: number;
}

function BoxOfficeItem({ index, title, rating }: Props) {
  return (
    <Container>
      <Left>
        {index}
        <PosterImage />
        <MovieTitle>{title}</MovieTitle>
      </Left>
      <Right>예상 ★️ {rating}</Right>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 600;
  color: var(--disabled);
  padding: 8px 0;
`;
const Left = styled.div`
  align-items: center;
  display: flex;
  gap: 12px;
`;
const MovieTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: var(--text-default);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  /* Todo 이국신: 2줄까지 표현가능하야하고 box를 넘어가면 ellipsis로 표현해야한다.
    현재는 임의로 고정시켜두었다.
  */
  width: 180px;
`;

const Right = styled.div`
  font-size: 12px;
  font-family: 'Pretendard', sans-serif;
  color: var(--main);
`;

export default BoxOfficeItem;
