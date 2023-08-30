import { styled } from 'styled-components';
import { ReactComponent as LikeIcon } from '../../assets/image/icon/like.svg';

function LikeCount() {
  return (
    <LikeCountWrapper>
      <LikeIcon />
      <Count>7</Count>
    </LikeCountWrapper>
  );
}

const LikeCountWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const Count = styled.span`
  color: var(--dark-grey-700, #c3c3c6);

  /* Body3 */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
`;

export default LikeCount;
