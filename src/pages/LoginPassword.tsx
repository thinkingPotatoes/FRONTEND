import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAccountDispatch, useAccountState } from '../context/AccountContext.tsx';
import axios from '../api/apiController.tsx';
import Input from '../components/account/Input.tsx';
import NextButton from '../components/account/NextButton.tsx';
import HeaderWithBack from '../components/common/HeaderWithBack.tsx';
import Head1 from '../components/common/texts/Head1.ts';
import Body2 from '../components/common/texts/Body2.ts';

function LoginPasswordInputPage() {
  const { email, password } = useAccountState();
  const dispatch = useAccountDispatch();
  const navigate = useNavigate();

  const onInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    dispatch({ type: 'SET_PASSWORD', password: newPassword });
  };

  const onClickNext = async () => {
    const { status } = await axios.post('/users/login', { userId: email, password });

    if (status === 200) {
      navigate('/home');
    }
  };

  const onClickChangePassword = () => {
    fetch('http://localhost:8080/users/email-send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate('/password/check');
      });
  };

  return (
    <>
      <HeaderWithBack />
      <Head1>비밀번호를 입력해주세요.</Head1>
      <Input type="password" value={password} onChange={onInputPassword} />
      <Body2 color="var(--disabled)" marginBottom="16px">
        영문, 숫자, 특수문자를 포함해 8자 이상
      </Body2>
      <SettingButton onClick={onClickChangePassword}>
        <Body3>비밀번호 재설정하기</Body3>
      </SettingButton>
      <NextButton onClick={onClickNext} disabled={!!!password}>
        다음
      </NextButton>
    </>
  );
}

const SettingButton = styled.button`
  border-radius: 8px;
  background-color: var(--background-bright);
  height: 32px;
  width: 121px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body3 = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 15.6px */
  font-family: 'Pretendard';
  color: var(--text-default);
`;

export default LoginPasswordInputPage;
