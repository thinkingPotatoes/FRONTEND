import { styled } from 'styled-components';
import { ReactComponent as NextArrowSvg } from '../../assets/image/icon/frontArrow.svg';
import { useNavigate } from 'react-router-dom';

const ProfileInfoModif = () => {
  const navigate = useNavigate();
  const linkToMyInfo = () => {
    navigate('/setting/myinfo');
  };
  return (
    <ProfileInfo onClick={linkToMyInfo}>
      <Info>
        <div className="nickname">닉네임님</div>
        <div className="modifBtn">내 정보 수정하기</div>
      </Info>
      <SvgWrapper>
        <NextArrowSvg />
      </SvgWrapper>
    </ProfileInfo>
  );
};
const ProfileInfo = styled.div`
  display: flex;
  margin-top: 20px;
  height: 52px;
  padding: 4px 8px 4px 24px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;
const Info = styled.div`
  width: 100%;

  .nickname {
    color: var(--text-default);
    font-size: 14px;
    font-weight: 500;
    line-height: 130%; /* 18.2px */
    letter-spacing: -0.014px;
    align-self: stretch;
  }

  .modifBtn {
    color: var(--disabled);
    font-size: 12px;
    font-weight: 300;
    align-self: stretch;
    letter-spacing: -0.24px;
  }
`;
const SvgWrapper = styled.div`
  display: flex;
  padding: 0px 12px;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
  align-self: stretch;
`;

export default ProfileInfoModif;
