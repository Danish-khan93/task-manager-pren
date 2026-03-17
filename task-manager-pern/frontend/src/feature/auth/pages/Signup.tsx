import AuthForm from "../authComponent/AuthForm";
import AuthLayout from "../../../layout/authLayout/AuthLayout";

const Signup = () => {
  const params = "signup"
  return (
    <AuthLayout>
      <AuthForm type={params} />
    </AuthLayout>
  );
};

export default Signup;
