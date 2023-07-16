import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as CancelSvg } from '../../assets/icon/btn-cancel.svg';

const movieList: string[] = ['아이언맨', '아이언하트', '아이언', '범죄도시'];

export default function RecentSearch() {
  const [recentSearch, setRecentSearch] = useState<string[]>(movieList);
  function handleRemoveSearch(index: number) {
    const updatedSearches = [...recentSearch];
    updatedSearches.splice(index, 1);
    setRecentSearch(updatedSearches);
  }
  return (
    <>
      <SubtitleList>
        <div className="title">최근 검색어</div>
        <div
          className="deleteBtn"
          onClick={() => {
            setRecentSearch([]);
          }}
        >
          전체삭제
        </div>
      </SubtitleList>
      {recentSearch.length > 0 && (
        <Parent>
          <RecentList>
            {recentSearch.map((search, idx) => (
              <RecentBtn>
                {search}
                <CancelSvg
                  onClick={() => {
                    handleRemoveSearch(idx);
                  }}
                />
              </RecentBtn>
            ))}
          </RecentList>
        </Parent>
      )}
    </>
  );
}

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
