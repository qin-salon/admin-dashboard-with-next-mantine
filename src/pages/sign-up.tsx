import type { CustomNextPage } from "next";
import { AuthLayout } from "src/layout";
import { SignUp } from "src/pages-component/sign-up";

const SignUpPage: CustomNextPage = (props) => {
  return <SignUp {...props} />;
};

SignUpPage.getLayout = AuthLayout;

export default SignUpPage;
