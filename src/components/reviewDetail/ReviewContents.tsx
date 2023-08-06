import WriterInfo from './WriterInfo';
import CategoryChips from './CategoryChips';
import { styled } from 'styled-components';

interface Props {
  category: string[];
}

const dummyData: Props = {
  category: ['멜로/로맨스', 'SF', ' 드라마'],
};
const ReviewContents = () => {
  return (
    <ContentsWrapper>
      <WriterInfo />
      <CategoryChips categoryList={dummyData.category} />
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: clip;
`;
export default ReviewContents;
