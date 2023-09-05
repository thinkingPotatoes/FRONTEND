import { styled } from 'styled-components';
import { ReactComponent as BackArrowSvg } from '../../assets/image/icon/backArrow.svg';

const TopSettingNav = () => {
  return (
    <TopNav>
      <SvgWrapper>
        <BackArrowSvg />
      </SvgWrapper>
      <div className="title">설정</div>
    </TopNav>
  );
};

const TopNav = styled.div`
  margin-left: -20px;
  display: flex;
  width: 375px;
  height: 44px;
  padding-right: 0px;
  align-items: center;
  gap: 134px;
  flex-shrink: 0;
  .title {
    font-size: 16px;
    color: var(--text-emphasize);
    font-weight: 600;
    letter-spacing: -0.048px;
  }
`;

const SvgWrapper = styled.div`
  display: flex;
  width: 40px;
  height: 44px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
`;
export default TopSettingNav;
