import { styled } from 'styled-components';
import { ReactComponent as BackIcon } from '../../assets/image/icon/backArrow.svg';
import { ReactComponent as BookmarkIcon } from '../../assets/image/icon/bookmark.svg';
import { ReactComponent as ShareIcon } from '../../assets/image/icon/share.svg';

function TopBar() {
  return (
    <TopBarWrapper>
      <IconWrapper>
        <BackIcon />
      </IconWrapper>
      <RightIcons>
        <IconWrapper>
          <BookmarkIcon />
        </IconWrapper>
        <IconWrapper>
          <ShareIcon />
        </IconWrapper>
      </RightIcons>
    </TopBarWrapper>
  );
}

const TopBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  padding: 6px 8px 6px 0px;
  z-index: 1;
`;

const IconWrapper = styled.div`
  display: flex;
  width: 44px;
  height: 44px;
  justify-content: center;
  align-items: center;
`;

const RightIcons = styled.div`
  display: flex;
`;

export default TopBar;
