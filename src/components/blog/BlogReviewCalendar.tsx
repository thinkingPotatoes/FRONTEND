import moment, { Moment } from 'moment';
import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as PrevButton } from '../../assets/icon/angle-left-btn.svg';
import { ReactComponent as NextrButton } from '../../assets/icon/angle-right-btn.svg';
import Body3 from '../common/texts/Body3';
import Subtitle2 from '../common/texts/Subtitle2';

const dayOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function BlogReviewCalendar() {
  const [month, setMonth] = useState<Moment>(moment());
  const onClickNextMonth = () => {
    setMonth((prev) => prev.clone().month(prev.month() + 1));
  };
  const onClickPrevMonth = () => {
    setMonth((prev) => prev.clone().month(prev.month() - 1));
  };

  const generateMonthDate = () => {
    const startWeek = month.clone().startOf('month').week();
    const endWeek =
      month.clone().endOf('month').week() === 1 ? 53 : month.clone().endOf('month').week() + 1;
    const calendar = [];

    const curMonth = month.format('M');

    for (let week = startWeek; week <= endWeek; week++) {
      calendar.push(
        <Row key={week}>
          {Array(7)
            .fill(0)
            .map((n: number, i: number) => {
              const date = month
                .clone()
                .week(week)
                .startOf('week')
                .add(n + i, 'day');

              const onClickDate = () => {
                // onClickDateCallback?.(date);
              };

              const dateString = date.format('D');

              return (
                <Date onClick={onClickDate} isCurMonth={curMonth === date.format('M')}>
                  {dateString}
                </Date>
              );
            })}
        </Row>,
      );
    }

    return calendar;
  };
  return (
    <>
      <Controller>
        <PrevButton width={20} height={20} onClick={onClickPrevMonth} />
        <TimeTitle> {`${month.year()}년 ${month.month() + 1}월`}</TimeTitle>
        <NextrButton width={20} height={20} onClick={onClickNextMonth} />
      </Controller>

      <Container>
        <Row>
          {dayOfWeek.map((day: string) => {
            return <Day>{day}</Day>;
          })}
        </Row>
        {generateMonthDate()}
      </Container>
    </>
  );
}

const Controller = styled.div`
  display: flex;
  width: 100%;
  padding: 12px;
  justify-content: space-between;
`;

const TimeTitle = styled(Subtitle2)`
  color: white;
`;

const Container = styled.div`
  margin: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background-color: var(--dark-bg-down);
  padding: 12px 8px;
  border-radius: 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 0.5rem;
`;

interface DateProps {
  isCurMonth: boolean;
}

const Date = styled.div<DateProps>`
  box-sizing: border-box;
  padding: 0.8rem 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ isCurMonth }) => (isCurMonth ? 'white' : 'var(--dark-grey-100)')};
`;

const Day = styled(Body3)`
  box-sizing: border-box;
  color: var(--icon-default);
  padding: 0.8rem 0.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default BlogReviewCalendar;
