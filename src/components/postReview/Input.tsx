import { SetStateAction } from 'react';
import { styled } from 'styled-components';

function Input({
  setValue,
  ...options
}: {
  setValue: React.Dispatch<SetStateAction<string>>;
} & React.HTMLProps<HTMLInputElement>) {
  return (
    <InputWrapper>
      <ContentInput {...options} onChange={(e) => setValue(e.target.value)} />
    </InputWrapper>
  );
}

const InputWrapper = styled.div`
  display: flex;
  gap: 10px;
  padding: 12px 16px;
  align-items: center;
  border-radius: 8px;
  background: var(--background-bright);
  width: 100%;

  input:focus {
    outline: none;
  }
`;

const ContentInput = styled.input`
  flex: auto;
  background: none;
  border: none;
  caret-color: var(--main);
  width: 100%;
  height: 32px;

  color: var(--dark-grey-700);
  font-family: Pretendard;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

export default Input;
