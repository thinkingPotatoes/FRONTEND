import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { styled } from 'styled-components';
import ReviewForm from '../components/postReview/ReviewForm';
import SelectedMovie from '../components/postReview/SelectedMovie';
import TopBar from '../components/postReview/TopBar';
import getBytes from '../utils/getBytes';

function PostReview() {
  const [disabled, setDisabled] = useState(true);
  const [grade, setGrade] = useState(0);
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const { id } = useParams();
  const movieId = id || '';

  const validateForm = () => {
    if (getBytes(subject) > 50000) {
      throw new Error('제목 50,000 bytes 초과');
    }
    if (getBytes(content) > 50000) {
      throw new Error('내용 50,000 bytes 초과');
    }
  };

  const handlePostReview = () => {
    try {
      validateForm();
    } catch (e) {
      if (e instanceof Error) alert(e.message);
      return;
    }

    axios.post(`http://localhost:8080/filog/create`, {
      movieId,
      subject,
      content,
      grade,
      scope: 'PUBLIC', // 누락
      theater: 'CGV', // 누락(option)
      seat: '1', // 누락(option)
      spoiler: false, // 누락
      watchedAt: '2023-08-10 17:08:00', // 누락
    });
  };

  useEffect(() => {
    if (content.length === 0 || subject.length === 0 || grade === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [content.length, subject.length, grade]);

  return (
    <PostReviewWrapper>
      <TopBar onClick={handlePostReview} disabled={disabled} />
      <Main>
        <SelectedMovie movieId={movieId} />
        <ReviewForm
          subject={subject}
          setSubject={setSubject}
          grade={grade}
          setGrade={setGrade}
          content={content}
          setContent={setContent}
        />
      </Main>
    </PostReviewWrapper>
  );
}

const PostReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  color: var(--dark-grey-800);

  input::placeholder,
  textarea::placeholder {
    color: var(--dark-grey-500);
  }
`;

const Main = styled.div`
  height: calc(100% - 56px);
`;

export default PostReview;
