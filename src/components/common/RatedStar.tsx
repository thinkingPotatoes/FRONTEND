import { ReactComponent as BlankStarIcon } from '../../assets/image/icon/blankStar.svg';
import { ReactComponent as FillStarIcon } from '../../assets/image/icon/fillStar.svg';

function RatedStar({ starCount }: { starCount: number }) {
  const stars = new Array(5).fill(false);
  stars.forEach((_, index) => (stars[index] = starCount-- > 0 ? true : false));

  return (
    <div>
      {stars.map((isFill: boolean, index) =>
        isFill ? (
          <FillStarIcon key={index} width={'16px'} height={'16px'} />
        ) : (
          <BlankStarIcon key={index} width={'16px'} height={'16px'} />
        ),
      )}
    </div>
  );
}

export default RatedStar;
