import { styled } from 'styled-components';
import { ReactComponent as CommentSvg } from '../../assets/image/icon/comment.svg';
import { useNavigate } from 'react-router-dom';
import { ReviewLike } from './ReviewLike';

interface Props {
  likeCnt: number;
  commentCnt: number;
  id: string;
}
const ReviewBottomNav = ({ likeCnt, commentCnt, id }: Props) => {
  const navigate = useNavigate();

  const handleDetailComment = () => {
    navigate('comment');
  };
  return (
    <BottomNav>
      <IconBox>
        <ReviewLike count={likeCnt} picked={false} reviewId={id} />
        <CommentBox onClick={handleDetailComment}>
          <CommentSvg />
          <div className="commentCnt">{commentCnt}</div>
        </CommentBox>
      </IconBox>
    </BottomNav>
  );
};

const BottomNav = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 88px;
  padding: 15px 24px;
  align-items: flex-start;
  flex-shrink: 0;
  border-top: 1px solid var(--dark-border-border, #3c3c47);
  background: var(--main-background);
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const CommentBox = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: var(--text-default);
  font-size: 14px;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;

  svg {
    width: 23px;
    height: 21px;
  }
`;
export default ReviewBottomNav;
