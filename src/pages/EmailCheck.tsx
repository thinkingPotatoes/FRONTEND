import { styled } from 'styled-components';
import { ReactComponent as BackArrow } from '../assets/image/icon/backArrow.svg';
import EmailLottieData from '../assets/lottie/mail_violet.json';
import LoadingLottieData from '../assets/lottie/loading_transp.json';
import Lottie from 'react-lottie';
import { useState } from 'react';

function EmailCheck() {
  const [playLoading, setPlayLoading] = useState(false);
  const emailOptions = {
    loop: false,
    autoplay: true,
    animationData: EmailLottieData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const loadingOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingLottieData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <Container>
      <Header>
        <BackButton>
          <BackArrow />
        </BackButton>
      </Header>
      <Head1>메일을 확인해주세요</Head1>
      <Body2>입력한 이메일의 메일함에서 인증 메일을 확인해주세요.</Body2>
      <LottieContainer>
        {!playLoading && (
          <Lottie
            options={emailOptions}
            height={256}
            width={256}
            eventListeners={[
              {
                eventName: 'complete',
                callback: () => setPlayLoading(true),
              },
            ]}
          />
        )}
        {playLoading && <Lottie options={loadingOptions} height={256} width={256} />}
      </LottieContainer>
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

const Body2 = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;
  color: var(--disabled);
  font-family: 'Pretendard';
`;

const LottieContainer = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export default EmailCheck;
