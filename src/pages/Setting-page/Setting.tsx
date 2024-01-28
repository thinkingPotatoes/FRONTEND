import TopSettingNav from '../../components/setting/TopSettingNav';
import ProfileInfoModif from '../../components/setting/ProfileInfoModif';
import { styled } from 'styled-components';
import { ReactComponent as NextArrowSvg } from '../../assets/image/icon/frontArrow.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../api/apiController';
import { UserInfo } from '../../types/user';

function Setting() {
  const navigate = useNavigate();
  const [myInfo, setMyInfo] = useState<UserInfo>();
  useEffect(() => {
    axios.get(`/my-page/user`).then((res) => {
      const mydata = res.data.data;
      setMyInfo(mydata);
    });
  }, []);

  if (!myInfo) {
    return <></>;
  }

  return (
    <SettingPage>
      <TopSettingNav props="설정" />
      <ProfileInfoModif nickname={myInfo.nickname} />

      <SettingSection>
        <SubTitle>계정</SubTitle>
        {myInfo.platform === 'NONE' && (
          <SectionBody
            onClick={() => {
              navigate('/password/check');
            }}
          >
            비밀번호 변경
          </SectionBody>
        )}
        <SectionBody
          onClick={() => {
            localStorage.removeItem('accessToken');
            navigate('/');
          }}
        >
          로그아웃
        </SectionBody>
      </SettingSection>
      <SettingSection>
        <SubTitle>약관</SubTitle>
        <SectionBody onClick={() => navigate('service-info')}>
          <div className="title">서비스 이용약관</div>
          <SvgWrapper>
            <NextArrowSvg />
          </SvgWrapper>
        </SectionBody>
        <SectionBody onClick={() => navigate('private-info')}>
          <div className="title">개인정보 처리방침</div>
          <SvgWrapper>
            <NextArrowSvg />
          </SvgWrapper>
        </SectionBody>
        <SectionBody>
          <div className="title">앱 버전</div>
          <SvgWrapper className="sub-text">1.0.0</SvgWrapper>
        </SectionBody>
        <SectionBody onClick={() => navigate('issue-info')}>
          <div className="title">Filmo 새소식</div>
          <SvgWrapper>
            <NextArrowSvg />
          </SvgWrapper>
        </SectionBody>
        <SectionBody onClick={() => navigate('opensource-info')}>
          <div className="title">오픈소스 라이선스 보기</div>
          <SvgWrapper>
            <NextArrowSvg />
          </SvgWrapper>
        </SectionBody>
      </SettingSection>
    </SettingPage>
  );
}

const SettingPage = styled.div`
  margin: 0 -20px;
  font-family: Pretendard;
`;

const SectionBody = styled.div`
  display: flex;
  height: 52px;
  padding: 4px 8px 4px 0px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  font-size: 14px;
  color: var(--text-default);
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;

  .title {
    width: 100%;
  }

  .sub-text {
    color: var(--disabled);
    font-weight: 600;
  }
`;

const SettingSection = styled.div`
  margin-top: 4px;
  margin-left: 24px;
  color: var(--text-emphasize);
`;

const SubTitle = styled.div`
  display: flex;
  height: 52px;
  color: var(--text-emphasize);
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;
const SvgWrapper = styled.div`
  display: flex;
  padding: 0px 12px;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
  align-self: stretch;
`;

export default Setting;
