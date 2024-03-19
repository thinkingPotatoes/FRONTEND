import { useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../api/apiController';
import Body2 from '../components/common/texts/Body2';
import Head1 from '../components/common/texts/Head1';
import Subtitle2 from '../components/common/texts/Subtitle2';
import Input from '../components/postReview/Input';
import SelectChip from '../components/postReview/SelectChip';
import TopBar from '../components/postReview/TopBar';

const MORNING = 0,
  AFTERNOON = 1,
  NIGHT = 2,
  DAWN = 3;

function PostReviewOption() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (id === null) {
      navigate(`/postreview`);
      return;
    }

    if (state === null) {
      navigate(`/postreview/${id}`);
      return;
    }
  }, [state, id]);

  const [watchedTimeIdx, setWatchedTimeIdx] = useState<number | undefined>();
  const [theater, setTheater] = useState<string>('');
  const [seat, setSeat] = useState<string>('');
  let watchedTime: string;
  if (watchedTimeIdx === MORNING) watchedTime = 'MORNING';
  if (watchedTimeIdx === AFTERNOON) watchedTime = 'AFTERNOON';
  if (watchedTimeIdx === NIGHT) watchedTime = 'NIGHT';
  if (watchedTimeIdx === DAWN) watchedTime = 'DAWN';

  const handlePostReview = async () => {
    try {
      await axios.post(`/filog/article`, {
        ...state,
        watchedTime,
        theater,
        seat,
      });
      navigate('/home');
    } catch (e) {
      if (e instanceof Error) alert(e.message);
    }
  };

  return (
    <Wrapper>
      <TopBar onClick={handlePostReview} disabled={false} text={'등록'} />
      <Head1>상세한 리뷰를 위해 작성해보세요</Head1>
      <Addition>
        <Body2>더욱 더 기억에 남을 리뷰가 될 거예요</Body2>
      </Addition>
      <Main>
        <SelectWrapper>
          <Subtitle2>관람 시간</Subtitle2>
          <SelectList>
            <SelectChip
              selected={watchedTimeIdx === MORNING}
              text={'오전'}
              onClick={() => setWatchedTimeIdx(MORNING)}
            />
            <SelectChip
              selected={watchedTimeIdx === AFTERNOON}
              text={'오후'}
              onClick={() => setWatchedTimeIdx(AFTERNOON)}
            />
            <SelectChip
              selected={watchedTimeIdx === NIGHT}
              text={'밤'}
              onClick={() => setWatchedTimeIdx(NIGHT)}
            />
            <SelectChip
              selected={watchedTimeIdx === DAWN}
              text={'새벽'}
              onClick={() => setWatchedTimeIdx(DAWN)}
            />
          </SelectList>
        </SelectWrapper>
        <SelectWrapper>
          <Subtitle2>관람 장소</Subtitle2>
          <SelectList>
            <Input value={theater} setValue={setTheater} />
          </SelectList>
        </SelectWrapper>
        <SelectWrapper>
          <Subtitle2>좌석</Subtitle2>
          <SelectList>
            <Input value={seat} setValue={setSeat} />
          </SelectList>
        </SelectWrapper>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 12px 0;
  color: var(--dark-grey-800);
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px 0;
  color: var(--dark-grey-700);
`;

const Addition = styled.div`
  color: var(--dark-grey-500);
  padding-top: 8px;
`;

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SelectList = styled.div`
  display: flex;
  gap: 8px;
`;

export default PostReviewOption;
