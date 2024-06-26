import styled from 'styled-components';
import CommentCount from '../common/CommentCount';
import LikeCount from '../common/LikeCount';
import RatedStar from '../common/RatedStar';
import Body2 from '../common/texts/Body2';
import Body3 from '../common/texts/Body3';

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
        <RatedStar star={grade} />
        <Subject>{subject}</Subject>
        <Content>{content}</Content>
        <ReviewStatics>
          <LikeCount count={like} width={12} height={12}/>
          <CommentCount count={comment} width={12} height={12}/>
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
  color: var(--disabled);
`;

const ReviewStatics = styled.div`
  margin-top: 8px;
  display: flex;
  gap: 12px;
`;

export default HotReviewItem;
