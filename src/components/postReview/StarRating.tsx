import { Rating } from 'react-simple-star-rating';
import { styled } from 'styled-components';
import { ReactComponent as BlankStarIcon } from '../../assets/image/icon/blankStarColorless.svg';
import { ReactComponent as FillStarIcon } from '../../assets/image/icon/fillStar.svg';

type StarRatingProps = {
  grade: number;
  setGrade: React.Dispatch<React.SetStateAction<number>>;
};

function StarRating({ grade, setGrade }: StarRatingProps) {
  const handleRating = (rate: number) => {
    setGrade(rate);
  };

  return (
    <StarRatingWrapper>
      <Rating
        onClick={handleRating}
        fillIcon={<FillStarIcon width={'32px'} height={'32px'} fill="var(--main)" />}
        emptyIcon={
          <BlankStarIcon
            width={'32px'}
            height={'32px'}
            color="#ffffff"
            fill={grade === 0 ? 'var(--dark-grey-500)' : 'var(--main)'}
          />
        }
        allowFraction={true}
        initialValue={grade}
      />
    </StarRatingWrapper>
  );
}

const StarRatingWrapper = styled.div`
  padding: 16px 0;
`;

export default StarRating;
