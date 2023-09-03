import { styled, css } from 'styled-components';
import { ReactComponent as BackArrow } from '../assets/image/icon/backArrow.svg';
import ConfettiLottieData from '../assets/lottie/confetti_transp.json';
import Lottie from 'react-lottie';
import { useNavigate } from 'react-router-dom';

interface Body2Props {
  isCenter: boolean;
}

function RegisterSuccess() {
  const navigate = useNavigate();

  const confettiOptions = {
    loop: false,
    autoplay: true,
    animationData: ConfettiLottieData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const onClickNext = () => {
    navigate('/home');
  };

  return (
    <Container>
      <Header>
        <BackButton>
          <BackArrow />
        </BackButton>
      </Header>
      <Head1>가입이 완료되었어요</Head1>
      <Body2 isCenter={false}>즐거운 FILMO 기록을 시작해요🎉</Body2>
      <LottieContainer>
        <Lottie options={confettiOptions} height={256} width={256} />
      </LottieContainer>
      <Body2 isCenter={true}>앞으로 자동 로그인 할게요</Body2>
      <NextButton onClick={onClickNext}>추천 받고 시작하기</NextButton>
    </Container>
  );
}
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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

const Body2 = styled.div<Body2Props>`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;
  color: var(--disabled);
  font-family: 'Pretendard';
  margin-bottom: 14px;
  color: var(--text-default);

  ${({ isCenter }: Body2Props) =>
    isCenter
      ? css`
          display: flex;
          justify-content: center;
          align-items: center;
        `
      : ''};
`;

const LottieContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Pretendard';
  color: #ffffff;
  height: 52px;
  width: 100%;
  background-color: var(--main);
  margin-top: auto;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export default RegisterSuccess;
