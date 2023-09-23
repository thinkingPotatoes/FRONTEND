import ko from 'date-fns/locale/ko';
import { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Head1 from '../components/common/texts/Head1';
import Subtitle2 from '../components/common/texts/Subtitle2';
import SelectChip from '../components/postReview/SelectChip';
import TopBar from '../components/postReview/TopBar';
import getDateStr from '../utils/getDateStr';

const PUBLIC = 0,
  PRIVATE = 1,
  SPOILER = 0,
  NO_SPOILER = 1;

function PostReviewRequired() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (id === null) {
      navigate(`/review`);
      return;
    }

    if (state === null) {
      navigate(`/review/${id}`);
      return;
    }
  }, [state, id]);

  const [disabled, setDisabled] = useState(true);
  const [scopeIdx, setScopeIdx] = useState<number | undefined>();
  const [spoilerIdx, setSpoilerIdx] = useState<number | undefined>();
  const [watchedAtDate, setWatchedAtDate] = useState<Date | null>(new Date());
  let scope: string;
  const spoiler = spoilerIdx === SPOILER;
  const watchedAt = getDateStr(watchedAtDate);
  if (scopeIdx === PUBLIC) scope = 'PUBLIC';
  if (scopeIdx === PRIVATE) scope = 'PRIVATE';

  const handleGoNext = () => {
    navigate(`/review/${id}/option`, {
      state: { ...state, scope, spoiler, watchedAt },
    });
  };

  useEffect(() => {
    if (scopeIdx === undefined || spoilerIdx === undefined) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [scopeIdx, spoilerIdx]);

  return (
    <Wrapper>
      <TopBar onClick={handleGoNext} disabled={disabled} text={'다음'} />
      <Head1>리뷰에 꼭 들어가야하는 내용이에요</Head1>
      <Main>
        <SelectWrapper>
          <Subtitle2>공개 설정 (필수)</Subtitle2>
          <SelectList>
            <SelectChip
              selected={scopeIdx === PUBLIC}
              text={'전체공개'}
              onClick={() => setScopeIdx(PUBLIC)}
            />
            <SelectChip
              selected={scopeIdx === PRIVATE}
              text={'비공개'}
              onClick={() => setScopeIdx(PRIVATE)}
            />
          </SelectList>
        </SelectWrapper>
        <SelectWrapper>
          <Subtitle2>스포일러 (필수)</Subtitle2>
          <SelectList>
            <SelectChip
              selected={spoilerIdx === SPOILER}
              text={'있음'}
              onClick={() => setSpoilerIdx(SPOILER)}
            />
            <SelectChip
              selected={spoilerIdx === NO_SPOILER}
              text={'없음'}
              onClick={() => setSpoilerIdx(NO_SPOILER)}
            />
          </SelectList>
        </SelectWrapper>
        <SelectWrapper>
          <Subtitle2>관람 날짜 (필수)</Subtitle2>
          <DatePickerWrapper>
            <DatePicker
              selected={watchedAtDate}
              onChange={(date) => {
                setWatchedAtDate(date);
              }}
              locale={ko}
              dateFormat="yyyy년 MM월 dd일"
            />
          </DatePickerWrapper>
        </SelectWrapper>
      </Main>
    </Wrapper>
  );
}

const DatePickerWrapper = styled.div`
  width: 100%;

  .react-datepicker-wrapper {
    width: 100%;
  }
  .react-datepicker__input-container > input {
    padding: 19px 16px;
    background: var(--background-bright);
    color: var(--dark-grey-500);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.014px;
    border: none;
    border-radius: 8px;
    width: 100%;
  }

  .react-datepicker-ignore-onclickoutside {
    outline: none;
  }
`;

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

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SelectList = styled.div`
  display: flex;
  gap: 8px;
`;

export default PostReviewRequired;
