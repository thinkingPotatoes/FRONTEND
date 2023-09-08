import { styled } from 'styled-components';
import TopSettingNav from '../../components/setting/TopSettingNav';

function ServiceInfo() {
  return (
    <SettingPage>
      <TopSettingNav props="서비스 이용약관" />
      <SettingSection>
        <div className="title">서비스 이용약관</div>
        <div className="service-txt">뭐시기 불라불라</div>
        <div className="service-subtitle">제 1조 (목적)</div>
        <div className="service-txt">
          서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스
          이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스
          이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스
          이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스
          이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스
          이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관
        </div>
        <div className="service-subtitle">제 2조 (용어의 정의)</div>
        <div className="service-txt">
          서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스
          이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스
          이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스
          이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스
          이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스
          이용약관서비스 이용약관서비스 이용약관서비스 이용약관서비스 이용약관
        </div>
      </SettingSection>
    </SettingPage>
  );
}

const SettingPage = styled.div`
  margin: 0 -20px;
  font-family: Pretendard;
`;

const SettingSection = styled.div`
  margin: 20px;
  color: var(--dark-grey-700, #c3c3c6);
  line-height: 130%; /* 31.2px */

  .title {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.24px;
  }

  .service-txt {
    margin-top: 20px;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -0.014px;
  }

  .service-subtitle {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.09px;
  }
`;

export default ServiceInfo;
