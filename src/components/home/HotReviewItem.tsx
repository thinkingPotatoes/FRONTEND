import React from 'react';
import styled from 'styled-components';
import Body2 from '../common/texts/Body2';
import Body3 from '../common/texts/Body3';
import { Rating } from 'react-simple-star-rating';
import { ReactComponent as BlankStarIcon } from '../../assets/image/icon/blankStarColorless.svg';
import { ReactComponent as FillStarIcon } from '../../assets/image/icon/fillStar.svg';
import LikeCount from '../common/LikeCount';
import CommentCount from '../common/CommentCount';

interface Props {
  grade: number;
  subject: string;
  content: string;
  like: number;
  comment: number;
  blog: string;
  poster: string;
}

function HotReviewItem({ subject, content, grade, poster, like, comment, blog }: Props) {
  return (
    <Container>
      <Poster src={poster} alt="poster" />
      <Info>
        <Rating
          fillIcon={<FillStarIcon width={'16px'} height={'16px'} fill="var(--main)" />}
          emptyIcon={
            <BlankStarIcon
              width={'16px'}
              height={'16px'}
              color="#ffffff"
              fill={grade === 0 ? 'var(--dark-grey-500)' : 'var(--main)'}
            />
          }
          allowFraction={true}
          initialValue={grade}
        />
        <Subject>{subject}</Subject>
        <Content>{content}</Content>
        <ReviewStatics>
          <LikeCount count={like} />
          <CommentCount count={comment} />
          <Content>{blog}</Content>
        </ReviewStatics>
      </Info>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  padding: 8px 0px;
`;

const Poster = styled.img`
  width: 80px;
  height: 113px;
`;

const Info = styled.div`
  margin: 14.5px 0px 14.5px 12px;
`;

const Subject = styled(Body2)`
  color: var(--dark-grey-700);
`;

const Content = styled(Body3)`
  color: var(--dark-grey-500);
`;

const ReviewStatics = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 12px;
`;

export default HotReviewItem;
