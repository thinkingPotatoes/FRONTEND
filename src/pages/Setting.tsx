import React from 'react';
import TopSettingNav from '../components/setting/TopSettingNav';
import ProfileInfoModif from '../components/setting/ProfileInfoModif';
import { styled } from 'styled-components';

function Setting() {
  return (
    <SettingPage>
      <TopSettingNav />
      <ProfileInfoModif />
    </SettingPage>
  );
}

const SettingPage = styled.div`
  margin: 0 -20px;
`;

export default Setting;
