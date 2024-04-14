import { styled } from 'styled-components';
import { ReactComponent as LikeIcon } from '../../assets/image/icon/like.svg';
import Body3 from './texts/Body3';

function LikeCount({ count, width, height }: { count: number, width?: number, height?: number }) {
  return (
    <LikeCountWrapper>
      <LikeIcon width={width} height={height}/>
      <Body3>{count}</Body3>
    </LikeCountWrapper>
  );
}

const LikeCountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  color: var(--disabled);
`;

export default LikeCount;
