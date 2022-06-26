import type { CustomNextPage } from "next";
import { SignUp } from "src/pages-component/auth/sign-up";
import { AuthLayout } from "src/pages-layout";

const SignUpPage: CustomNextPage = (props) => {
  return <SignUp {...props} />;
};

SignUpPage.getLayout = AuthLayout;

export default SignUpPage;
