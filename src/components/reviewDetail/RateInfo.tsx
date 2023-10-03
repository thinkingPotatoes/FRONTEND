import { styled } from 'styled-components';
import { ReactComponent as BlankStarSvg } from '../../assets/image/icon/blankStar.svg';
import { ReactComponent as FillStarSvg } from '../../assets/image/icon/fillStar.svg';
import { Rating } from 'react-simple-star-rating';

interface Props {
  rate: number;
}

const RateInfo = ({ rate }: Props) => {
  return (
    <RateWrapper>
      <Rating
        readonly
        initialValue={rate}
        fillIcon={<FillStarSvg width={24} height={24} />}
        emptyIcon={<BlankStarSvg width={24} height={24} />}
        allowFraction={true}
      />
    </RateWrapper>
  );
};

const RateWrapper = styled.div`
  // margin: 6px 0px;
`;

export default RateInfo;
