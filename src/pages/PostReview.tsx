import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import axios from '../api/apiController';
import empty from '../assets/image/poster/empty_poster.png';
import Modal from '../components/common/Modal';
import ReviewForm from '../components/postReview/ReviewForm';
import SelectedMovie from '../components/postReview/SelectedMovie';
import StarRateBox from '../components/postReview/StarRateBox';
import TopBar from '../components/postReview/TopBar';
import { Movie } from '../types/movie';
import getBytes from '../utils/getBytes';

function PostReview() {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(true);
  const [disabled, setDisabled] = useState(true);
  const [grade, setGrade] = useState(0);
  const [subject, setSubject] = useState('');
  const [content, setContent] = useState('');

  const { id } = useParams();
  const movieId = id || '';

  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    axios.get(`/movies/${movieId}`).then((data) => {
      const responseMovie = data.data.data;
      setMovie(responseMovie);
    });
  }, []);

  const handleShowModal = (newShowModal: boolean) => {
    if (grade === 0) return;
    setShowModal(newShowModal);
  };

  const validateForm = () => {
    if (getBytes(subject) > 50000) {
      throw new Error('제목 50,000 bytes 초과');
    }
    if (getBytes(content) > 50000) {
      throw new Error('내용 50,000 bytes 초과');
    }
  };

  const handleGoNext = () => {
    try {
      validateForm();
    } catch (e) {
      if (e instanceof Error) alert(e.message);
      return;
    }
    navigate(`/review/${id}/required`, { state: { subject, content, grade, movieId: id } });
  };

  useEffect(() => {
    if (content.length === 0 || subject.length === 0 || grade === 0) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [content.length, subject.length, grade]);

  if (movie === undefined) return <div>해당 영화를 찾지 못했습니다.</div>;

  return (
    <PostReviewWrapper>
      <TopBar onClick={handleGoNext} disabled={disabled} text={'다음'} />
      <Main>
        <SelectedMovie movie={movie} grade={grade} handleShowModal={handleShowModal} />
        <ReviewForm
          subject={subject}
          setSubject={setSubject}
          content={content}
          setContent={setContent}
        />
      </Main>
      {showModal ? (
        <Modal
          handleShowModal={handleShowModal}
          contentNode={
            <StarRateBox
              grade={grade}
              posterUrl={movie?.poster || empty}
              setGrade={setGrade}
              handleShowModal={handleShowModal}
            />
          }
        />
      ) : null}
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
    font-family: Pretendard;
    color: var(--dark-grey-500);
  }
`;

const Main = styled.div`
  height: calc(100% - 56px);
`;

export default PostReview;
