import { styled } from 'styled-components';
import BoxOfficeItem from './BoxOfficeItem.tsx';

const data = [
  { title: '아이언맨', rating: 3.5 },
  { title: '킹덤: 오브 더 라이즈', rating: 3.5 },
  {
    title:
      '유열의 음악일기 만약에 길이가 길유열의 음악일기 만약에 길이가 길유열의 음악일기 만약에 길이가 길',
    rating: 3.5,
  },
];

function BoxOfficeList() {
  return (
    <Container>
      {data.map((movie, idx) => (
        <BoxOfficeItem {...movie} index={idx + 1} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export default BoxOfficeList;
