const getDateStr = (date: Date | null, seperator?: string) => {
  if (!date) return;
  const year = String(date.getFullYear()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return [year, month, day].join(seperator || '-');
};

export default getDateStr;
