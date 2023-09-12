import styled from 'styled-components';
import { useState } from 'react';

import { ReactComponent as DateSvg } from '../../assets/icon/date.svg';
import { ReactComponent as ClockSvg } from '../../assets/icon/clock.svg';
import { ReactComponent as LocationSvg } from '../../assets/icon/location.svg';

interface Props {
  date: string;
  location: string;
  seat: string;
}
const WatchInfo = ({ date, location, seat }: Props) => {
  const [isInfoVisible, setInfoVisible] = useState(false);

  const toggleInfo = () => {
    setInfoVisible(!isInfoVisible);
  };

  function formatDate(inputDate: string): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };

    const date: Date = new Date(inputDate);
    const formattedDate: string = date
      .toLocaleDateString('ko-KR', options)
      .replace('년', '년 ')
      .replace('월', '월 ')
      .replace('일', '일');

    return formattedDate;
  }

  return (
    <InfoBox onClick={toggleInfo}>
      <div className="date">
        <DateSvg /> <span>관람 일자</span> {formatDate(date)}
      </div>
      {!isInfoVisible && (
        <>
          <div className="location">
            <ClockSvg /> <span>관람 장소</span> {location}
          </div>
          <div className="seat">
            <LocationSvg /> <span>좌석</span>
            {seat}번
          </div>
        </>
      )}
    </InfoBox>
  );
};

const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 12px;
  margin-bottom: 12px;
  // align-items: center;
  gap: 8px;
  align-self: stretch;
  border-radius: 8px;
  background: var(--dark-bg-up, #1c1c25);
  color: var(--text-default);
  font-size: 14px;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 4px;
  }

  span {
    margin-right: 4px;
  }
`;
export default WatchInfo;
