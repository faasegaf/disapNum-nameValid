function validateName(x) {
  if (/^[A-Za-z\s]+$/.test(x)) return true;
  else return false;
}
