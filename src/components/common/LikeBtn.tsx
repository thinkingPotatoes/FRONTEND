import { styled } from 'styled-components';
import { useState, useEffect } from 'react';
import { ReactComponent as UnLikeSvg } from '../../assets/image/icon/like.svg';
import { ReactComponent as LikeSvg } from '../../assets/image/icon/fillLike.svg';

interface LikeBtnProps {
  count: number;
  picked: boolean;
}

export const LikeBtn = ({ count, picked }: LikeBtnProps) => {
  const [liked, setLiked] = useState(false);
  const [nowCount, setCount] = useState(0);

  useEffect(() => {
    setLiked(picked);
  }, [picked]);

  useEffect(() => {
    setCount(count);
  }, [count]);

  const handleLikeClick = async () => {
    liked ? setCount(nowCount - 1) : setCount(nowCount + 1);
    setLiked(!liked);
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
