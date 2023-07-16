import React from 'react';
import { styled } from 'styled-components';

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

function hotRenderBox(data: string, idx: number) {
  return (
    <MovieRank key={data}>
      <div className="rank">{idx}</div>
      <div className="name">{data}</div>
    </MovieRank>
  );
}

function hotRenderRow(startIndex: number): React.ReactNode {
  return (
    <div key={startIndex} style={{ display: 'flex', flex: 1 }}>
      {topList
        .slice(startIndex, startIndex + 2)
        .map((data, idx) => hotRenderBox(data, idx + startIndex + 1))}
    </div>
  );
}

function hotRenderGrid(): React.ReactNode[] {
  const rows: React.ReactNode[] = [];
  for (let i = 0; i < topList.length / 2; i += 1) {
    rows.push(hotRenderRow(i * 2));
  }
  return rows;
}

function HotSearch() {
  return (
    <>
      <SubtitleList>
        <div className="title">인기검색어</div>
      </SubtitleList>
      <HotSearchList>{hotRenderGrid()}</HotSearchList>
    </>
  );
}

const MovieRank = styled.div`
  display: flex;
  width: 148px;
  padding: 12px 20px;
  align-items: center;
  gap: 12px;

  .rank {
    color: #7e7e87;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.014px;
  }

  .name {
    color: #c3c3c6;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.014px;
  }
`;

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

const HotSearchList = styled.div`
  display: flex;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;

export default HotSearch;
