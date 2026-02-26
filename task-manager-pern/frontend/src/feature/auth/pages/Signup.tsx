import AuthForm from "../authComponent/AuthForm";
import AuthLayout from "../authComponent/AuthLayout";

const Signup = () => {
  const params = "signup"
  return (
    <AuthLayout>
      <AuthForm type={params} />
    </AuthLayout>
  );
};

export default Signup;
