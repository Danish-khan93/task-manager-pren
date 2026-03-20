// this file conatin only field validation 
// this is middleware place in route before controller


export const checkingReqBody = (req, res, next) => {
  const { email, password } = req.body;
  const regexForPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const isValidPassword = regexForPass.test(password);

  const regexForEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const isValidEmail = regexForEmail.test(email);

  // if any field is empty res the error
  if (!email || !password) {
    return res.status(400).send({ message: "the field are requird" });
  } else if (!isValidPassword) {
    return res.status(400).send({ message: "the password is invaild" });
  } else if (!isValidEmail) {
    return res.status(400).send({ message: "the email is invaild" });
  }
//   if all clear call next
  next();
};
