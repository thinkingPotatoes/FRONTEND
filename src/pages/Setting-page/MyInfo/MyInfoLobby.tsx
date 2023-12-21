import TopSettingNav from '../../../components/setting/TopSettingNav';
import { styled } from 'styled-components';
import { ReactComponent as NextArrowSvg } from '../../../assets/image/icon/frontArrow.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../../api/apiController';
import { FilogInfo, UserInfo } from '../../../types/user';

function MyInfo() {
  const navigate = useNavigate();
  const [myInfo, setMyInfo] = useState<UserInfo>();
  const [filogInfo, setFilogInfo] = useState<FilogInfo>();

  useEffect(() => {
    axios.get(`/my-page/user`).then((res) => {
      const mydata = res.data.data;
      setMyInfo(mydata);
    });
    axios.get(`/my-page/filog`).then((res) => {
      const filogData = res.data.data;
      setFilogInfo(filogData);
    });
  }, []);

  if (!myInfo || !filogInfo) {
    return <></>;
  }

  return (
    <SettingPage>
      <TopSettingNav props="내 정보" />
      <SettingSection>
        <SectionBody>
          <div className="title">
            {myInfo.platform === 'NONE' ? '이메일로 로그인' : 'SNS로 로그인'}
          </div>
          <SvgWrapper>{myInfo.platform === 'NONE' ? myInfo.userId : myInfo.platform}</SvgWrapper>
        </SectionBody>
        <SectionBody>
          <div className="title">Filog</div>
          <SvgWrapper onClick={() => navigate('filog')}>
            <div className="info-txt">{filogInfo.title}</div>
            <div className="icon">
              <NextArrowSvg />
            </div>
          </SvgWrapper>
        </SectionBody>
        <SectionBody>
          <div className="title">닉네임</div>
          <SvgWrapper onClick={() => navigate('nickname')}>
            <div className="info-txt">{myInfo.nickname}</div>
            <div className="icon">
              <NextArrowSvg />
            </div>
          </SvgWrapper>
        </SectionBody>
        <SectionBody>
          <div className="title">선호하는 장르</div>
          <SvgWrapper onClick={() => navigate('janre')}>
            <div className="info-txt">
              {filogInfo.genreList ? filogInfo.genreList.join(', ') : '없음'}
            </div>
            <div className="icon">
              <NextArrowSvg />
            </div>
          </SvgWrapper>
        </SectionBody>
        <SectionBody>
          <div className="title-delete">계정 삭제하기</div>
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

  .title-delete {
    color: var(--Red, #f15757);
  }

  .sub-text {
    color: var(--disabled);
    font-weight: 600;
  }
`;

const SettingSection = styled.div`
  margin-top: 20px;
  margin-left: 24px;
`;

const SvgWrapper = styled.div`
  display: flex;
  padding: 0px 12px;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
  align-self: stretch;
  font-weight: 600;
  color: var(--disabled);

  .info-txt {
    color: var(--icon-default);
  }

  .icon {
    width: 18px;
    height: 18px;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  svg path {
    fill: var(--icon-default);
  }
`;

export default MyInfo;
