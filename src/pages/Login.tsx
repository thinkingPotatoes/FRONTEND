import { styled } from 'styled-components';
import { ReactComponent as Logo } from '../assets/image/icon/logo.svg';
import { ReactComponent as KakaoIcon } from '../assets/image/icon/KakaoTalk_logo.svg';
import { ReactComponent as NaverIcon } from '../assets/image/icon/Naver_logo.svg';
import { ReactComponent as GoogleIcon } from '../assets/image/icon/Google_logo.svg';
import SocialLoginButton from '../components/account/SocialLoginButton';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const onClickEmail = () => {
    navigate('/login/email');
  };

  return (
    <>
      <LogoContainer>
        <Logo width={233} height={233} />
        <Title>FILMO</Title>
      </LogoContainer>
      <LoginButtonContainer>
        <SocialLoginButton backgroundColor="#FAE100" color="#371D1E">
          <KakaoIcon />
          카카오톡으로 시작하기
        </SocialLoginButton>
        <SocialLoginButton backgroundColor="#06BE34" color="#FFFFFF">
          <NaverIcon />
          네이버로 시작하기
        </SocialLoginButton>
        <SocialLoginButton backgroundColor="#FFFFFF" color="#4E5968">
          <GoogleIcon />
          구글로 시작하기
        </SocialLoginButton>
        <SocialLoginButton backgroundColor="#1C1C25" color="#E4E4E5" onClick={onClickEmail}>
          이메일로 시작하기
        </SocialLoginButton>
      </LoginButtonContainer>
    </>
  );
}

const LogoContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

const LoginButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Title = styled.div`
  font-family: 'Azonix', sans-serif;
  color: var(--text-emphasize);
  font-size: 24px;
  transform: translateY(-30px);
`;

export default Login;
