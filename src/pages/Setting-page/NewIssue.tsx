import { styled } from 'styled-components';
import TopSettingNav from '../../components/setting/TopSettingNav';

function NewIssue() {
  return (
    <SettingPage>
      <TopSettingNav props="Filmo 새소식" />
      <SettingSection>
        <div className="service-subtitle">Filmo 1.1.12 업데이트 소식이에요!</div>
        <div className="service-txt">
          무슨 서비르 뭐 새소식 대충 업데이트 소식 그런 것들 적어봅시다!! 무슨 서비르 뭐 새소식 대충
          업데이트 소식 그런 것들 적어봅시다!! 무슨 서비르 뭐 새소식 대충 업데이트 소식 그런 것들
          적어봅시다!!
        </div>
        <div className="date">2023.09.20</div>
        <div className="service-subtitle">Filmo가 출시되었어요!</div>
        <div className="service-txt">
          무슨 서비르 뭐 새소식 대충 업데이트 소식 그런 것들 적어봅시다!! 무슨 서비르 뭐 새소식 대충
          업데이트 소식 그런 것들 적어봅시다!! 무슨 서비르 뭐 새소식 대충 업데이트 소식 그런 것들
          적어봅시다!!
        </div>
        <div className="date">2023.09.10</div>
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

  .date {
    padding: 20px 0;
    color: var(--disabled);
    font-size: 12px;
    font-weight: 300;
    letter-spacing: -0.24px;
    border-bottom: 2px solid var(--background-bright);
  }
`;

export default NewIssue;
