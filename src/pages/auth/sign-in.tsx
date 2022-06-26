import type { CustomNextPage } from "next";
import { SignIn } from "src/pages-component/auth/sign-in";
import { AuthLayout } from "src/pages-layout";

const SignInPage: CustomNextPage = (props) => {
  return <SignIn {...props} />;
};

SignInPage.getLayout = AuthLayout;

export default SignInPage;
