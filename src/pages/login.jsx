import { useLocation } from "react-router-dom";
import LoginForm from "../components/Forms/Login/LoginForm";
import NeedHelpFAB from "../components/NeedHelpFAB";
import ResetPasswordForm from "../components/Forms/Login/ResetPasswordForm";
import TwoFactorAuth from "../components/Forms/Login/TwoFactorAuth";
function Login() {
  const location = useLocation();

  const getCurrentPage = () => {
    switch (location.pathname) {
      case "/login":
        return <LoginForm />;
      case "/reset-password":
        return <ResetPasswordForm />;
      case "/two-factor-auth":
        return <TwoFactorAuth />;
      default:
        return <LoginForm />;
    }
  };
  return (
    <>
      {getCurrentPage()}
      <NeedHelpFAB />
    </>
  );
}

export default Login;
