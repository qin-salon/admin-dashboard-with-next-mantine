import type { CustomNextPage } from "next";
import { AuthLayout } from "src/layout";
import { SignIn } from "src/pages-component/sign-in";

const SignInPage: CustomNextPage = (props) => {
  return <SignIn {...props} />;
};

SignInPage.getLayout = AuthLayout;

export default SignInPage;
