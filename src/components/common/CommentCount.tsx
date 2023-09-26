import { styled } from 'styled-components';
import { ReactComponent as CommentIcon } from '../../assets/image/icon/comment.svg';
import Body3 from './texts/Body3';

function CommentCount({ count }: { count: number }) {
  return (
    <CommentCountWrapper>
      <CommentIcon />
      <Body3>{count}</Body3>
    </CommentCountWrapper>
  );
}

const CommentCountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(--dark-grey-700);
`;

export default CommentCount;
