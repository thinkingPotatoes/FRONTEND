export const isValidateEmail = (email: string) => {
  const emailRegex =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  if (!emailRegex.test(email)) {
    return false;
  }

  return true;
};
