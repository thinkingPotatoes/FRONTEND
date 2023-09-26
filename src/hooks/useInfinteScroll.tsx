import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import axios from '../api/apiController';

const useInfinteScroll = <T,>(path: string) => {
  const { ref, inView } = useInView();

  const [list, setList] = useState<T[]>([]);
  const [page, setPage] = useState(0);
  const [sort, setSort] = useState('likeCnt');
  const [totalCount, setTotalCount] = useState(-1);
  const [loading, setLoading] = useState(true);

  const readMoreList = () => {
    if (loading) return;
    if (totalCount === list.length) return;

    setPage(page + 1);
  };

  useEffect(() => {
    setPage(0);
    setList([]);
  }, [sort]);

  useEffect(() => {
    if (totalCount === list.length) return;
    setLoading(true);

    axios
      .get(path, {
        params: { page, size: 10, sort: `${sort},desc` },
      })
      .then((data) => {
        const responseList = data.data.data.list;
        if (data.data.data.curPage === 0) setList(responseList);
        else setList([...list, ...responseList]);
        setTotalCount(data.data.data.totalCnt);
        setLoading(false);
      });
  }, [page, sort]);

  useEffect(() => {
    if (!inView) return;

    readMoreList();
  }, [inView]);

  return { sort, setSort, list, ref };
};

export default useInfinteScroll;
