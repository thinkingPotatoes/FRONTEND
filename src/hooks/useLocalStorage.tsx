import { useState, useEffect } from 'react';

type localStorageProps = {
  key: string;
  initialValue: string[];
};
// 로컬 스토리지를 사용하는 커스텀 훅
function useLocalStorage({ key, initialValue }: localStorageProps) {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;

  const [value, setValue] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;
