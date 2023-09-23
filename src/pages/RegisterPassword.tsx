import { useState } from 'react';

import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAccountDispatch, useAccountState } from '../context/AccountContext.tsx';
import axios from '../api/apiController.tsx';
import Input from '../components/account/Input.tsx';
import NextButton from '../components/account/NextButton.tsx';
import HeaderWithBack from '../components/common/HeaderWithBack.tsx';

function RegisterPasswordInputPage() {
  const [message, setMessage] = useState<string>('');
  const { email, password, isPasswordValid } = useAccountState();
  const dispatch = useAccountDispatch();

  const navigate = useNavigate();

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
    const { isValid, message } = validatePassword(newPassword);
    dispatch({ type: 'SET_PASSWORD', password: newPassword, isPasswordValid: isValid });
    setMessage(message);
  };

  const onClickNext = async () => {
    const { status } = await axios.post('/users/signup', { userId: email, password });

    if (status === 200) {
      navigate('/register/check');
    }
  };

  return (
    <>
      <HeaderWithBack />
      <Head1>비밀번호를 입력해주세요.</Head1>
      <Input type="password" onChange={onInputPassword} />
      {isPasswordValid && (
        <Body2 color="var(--disabled)">영문, 숫자, 특수문자를 포함해 8자 이상</Body2>
      )}
      {!isPasswordValid && <Body2 color="#D24545">{message}</Body2>}

      <NextButton onClick={onClickNext} disabled={!!!password || !isPasswordValid}>
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

export default RegisterPasswordInputPage;
