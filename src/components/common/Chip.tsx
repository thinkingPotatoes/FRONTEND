import { styled } from 'styled-components';

export type ChipProps = {
  text: string;
  deletable?: boolean;
};

function Chip({ props }: { props: ChipProps }) {
  return <ChipWrapper>{props.text}</ChipWrapper>;
}

const ChipWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  padding: 4px 8px;

  border-radius: 100px;
  background: var(--dark-grey-200, #3c3c47);

  color: var(--dark-grey-700, #c3c3c6);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.24px;
`;

export default Chip;
