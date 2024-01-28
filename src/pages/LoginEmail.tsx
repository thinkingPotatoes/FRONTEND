import { useNavigate } from 'react-router-dom';
import { isValidateEmail } from '../utils/vaildation.ts';
import axios from '../api/apiController.tsx';
import { useAccountDispatch, useAccountState } from '../context/AccountContext.tsx';
import Input from '../components/account/Input.tsx';
import Head1 from '../components/common/texts/Head1.ts';
import NextButton from '../components/account/NextButton.tsx';
import HeaderWithBack from '../components/common/HeaderWithBack.tsx';
import Body3 from '../components/common/texts/Body3.ts';
import SettingButton from '../components/account/SettingButton.tsx';

type AccountStatus = 'WAITED' | 'INACTIVE' | 'ACTIVE' | 'WITHDRAWL';

type AccountResponse = {
  meesage: string;
  data: {
    check: AccountStatus;
  };
};

function LoginEamilInputPage() {
  const { email, isEmailValid } = useAccountState();
  const dispatch = useAccountDispatch();

  const navigate = useNavigate();

  const savedEmail = localStorage.getItem('loginEmail') ?? '';

  const onClickNext = async () => {
    const {
      data: {
        data: { check },
      },
    } = await axios.post<AccountResponse>('/users/check-user', {
      userId: email,
    });

    switch (check) {
      case 'WAITED':
        navigate('/register/password');
        break;
      case 'INACTIVE':
        break;
      case 'ACTIVE':
        navigate('/login/password');
        break;
      case 'WITHDRAWL':
        break;
    }
  };

  const onClickSavedEmail = () => {
    dispatch({ type: 'SET_EMAIL', email: savedEmail, isEmailValid: true });
  };

  const onInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    dispatch({ type: 'SET_EMAIL', email: newEmail, isEmailValid: isValidateEmail(newEmail) });
  };

  return (
    <>
      <HeaderWithBack />
      <Head1 color="var(--dark-grey-800)" marginBottom="17px">
        이메일을 입력해주세요
      </Head1>
      <Input
        placeholder="abc@naver.com"
        value={email}
        onChange={onInputEmail}
        marginBottom="17px"
      />
      {savedEmail && (
        <SettingButton onClick={onClickSavedEmail}>
          <Body3 color="var(--text-default)">{savedEmail}</Body3>
        </SettingButton>
      )}
      <NextButton onClick={onClickNext} disabled={!isEmailValid}>
        다음
      </NextButton>
    </>
  );
}

export default LoginEamilInputPage;
