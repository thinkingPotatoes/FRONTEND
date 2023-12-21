import TopSettingNav from '../../components/setting/TopSettingNav';
import { styled } from 'styled-components';
import { ReactComponent as NextArrowSvg } from '../../assets/image/icon/frontArrow.svg';

function OpensourceInfo() {
  return (
    <SettingPage>
      <TopSettingNav props="오픈소스 라이선스" />
      <SettingSection>
        <SectionBody>
          <div className="title">오픈소스1</div>
          <SvgWrapper>
            <div className="icon">
              <NextArrowSvg />
            </div>
          </SvgWrapper>
        </SectionBody>
        <SectionBody>
          <div className="title">오픈소스2</div>
          <SvgWrapper>
            <div className="icon">
              <NextArrowSvg />
            </div>
          </SvgWrapper>
        </SectionBody>
        <SectionBody>
          <div className="title">오픈소스3</div>
          <SvgWrapper>
            <div className="icon">
              <NextArrowSvg />
            </div>
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

const SvgWrapper = styled.div`
  display: flex;
  padding: 0px 12px;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
  align-self: stretch;

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

export default OpensourceInfo;
