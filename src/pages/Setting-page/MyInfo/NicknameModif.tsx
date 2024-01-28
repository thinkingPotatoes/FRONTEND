import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../../../api/apiController.tsx';
import Input from '../../../components/account/Input.tsx';
import Head1 from '../../../components/common/texts/Head1.ts';
import NextButton from '../../../components/account/NextButton.tsx';
import { Genre } from '../../../types/movie.ts';
import styled from 'styled-components';
import HeaderWithBackForModif from '../../../components/setting/HeaderWithBackForModif.tsx';

type MyInfoRequest = {
  nickname: string;
  title: string;
  genreList: Genre[];
};

function NicknameModif() {
  const [myInfo, setMyInfo] = useState<MyInfoRequest>({
    nickname: '',
    title: '',
    genreList: [],
  });
  const [initNickname, setInitNickname] = useState<string>('');
  const [nicknameInput, setNicknameInput] = useState<string>('');
  const [isInputValid, setIsInputValid] = useState<boolean>(false);
  const [isNicknameCheck, setNicknameCheck] = useState<boolean | null>(null);

  useEffect(() => {
    axios.get('/my-page').then((res) => {
      const data = res.data.data;
      setNicknameInput(data.nickname);
      setInitNickname(data.nickname);
      setMyInfo({
        nickname: data.nickname,
        title: data.title,
        genreList: data.genreList ? data.genreList : [],
      });
    });
  }, []);

  const navigate = useNavigate();

  const onClickNext = async () => {
    const data = await axios.put('/my-page', myInfo);
    if (data) {
      navigate('/setting/myinfo');
    }
  };

  const onInputNicknameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newNicknameInput = e.target.value;
    setNicknameInput(newNicknameInput);
    setMyInfo((prevMyInfo: MyInfoRequest) => ({
      ...prevMyInfo,
      nickname: newNicknameInput,
    }));

    setIsInputValid(newNicknameInput.length > 0 && newNicknameInput.length <= 15);
  };

  const onCheckNickname = () => {
    //Todo : nickname 중복검사 api 연결 + 중복검사로 valid check
    const check = true;
    setNicknameCheck(check);
  };

  return (
    <>
      <HeaderWithBackForModif />
      <Head1 color="var(--dark-grey-800)" marginBottom="17px">
        닉네임을 입력해주세요
      </Head1>
      <Input
        placeholder={nicknameInput}
        value={nicknameInput}
        onChange={onInputNicknameInput}
        marginBottom="12px"
      />
      <InputCheck isNicknameCheck={isNicknameCheck}>
        {isNicknameCheck !== null && (
          <DuplicateCheck isNicknameCheck={isNicknameCheck}>
            {isNicknameCheck ? <>사용 가능한 닉네임이에요</> : <>이미 존재하는 닉네임이에요</>}
          </DuplicateCheck>
        )}

        <InputCount>{nicknameInput.length} / 15</InputCount>
      </InputCheck>

      {isNicknameCheck ? (
        <NextButton onClick={onClickNext} disabled={false}>
          저장하기
        </NextButton>
      ) : (
        <NextButton
          onClick={onCheckNickname}
          disabled={!isInputValid || nicknameInput == initNickname}
        >
          중복 체크하기
        </NextButton>
      )}
    </>
  );
}

type Prop = {
  isNicknameCheck: boolean | null;
};

const DuplicateCheck = styled.div<Prop>`
  color: ${(props) => (props.isNicknameCheck ? 'var(--Blue, #357AFF);' : 'var(--Red, #f15757)')};
  text-align: center;

  /* Body2 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%; /* 18.2px */
  letter-spacing: -0.014px;
`;

const InputCheck = styled.div<Prop>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.isNicknameCheck == null ? 'flex-end' : 'space-between')};
  margin-left: 10px;
`;

const InputCount = styled.div`
  color: var(--dark-grey-600, #9e9ea4);
  text-align: right;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.014px;
`;

export default NicknameModif;
