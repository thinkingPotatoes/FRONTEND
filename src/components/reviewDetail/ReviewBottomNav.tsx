import { styled } from 'styled-components';
import { LikeBtn } from '../common/LikeBtn';
import { ReactComponent as CommentSvg } from '../../assets/image/icon/comment.svg';

interface Props {
  likeCnt: number;
  commentCnt: number;
}
const ReviewBottomNav = ({ likeCnt, commentCnt }: Props) => {
  return (
    <BottomNav>
      <IconBox>
        <LikeBtn count={likeCnt} picked={true} />
        <CommentBox>
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
  alignment-items: center;
  gap: 10px;
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
