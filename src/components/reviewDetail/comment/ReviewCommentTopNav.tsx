import { useNavigate } from 'react-router-dom';
import { ReactComponent as BackArrowSvg } from '../../../assets/image/icon/backArrow.svg';
import { styled } from 'styled-components';
import CommentBox from './CommentBox';
import { ReviewComment } from '../../types/review';

interface Props {
  commentCnt: number;
}

const dummyData: ReviewComment[] = [
  {
    id: '1',
    contents: '저도 어제 이 영화 봤는데! 너무 공감되네요. 글 잘봤어요!',
    date: '2023.12.25',
    likeCnt: 0,
    nickname: 'Comment01',
    replyId: '',
    userId: '123',
  },
  {
    id: '2',
    contents: '저도 어제 이 영화 봤는데! 너무 공감되네요. 글 잘봤어요!',
    date: '2023.12.25',
    likeCnt: 2,
    nickname: 'Comment02',
    replyId: '',
    userId: '456',
  },
  {
    id: '3',
    contents: '저도 어제 이 영화 봤는데! 너무 공감되네요. 글 잘봤어요!',
    date: '2023.12.25',
    likeCnt: 0,
    nickname: 'Comment03',
    replyId: '456',
    userId: '789',
  },
];

const CommentTopNav = ({ commentCnt }: Props) => {
  const navigate = useNavigate();

  const handleLeftArrowClick = () => {
    navigate(-1);
  };
  return (
    <>
      <TopNavBar>
        <SvgWrapper>
          <BackArrowSvg onClick={handleLeftArrowClick} />
        </SvgWrapper>
        <div className="title">
          댓글 <span>{commentCnt}</span>
        </div>
      </TopNavBar>
      {dummyData.map((data) => (
        <CommentBox comment={data} />
      ))}
    </>
  );
};

const TopNavBar = styled.div`
  position: relative;
  display: flex;
  margin: 0 -20px;
  height: 56px;
  align-items: center;
  gap: 32%;
  .title {
    display: flex;
    font-size: 18px;
    color: var(--text-emphasize);
    font-weight: 600;
    text-align: center;
    letter-spacing: -0.09px;

    span {
      margin-left: 5px;
      color: var(--main);
    }
  }
`;

const SvgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 44px;
  cursor: pointer;
`;

export default CommentTopNav;
