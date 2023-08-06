import WriterInfo from './WriterInfo';
import CategoryChips from './CategoryChips';
import { styled } from 'styled-components';
import RateInfo from './RateInfo';

interface Props {
  category: string[];
  rate: number;
}

const dummyData: Props = {
  category: ['멜로/로맨스', 'SF', ' 드라마'],
  rate: 4,
};

const ReviewContents = () => {
  return (
    <ContentsWrapper>
      <WriterInfo />
      <CategoryChips categoryList={dummyData.category} />
      <RateInfo rate={dummyData.rate} />
    </ContentsWrapper>
  );
};

const ContentsWrapper = styled.div`
  overflow-y: scroll;
  overflow-x: clip;
`;
export default ReviewContents;
