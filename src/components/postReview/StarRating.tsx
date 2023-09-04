import { styled } from 'styled-components';
import { ReactComponent as BlankStarIcon } from '../../assets/image/icon/blankStar.svg';
import { ReactComponent as FillStarIcon } from '../../assets/image/icon/fillStar.svg';

type StarRatingProps = {
  grade: number;
  setGrade: React.Dispatch<React.SetStateAction<number>>;
};

function StarRating({ grade, setGrade }: StarRatingProps) {
  const stars = new Array(5).fill(false);
  stars.forEach((_, index) => {
    stars[index] = grade > index ? true : false;
  });

  const handleRateStar = (grade: number) => setGrade(grade + 1);

  return (
    <StarRatingWrapper>
      {stars.map((isFill: boolean, index) =>
        isFill ? (
          <FillStarIcon
            onClick={() => handleRateStar(index)}
            key={index}
            width={'24px'}
            height={'24px'}
          />
        ) : (
          <BlankStarIcon
            onClick={() => handleRateStar(index)}
            key={index}
            width={'24px'}
            height={'24px'}
          />
        ),
      )}
    </StarRatingWrapper>
  );
}

const StarRatingWrapper = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid var(--dark-border-border);
`;

export default StarRating;
