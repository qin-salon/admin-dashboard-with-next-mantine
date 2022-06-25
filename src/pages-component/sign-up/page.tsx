import {
  Anchor,
  Button,
  Paper,
  PasswordInput,
  Space,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import Link from "next/link";
import type { FC } from "react";
import { getPath } from "src/lib/const";

/** @package */
export const SignUp: FC = () => {
  const signUp = () => {
    alert("メールを送信しました");
  };

  return (
    <div>
      <Title
        align="center"
        sx={(theme) => {
          return {
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          };
        }}
      >
        新規登録
      </Title>
      <Text color="dimmed" size="sm" align="center" mt={5}>
        アカウントを既にお持ちですか？{" "}
        <Link href={getPath("SIGN_IN")} passHref>
          <Anchor<"a"> size="sm">ログイン</Anchor>
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
        <Space h="md" />
        <Button fullWidth mt="xl" onClick={signUp}>
          新規登録
        </Button>
      </Paper>
    </div>
  );
};
