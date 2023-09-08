import TopSettingNav from '../../components/setting/TopSettingNav';
import { styled } from 'styled-components';
import { ReactComponent as NextArrowSvg } from '../../assets/image/icon/frontArrow.svg';

function MyInfo() {
  return (
    <SettingPage>
      <TopSettingNav props="내 정보" />
      <SettingSection>
        <SectionBody>
          {/* sns 로 로그인시 sns로 로그인으로 문구 변경 */}
          <div className="title">이메일로 로그인</div>
          <SvgWrapper>filmo@gmail.com</SvgWrapper>
        </SectionBody>
        <SectionBody>
          <div className="title">Filog</div>
          <SvgWrapper>
            <div className="info-txt">일이삼사오육칠팔구십일이삼사오육칠팔구십</div>
            <div className="icon">
              <NextArrowSvg />
            </div>
          </SvgWrapper>
        </SectionBody>
        <SectionBody>
          <div className="title">닉네임</div>
          <SvgWrapper>
            <div className="info-txt">Hyunmin</div>
            <div className="icon">
              <NextArrowSvg />
            </div>
          </SvgWrapper>
        </SectionBody>
        <SectionBody>
          <div className="title">선호하는 장르</div>
          <SvgWrapper>
            <div className="info-txt">드라마, 로맨스, 액션</div>
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
