import { Rating } from 'react-simple-star-rating';
import { styled } from 'styled-components';
import { ReactComponent as BlankStarIcon } from '../../assets/image/icon/blankStar.svg';
import { ReactComponent as FillStarIcon } from '../../assets/image/icon/fillStar.svg';

type StarRatingProps = {
  setGrade: React.Dispatch<React.SetStateAction<number>>;
};

function StarRating({ setGrade }: StarRatingProps) {
  const handleRating = (rate: number) => {
    setGrade(rate);
  };

  return (
    <StarRatingWrapper>
      <Rating
        onClick={handleRating}
        fillIcon={<FillStarIcon width={'24px'} height={'24px'} />}
        emptyIcon={<BlankStarIcon width={'24px'} height={'24px'} />}
        allowFraction={true}
      />
    </StarRatingWrapper>
  );
}

const StarRatingWrapper = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid var(--dark-border-border);
`;

export default StarRating;
