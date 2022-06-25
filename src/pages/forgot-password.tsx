import type { CustomNextPage } from "next";
import { AuthLayout } from "src/layout";
import { ForgotPassword } from "src/pages-component/forgot-password";

const ForgotPasswordPage: CustomNextPage = (props) => {
  return <ForgotPassword {...props} />;
};

ForgotPasswordPage.getLayout = AuthLayout;

export default ForgotPasswordPage;
