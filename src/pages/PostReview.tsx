import axios from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router';
import { styled } from 'styled-components';
import SelectedMovie from '../components/postReview/SelectedMovie';
import StarRating from '../components/postReview/StarRating';
import TopBar from '../components/postReview/TopBar';

function PostReview() {
  const [disabled, setDisabled] = useState(true);
  const [grade, setGrade] = useState(0);
  const [form, setForm] = useState({ subject: '', content: '' });

  const { id } = useParams();
  const movieId = id || '';

  const subjectRef = useRef<HTMLTextAreaElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const handleResizeSubjectHeight = useCallback(() => {
    if (subjectRef.current) {
      subjectRef.current.style.height = 'auto';
      subjectRef.current.style.height = subjectRef.current.scrollHeight + 'px';
    }
  }, []);

  const handleResizeContentHeight = useCallback(() => {
    if (contentRef.current) {
      contentRef.current.style.height = 'auto';
      contentRef.current.style.height = contentRef.current.scrollHeight + 'px';
    }
  }, []);

  const handlePostReview = useCallback(() => {
    axios.post(`${process.env.REACT_BASE_URL}/filog/create`, {
      movieId: movieId,
      subject: form.subject,
      content: form.content,
      grade: grade,
      scope: 'PUBLIC', // 누락
      theater: 'CGV', // 누락(option)
      seat: '1', // 누락(option)
      spoiler: false, // 누락
      watchedAt: '2023-08-10 17:08:00', // 누락
    });
  }, []);

  useEffect(() => {
    if (form.content.length === 0 || form.subject.length === 0 || grade === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [form.content.length, form.subject.length, grade]);

  return (
    <PostReviewWrapper>
      <TopBar onClick={handlePostReview} disabled={disabled} />
      <Main>
        <SelectedMovie movieId={movieId} />
        <Review>
          <Subject
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            onInput={handleResizeSubjectHeight}
            ref={subjectRef}
            placeholder="리뷰 제목"
            rows={1}
          />
          <StarRating grade={grade} setGrade={setGrade} />
          <Content
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            ref={contentRef}
            onInput={handleResizeContentHeight}
            placeholder="영화리뷰를 작성해주세요"
          />
        </Review>
      </Main>
    </PostReviewWrapper>
  );
}

const PostReviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  color: var(--dark-grey-800);
  height: 100vh;

  input::placeholder,
  textarea::placeholder {
    color: var(--dark-grey-500);
  }
`;

const Main = styled.div`
  height: calc(100% - 56px);
`;

const Review = styled.div`
  flex: auto;
  textarea::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Subject = styled.textarea`
  width: 100%;
  background: rgba(0, 0, 0, 0);
  padding: 18px 0 16px 0;

  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.24px;
  border: none;
  outline: none;
  resize: none;
  border-bottom: 1px solid var(--dark-border-border);

  color: var(--dark-grey-800);
  caret-color: var(--main);
`;

const Content = styled.textarea`
  width: 100%;

  background: rgba(0, 0, 0, 0);
  border: none;
  outline: none;
  resize: none;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 20.8px */
  letter-spacing: -0.016px;

  color: var(--dark-grey-800);
  caret-color: var(--main);

  margin-top: 16px;
`;

export default PostReview;
