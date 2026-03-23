export type SignupForm = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  // phoneNumber:string
};

export type LoginFormType = Pick<SignupForm, "email" | "password">;
