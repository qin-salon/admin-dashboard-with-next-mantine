import type { CustomNextPage } from "next";
import { ForgotPassword } from "src/pages-component/forgot-password";
import { AuthLayout } from "src/pages-layout";

const ForgotPasswordPage: CustomNextPage = (props) => {
  return <ForgotPassword {...props} />;
};

ForgotPasswordPage.getLayout = AuthLayout;

export default ForgotPasswordPage;
