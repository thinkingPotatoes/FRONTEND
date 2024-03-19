import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { ReactComponent as Home } from '../../assets/image/icon/home.svg';
import { ReactComponent as Pencil } from '../../assets/image/icon/pencil.svg';
import { ReactComponent as User } from '../../assets/image/icon/user.svg';

enum Tab {
  HOME,
  BLOG,
}

function Footer() {
  const [tab, setTab] = useState<Tab>(Tab.HOME);

  const navigate = useNavigate();
  const onClickHome = () => {
    setTab(Tab.HOME);
    navigate('/home');
  };

  const onClickBlog = () => {
    setTab(Tab.BLOG);
    navigate('/blog');
  };

  const activateTab = (curTab: Tab) => {
    return curTab === tab ? 'var(--icon-activated)' : 'var(--disabled)';
  };

  return (
    <FooterContainer>
      <FooterItem onClick={onClickHome}>
        <Home style={{ fill: activateTab(Tab.HOME) }} />
      </FooterItem>
      <FooterItem>
        <ReviewWriteButton onClick={() => navigate('/postreview')}>
          <Pencil />
        </ReviewWriteButton>
      </FooterItem>
      <FooterItem onClick={onClickBlog}>
        <User style={{ fill: activateTab(Tab.BLOG) }} />
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
