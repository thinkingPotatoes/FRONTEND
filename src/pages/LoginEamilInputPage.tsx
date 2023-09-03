import { useRef } from 'react';
import { ReactComponent as BackArrow } from '../assets/image/icon/backArrow.svg';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function LoginEamilInputPage() {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const onClickNext = () => {
    const email = inputRef.current?.value || '';
    navigate('/login/password', { state: { email } });
  };

  return (
    <>
      <Header>
        <BackButton>
          <BackArrow />
        </BackButton>
      </Header>
      <Head1>이메일을 입력해주세요</Head1>
      <Input placeholder="abc@naver.com" ref={inputRef} />
      <NextButton onClick={onClickNext}>다음</NextButton>
    </>
  );
}

const Head1 = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.24px;
  color: #ffffff;
  font-family: 'Pretendard';
  margin-bottom: 17px;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 11.5px 0;
  height: 44px;
  margin-bottom: 24px;
`;

const BackButton = styled.button`
  position: absolute;
  left: 16px;
`;

const Input = styled.input`
  display: flex;
  border: none;
  width: 100%;
  border-radius: 8px;
  padding: 12px 16px;
  background-color: var(--background-bright);
  height: 56px;
  color: var(--text-default);

  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    line-height: 130%;
    letter-spacing: -0.014px;
    color: var(--disabled);
  }
  &:focus {
    outline: none;
  }
`;

const NextButton = styled.button`
  position: fixed;
  left: 0px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  color: #ffffff;
  height: 52px;
  width: 100%;
  background-color: var(--main);
  margin-top: auto;
`;

export default LoginEamilInputPage;
