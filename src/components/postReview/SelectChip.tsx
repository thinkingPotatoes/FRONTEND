import React from 'react';
import styled from 'styled-components';
import Body1 from '../common/texts/Body1';

function SelectChip({
  selected,
  text,
  ...options
}: { selected: boolean; text: string } & React.HTMLProps<HTMLDivElement>) {
  const bgColor = selected ? 'var(--main)' : 'none';
  const borderColor = selected ? 'var(--main)' : 'var(--dark-grey-500)';
  const color = selected ? 'var(--dark-grey-800)' : 'var(--dark-grey-500)';
  return (
    <Chip $bgColor={bgColor} $borderColor={borderColor} $color={color} {...options}>
      <Body1>{text}</Body1>
    </Chip>
  );
}

const Chip = styled.div<{ $bgColor: string; $borderColor: string; $color: string }>`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  border-radius: 100px;
  background: ${(props) => props.$bgColor};
  border: 1px solid ${(props) => props.$borderColor};
  color: ${(props) => props.$color};

  width: fit-content;

  > div {
    line-height: normal;
  }
`;

export default SelectChip;
