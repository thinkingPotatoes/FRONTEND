import { styled } from 'styled-components';
import { ReactComponent as Home } from '../../assets/image/icon/home.svg';
import { ReactComponent as User } from '../../assets/image/icon/user.svg';
import { ReactComponent as Pencil } from '../../assets/image/icon/pencil.svg';
import { useNavigate } from 'react-router';

function Footer() {
  const navigate = useNavigate();
  const onClickHome = () => {
    navigate('/');
  };

  const onClickBlog = () => {
    navigate('/blog');
  };

  return (
    <FooterContainer>
      <FooterItem onClick={onClickHome}>
        <Home />
      </FooterItem>
      <FooterItem>
        <ReviewWriteButton>
          <Pencil />
        </ReviewWriteButton>
      </FooterItem>
      <FooterItem onClick={onClickBlog}>
        <User />
      </FooterItem>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  position: fixed;
  display: flex;
  bottom: 0;
  height: 50px;
  background-color: var(--background-bright);
  width: 100%;
  left: 0px;
`;

const ReviewWriteButton = styled.button`
  position: absolute;
  bottom: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 64px;
  height: 64px;
  border-radius: 100%;
  background-color: white;
`;

const FooterItem = styled.div`
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
`;

export default Footer;
