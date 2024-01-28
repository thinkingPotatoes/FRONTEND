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

function FilogName() {
  const [myInfo, setMyInfo] = useState<MyInfoRequest>({
    nickname: '',
    title: '',
    genreList: [],
  });
  const [filogInput, setFilogInput] = useState<string>('');
  const [isInputValid, setIsInputValid] = useState<boolean>(false);

  useEffect(() => {
    axios.get('/my-page').then((res) => {
      const data = res.data.data;
      setFilogInput(data.title);
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

  const onInputFilogInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilogInput = e.target.value;
    setFilogInput(newFilogInput);
    setMyInfo((prevMyInfo: MyInfoRequest) => ({
      ...prevMyInfo,
      title: newFilogInput,
    }));
    setIsInputValid(newFilogInput.length > 0 && newFilogInput.length <= 24);
  };

  return (
    <>
      <HeaderWithBackForModif />
      <Head1 color="var(--dark-grey-800)" marginBottom="17px">
        Filog 이름을 입력해주세요
      </Head1>
      <Input
        placeholder={filogInput}
        value={filogInput}
        onChange={onInputFilogInput}
        marginBottom="12px"
      />
      <InputCount>{filogInput.length} / 24</InputCount>
      <NextButton onClick={onClickNext} disabled={!isInputValid}>
        다음
      </NextButton>
    </>
  );
}

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

export default FilogName;
