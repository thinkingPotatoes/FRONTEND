import { Rating } from 'react-simple-star-rating';
import { ReactComponent as BlankStarIcon } from '../../assets/image/icon/blankStar.svg';
import { ReactComponent as FillStarIcon } from '../../assets/image/icon/fillStar.svg';

function RatedStar({ star }: { star: number }) {
  return (
    <Rating
      readonly
      initialValue={star}
      fillIcon={<FillStarIcon width={16} height={16} fill={'var(--main)'} />}
      emptyIcon={<BlankStarIcon width={16} height={16} fill={'var(--main)'} />}
      allowFraction={true}
    />
  );
}

export default RatedStar;
