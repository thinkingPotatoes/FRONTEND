import { styled } from 'styled-components';
import { useState } from 'react';
import { ReactComponent as UnLikeSvg } from '../../assets/image/icon/like.svg';
import { ReactComponent as LikeSvg } from '../../assets/image/icon/fillLike.svg';
import axios from '../../api/apiController';

interface LikeBtnProps {
  count: number;
  picked: boolean;
  reviewId: string;
}

export const ReviewLike = ({ count, picked, reviewId }: LikeBtnProps) => {
  const [liked, setLiked] = useState(picked);
  const [nowCount, setCount] = useState(count);

  const handleLikeClick = async () => {
    liked ? setCount(nowCount - 1) : setCount(nowCount + 1);
    setLiked(!liked);
    await axios.get(`/filog/${reviewId}/likes`);
    // console.log(response.data);
  };

  return (
    <>
      <Button onClick={handleLikeClick}>
        {liked ? <LikeSvg /> : <UnLikeSvg />}
        {nowCount}
      </Button>
    </>
  );
};

export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  color: var(--text-default);
  font-size: 14px;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;

  svg {
    width: 24px;
    height: 24px;
  }
`;
