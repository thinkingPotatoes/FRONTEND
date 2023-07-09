import styled from 'styled-components';

const movieList: string[] = ['아이언맨', '아이언하트', '아이언'];
const SubtitleList = styled.div`
  display: flex;
  height: 56px;
  padding: 0 20px;
  align-items: center;
  gap: 10px;
  .title {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 0 0;
    color: #e4e4e5;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.014px;
  }
`;

const RecommendBtn = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  height: 21px;
  color: #9087f4;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.016px;
  padding: 4px 8px;
  gap: 2px;
  border-radius: 100px;
  background: #2f2f51;
`;

const RecommendList = styled.div`
  width: max-content;
  display: flex;
  height: 52px;
  padding: 0px 8px 0px 24px;
  align-items: center;
  gap: 10px;
  overflow: hidden;
`;

const Parent = styled.div`
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function RecommendSearch() {
  return (
    <>
      <SubtitleList>
        <div className="title">추천 영화 검색어</div>
      </SubtitleList>
      {movieList.length > 0 && (
        <Parent>
          <RecommendList>
            {movieList.map((search) => (
              <RecommendBtn>{search}</RecommendBtn>
            ))}
          </RecommendList>
        </Parent>
      )}
    </>
  );
}
