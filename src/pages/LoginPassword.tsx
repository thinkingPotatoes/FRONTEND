import { useNavigate } from 'react-router-dom';
import { useAccountDispatch, useAccountState } from '../context/AccountContext.tsx';
import axios from '../api/apiController.tsx';
import Input from '../components/account/Input.tsx';
import NextButton from '../components/account/NextButton.tsx';
import HeaderWithBack from '../components/common/HeaderWithBack.tsx';
import Head1 from '../components/common/texts/Head1.ts';
import Body2 from '../components/common/texts/Body2.ts';
import Body3 from '../components/common/texts/Body3.ts';
import SettingButton from '../components/account/SettingButton.tsx';

function LoginPasswordInputPage() {
  const { email, password } = useAccountState();
  const dispatch = useAccountDispatch();
  const navigate = useNavigate();

  const onInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    dispatch({ type: 'SET_PASSWORD', password: newPassword });
  };

  const onClickNext = async () => {
    const {
      status,
      data: {
        data: { accessToken, refreshToken },
      },
    } = await axios.post('/users/login', { userId: email, password });

    if (status === 200) {
      navigate('/home');
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('loginEmail', email);
    }
  };

  const onClickChangePassword = () => {
    fetch('/users/email-send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: email,
      }),
    })
      .then((res) => res.json())
      .then(() => {
        navigate('/password/check');
      });
  };

  return (
    <>
      <HeaderWithBack />
      <Head1 color="var(--dark-grey-800)" marginBottom="17px">
        비밀번호를 입력해주세요.
      </Head1>
      <Input type="password" value={password} onChange={onInputPassword} marginBottom="11px" />
      <Body2 color="var(--disabled)" marginBottom="16px">
        영문, 숫자, 특수문자를 포함해 8자 이상
      </Body2>
      <SettingButton onClick={onClickChangePassword}>
        <Body3 color="var(--text-default)">비밀번호 재설정하기</Body3>
      </SettingButton>
      <NextButton onClick={onClickNext} disabled={!!!password}>
        다음
      </NextButton>
    </>
  );
}

export default LoginPasswordInputPage;
