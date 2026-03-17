import AuthForm from "../authComponent/AuthForm";
import AuthLayout from "../../../layout/authLayout/AuthLayout";

const Login = () => {
  const params = "login";
  return (
    <AuthLayout>
      <AuthForm type={params} />
    </AuthLayout>
  );
};

export default Login;
