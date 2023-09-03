import { useState } from 'react';
import { ReactComponent as BackArrow } from '../assets/image/icon/backArrow.svg';

import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

type PasswordState = {
  password: string;
  isValid: boolean;
  message: string;
};

function RegisterPasswordInputPage() {
  const [passwordState, setPasswordState] = useState<PasswordState>({
    password: '',
    isValid: true,
    message: '',
  });

  const navigate = useNavigate();

  const {
    state: { email },
  } = useLocation();

  const validatePassword = (password: string) => {
    const englishRegex = /(?=.*[a-zA-Z])/;
    const numberRegex = /(?=.*[0-9])/;
    const specialCharRegex = /(?=.*[!@#$%^&*=-])/;

    if (password.length < 8) {
      return { isValid: false, message: '8자 이상 입력해주세요' };
    }

    if (!englishRegex.test(password)) {
      return { isValid: false, message: '영문을 포함해주세요' };
    }

    if (!numberRegex.test(password)) {
      return { isValid: false, message: '숫자를 포함해주세요' };
    }

    if (!specialCharRegex.test(password)) {
      return { isValid: false, message: '특수 문자를 포함해주세요' };
    }

    return { isValid: true, message: '' };
  };

  const onInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;

    setPasswordState({
      password: newPassword,
      ...validatePassword(newPassword),
    });
  };

  const onClickNext = () => {
    const { password } = passwordState;

    fetch('http://localhost:8080/users/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data', data);
        navigate('/register/check');
      });
  };
  return (
    <>
      <Header>
        <BackButton>
          <BackArrow />
        </BackButton>
      </Header>
      <Head1>비밀번호를 입력해주세요.</Head1>
      <Input type="password" onChange={onInputPassword} />
      {passwordState.isValid && (
        <Body2 color="var(--disabled)">영문, 숫자, 특수문자를 포함해 8자 이상</Body2>
      )}
      {!passwordState.isValid && <Body2 color="#D24545">{passwordState.message}</Body2>}

      <NextButton
        onClick={onClickNext}
        disabled={!!!passwordState.password || !passwordState.isValid}
      >
        다음
      </NextButton>
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
  margin-bottom: 11px;

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
interface Body2Props {
  color: string;
}
const Body2 = styled.div<Body2Props>`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;
  color: ${({ color }) => color};
  font-family: 'Pretendard';
`;

interface ButtonProps {
  disabled: boolean;
}

const NextButton = styled.button<ButtonProps>`
  position: fixed;
  left: 0px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  color: ${({ disabled }: ButtonProps) => (disabled ? 'var(--disabled)' : '#ffffff')};
  height: 52px;
  width: 100%;
  background-color: ${({ disabled }: ButtonProps) =>
    disabled ? 'var(--background-bright)' : 'var(--main)'};
  margin-top: auto;
`;
export default RegisterPasswordInputPage;
