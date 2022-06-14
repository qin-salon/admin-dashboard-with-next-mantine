import type { CustomNextPage } from "next";
import Link from "next/link";
import { AuthLayout } from "src/layout";
import { getPath } from "src/lib/const";
import { Button } from "src/lib/mantine";

const SignIn: CustomNextPage = () => {
  return (
    <div>
      <Link href={getPath("INDEX")} passHref>
        <Button component="a">Sign in!</Button>
      </Link>
    </div>
  );
};

SignIn.getLayout = AuthLayout;

export default SignIn;
