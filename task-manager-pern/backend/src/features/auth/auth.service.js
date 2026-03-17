import { hash } from "bcryptjs";

export const passHash = async (password) => {
  const hashing = await hash(password, 8);
  console.log(hashing);
  return hashing;
};
