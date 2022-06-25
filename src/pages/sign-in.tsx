import type { CustomNextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthLayout } from "src/layout";
import { getPath } from "src/lib/const";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Group,
  Button,
} from "@mantine/core";

const SignIn: CustomNextPage = () => {
  const router = useRouter();
  const signIn = () => {
    router.push(getPath("INDEX"));
  };

  return (
    <>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        ログイン
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        アカウントをお持ちでないですか？{" "}
        <Link href={getPath("SIGN_UP")} passHref>
          <Anchor<"a"> size="sm">新規登録</Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="メールアドレス"
          placeholder="test@example.com"
          required
        />
        <PasswordInput
          label="パスワード"
          placeholder="Your password"
          required
          mt="md"
        />
        <Group position="apart" mt="md">
          <Checkbox label="ログイン状態を保持" />
          <Link href={getPath("FORGOT_PASSWORD")} passHref>
            <Anchor<"a"> size="sm">パスワードをお忘れですか？</Anchor>
          </Link>
        </Group>
        <Button fullWidth mt="xl" onClick={signIn}>
          ログイン
        </Button>
      </Paper>
    </>
  );
};

SignIn.getLayout = AuthLayout;

export default SignIn;
