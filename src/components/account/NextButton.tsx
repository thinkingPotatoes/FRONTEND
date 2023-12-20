import styled from 'styled-components';

interface Props {
  disabled: boolean;
}

const NextButton = styled.button<Props>`
  position: fixed;
  left: 0px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  color: ${({ disabled }: Props) => (disabled ? 'var(--disabled)' : '#ffffff')};
  height: 52px;
  width: 100%;
  background-color: ${({ disabled }: Props) =>
    disabled ? 'var(--background-bright)' : 'var(--main)'};
  margin-top: auto;
`;

export default NextButton;
