export const validate = (email, password, fullname) => {
  const emailRegex = /^[\w.-]+@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const fullnameRegex =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;

  const checkEmail = emailRegex.test(email);
  const checkPassword = passwordRegex.test(password);
  const checkFullname = fullnameRegex.test(fullname);

  if (!checkEmail) {
    return "⚠️⚠️Email is not valid";
  }

  if (!checkPassword) {
    return "⚠️⚠️Password is not valid";
  }

  if (!checkFullname) {
    return "⚠️⚠️Fullname is not valid";
  }

  return null;
};
