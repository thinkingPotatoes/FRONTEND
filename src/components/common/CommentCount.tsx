import { styled } from 'styled-components';
import { ReactComponent as CommentIcon } from '../../assets/image/icon/comment.svg';
import Body3 from './texts/Body3';

function CommentCount({ count, width, height }: { count: number, width?: number, height?: number }) {
  return (
    <CommentCountWrapper>
      <CommentIcon width={width} height={height}/>
      <Body3>{count}</Body3>
    </CommentCountWrapper>
  );
}

const CommentCountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--disabled);
`;

export default CommentCount;
