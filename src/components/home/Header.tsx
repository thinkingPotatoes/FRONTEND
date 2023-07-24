import { styled } from 'styled-components';
import { ReactComponent as Logo } from '../../assets/image/icon/logo.svg';
import { ReactComponent as Popcorn } from '../../assets/image/icon/popcorn.svg';
import { ReactComponent as Search } from '../../assets/image/icon/search.svg';

function Header() {
  return (
    <Container>
      <HeaderContainer>
        <HeaderLeftContainer>
          <Logo />
          <span>filmo</span>
        </HeaderLeftContainer>
        <HeaderRightContainer>
          <Popcorn />
        </HeaderRightContainer>
      </HeaderContainer>
      <SearchButton>
        <Search />
        <span>검색어를 입력해주세요.</span>
      </SearchButton>
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  top: 0;
`;
const HeaderContainer = styled.div`
  height: 56px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: 'Azonix', sans-serif;
  width: 100%;
  color: var(--text-default);
  font-size: 24px;
`;

const HeaderLeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const HeaderRightContainer = styled.button`
  display: flex;
  background-color: transparent;
  align-items: center;
`;

const SearchButton = styled.div`
  width: 100%;
  height: 38px;
  margin-top: 9px;
  display: flex;
  align-items: center;
  font-family: 'Pretendard';
  gap: 4px;
  background-color: var(--background-bright);
  border-radius: 8px;
  padding: 10px 16px;
  color: var(--disabled);
  font-size: 14px;
`;

export default Header;
