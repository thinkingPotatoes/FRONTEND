import styled from 'styled-components';

const movieList: string[] = ['아이언맨', '아이언하트', '아이언', '범죄도시'];
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

  .deleteBtn {
    display: flex;
    padding-left: 12px;
    justify-content: flex-end;
    align-items: center;
    gap: 2px;
    align-self: stretch;
    color: #7e7e87;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
  }
`;

const RecentBtn = styled.div`
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

const RecentList = styled.div`
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

export default function RecentSearch() {
  return (
    <>
      <SubtitleList>
        <div className="title">최근 검색어</div>
        <div className="deleteBtn">전체삭제</div>
      </SubtitleList>
      {movieList.length > 0 && (
        <Parent>
          <RecentList>
            {movieList.map((search) => (
              <RecentBtn>
                {search}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M4.50531 11.4953L8.00064 7.99997L11.496 11.4953M11.496 4.50464L7.99998 7.99997L4.50531 4.50464"
                    stroke="#9087F4"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </RecentBtn>
            ))}
          </RecentList>
        </Parent>
      )}
    </>
  );
}
