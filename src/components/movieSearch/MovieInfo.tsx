import { styled } from 'styled-components';
import Chip from '../common/Chip.tsx';

function MovieInfo() {
  return (
    <MovieInfoWrapper>
      <MainContent>
        <BasicInfoWrapper>
          <Title>아이언맨 2</Title>
          <BasicInfo>
            <span>2010</span>
            <span>|</span>
            <span>미국</span>
            <span>|</span>
            <span>12세이상</span>
          </BasicInfo>
        </BasicInfoWrapper>
        <GenreList>
          <Chip
            props={{
              text: '액션',
              deletable: false,
              bgColor: 'gray',
            }}
          />
          <Chip
            props={{
              text: 'SF',
              deletable: false,
              bgColor: 'gray',
            }}
          />
          <Chip
            props={{
              text: '드라마',
              deletable: false,
              bgColor: 'gray',
            }}
          />
        </GenreList>
        <Description>
          세계 최강의 무기업체를 이끄는 CEO이자, 타고난 매력으로 셀러브리티
          못지않은 화려한 삶을 살아가던 토니 스타크. 기자회견을 통해 자신이
          아이언맨이라고 정체를 밝힌 이후, ...더보기
        </Description>
      </MainContent>
    </MovieInfoWrapper>
  );
}

const MovieInfoWrapper = styled.div`
  z-index: 1;
  position: relative;
  height: fit-content;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
  justify-content: center;
  gap: 12px;
`;

const BasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const Title = styled.div`
  color: var(--dark-grey-800, #e4e4e5);

  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%; /* 31.2px */
  letter-spacing: -0.24px;
`;

const BasicInfo = styled.div`
  display: flex;
  gap: 4px;

  > span {
    color: var(--dark-grey-500, #7e7e87);

    /* Body2 */
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%; /* 18.2px */
    letter-spacing: -0.014px;
  }
`;

const GenreList = styled.div`
  display: flex;
  gap: 4px;
`;

const Description = styled.div`
  color: var(--dark-grey-700, #c3c3c6);

  /* Body2 */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;
`;

export default MovieInfo;
