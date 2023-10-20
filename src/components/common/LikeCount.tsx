import { styled } from 'styled-components';
import { ReactComponent as LikeIcon } from '../../assets/image/icon/like.svg';
import Body3 from './texts/Body3';

function LikeCount({ count }: { count: number }) {
  return (
    <LikeCountWrapper>
      <LikeIcon />
      <Body3>{count}</Body3>
    </LikeCountWrapper>
  );
}

const LikeCountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;

  color: var(--dark-grey-700);
`;

export default LikeCount;
