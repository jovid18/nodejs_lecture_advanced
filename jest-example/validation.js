export const isEmail = (value) => {
  // value가 이메일 형식에 맞으면 true, 형식에 맞지 않으면 false를 return 하도록 구현해보세요
  const email = value || '';
  const [localPart, domain, ...etc] = email.split('@');

  if (email.split('@').length !== 2) return false;
  if (email.includes(' ')) return false;
  if (email[0] === '-') return false;
  if (!/^[a-z0-9+_-]+$/gi.test(localPart)) {
    return false;
  }
  if (!/^[a-z0-9.-]+$/gi.test(domain)) {
    return false;
  }
  return true;
};
