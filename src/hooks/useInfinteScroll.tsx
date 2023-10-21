import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from '../api/apiController';

const useInfinteScroll = <T,>(path: string, keyword: string) => {
  type List = {
    totalCnt: number;
    curPage: number;
    list: T[];
  };

  const { ref, inView } = useInView();

  const [list, setList] = useState<T[]>([]);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('likeCnt');
  const [totalCount, setTotalCount] = useState(-1);
  const [loading, setLoading] = useState(true);

  const params = {
    page,
    size: 10,
    sort: `${sort},desc`,
  };

  const commonOptions = {
    url: path,
    params,
  };

  const getOptions = {
    ...commonOptions,
    method: 'get',
  };

  const postOptions = {
    ...commonOptions,
    method: 'post',
    data: { keyword },
  };

  const options = keyword.length > 0 ? postOptions : getOptions;

  const readMoreList = () => {
    if (loading) return;
    if (totalCount === list.length) return;

    setPage(page + 1);
  };

  const renewList = (data: List) => {
    if (!data || data.curPage === 0) setList(data.list);
    else setList([...list, ...data.list]);
    setTotalCount(data.totalCnt);
    setLoading(false);
  };

  useEffect(() => {
    setPage(0);
    setList([]);
  }, [sort, keyword]);

  useEffect(() => {
    if (totalCount === list.length && keyword.length === 0) return;
    setLoading(true);

    axios.request(options).then((data) => {
      if (data.data.data === null) return;
      renewList(data.data.data);
    });
  }, [page, sort, keyword]);

  useEffect(() => {
    if (!inView) return;

    readMoreList();
  }, [inView]);

  return { sort, setSort, list, ref, totalCount };
};

export default useInfinteScroll;
