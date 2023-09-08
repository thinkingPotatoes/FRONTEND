import { styled } from 'styled-components';
import { ReactComponent as BackArrowSvg } from '../../assets/image/icon/backArrow.svg';
import { useNavigate } from 'react-router-dom';

const TopSettingNav = ({ props }: { props: string }) => {
  const navigate = useNavigate();
  const handleLink = () => {
    if (props === '설정') {
      //일반 설정일때의 전 화면 이동
      navigate('/');
    } else {
      navigate('/setting');
    }
  };
  return (
    <TopNav>
      <SvgWrapper onClick={handleLink}>
        <BackArrowSvg />
      </SvgWrapper>
      <div className="title">{props}</div>
    </TopNav>
  );
};

const TopNav = styled.div`
  display: flex;
  height: 44px;
  padding-right: 0px;
  align-items: center;
  // gap: 134px;
  flex-shrink: 0;
  .title {
    width: 100%;
    display: flex;
    padding-right: 45px;
    justify-content: center;
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
