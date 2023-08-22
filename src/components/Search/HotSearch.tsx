import { styled } from 'styled-components';
import { SubtitleList } from './RecentSearch';

const topList: string[] = [
  '아이언맨',
  '아이언맨',
  '아이언맨',
  '아이언맨',
  '아이언맨',
  '아이언맨',
  '아이언맨',
  '아이언맨',
  '아이언맨',
  '아이언맨',
]; // 임시 데이터

function HotSearch() {
  return (
    <>
      <SubtitleList>
        <div className="title">인기검색어</div>
      </SubtitleList>
      <HotSearchList>
        {topList.map((data, idx) => (
          <EachRank>
            <div className="rankNum">{idx + 1}</div>
            <div className="name">{data}</div>
          </EachRank>
        ))}
      </HotSearchList>
    </>
  );
}

const EachRank = styled.div`
  width: 50%;
  color: var(--text-default);
  display: flex;
  align-items: center;
  padding: 12px 20px;
  gap: 12px;

  .rankNum {
    color: var(--disabled);
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.014px;
  }

  .name {
    font-size: 14px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.014px;
  }
`;

const HotSearchList = styled.div`
  display: flex;
  padding-bottom: 0px;
  align-items: flex-start;
  align-self: stretch;
  flex-wrap: wrap;
`;

export default HotSearch;
