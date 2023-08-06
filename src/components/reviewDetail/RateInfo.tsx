import { styled } from 'styled-components';
import { ReactComponent as BlankStarSvg } from '../../assets/image/icon/blankStar.svg';
import { ReactComponent as FillStarSvg } from '../../assets/image/icon/fillStar.svg';

interface Props {
  rate: number;
}

const RateInfo = ({ rate }: Props) => {
  return (
    <RateWrapper>
      {Array.from({ length: 5 }, (_, index) => (
        <StarIcon key={index} filled={index < rate} />
      ))}
    </RateWrapper>
  );
};

interface StarIconProps {
  filled: boolean;
}

const RateWrapper = styled.div`
  margin: 8px 0px;
`;

const StarIcon = styled(({ filled }: StarIconProps) =>
  filled ? <FillStarSvg /> : <BlankStarSvg />,
)`
  width: 24px;
  height: 24px;
`;

export default RateInfo;
