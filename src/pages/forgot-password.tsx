import {
  Anchor,
  Box,
  Button,
  Center,
  createStyles,
  Group,
  Paper,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import type { CustomNextPage } from "next";
import Link from "next/link";
import { AuthLayout } from "src/layout";
import { getPath } from "src/lib/const";
import { ArrowLeft } from "tabler-icons-react";

const useStyles = createStyles((theme) => {
  return {
    title: {
      fontSize: 26,
      fontWeight: 900,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
    controls: {
      [theme.fn.smallerThan("xs")]: {
        flexDirection: "column-reverse",
      },
    },
    control: {
      [theme.fn.smallerThan("xs")]: {
        width: "100%",
        textAlign: "center",
      },
    },
  };
});

const ForgotPassword: CustomNextPage = () => {
  const { classes } = useStyles();
  const handleClick = () => {
    alert("clicked");
  };

  return (
    <>
      <Title className={classes.title} align="center">
        パスワードリセット
      </Title>
      <Text color="dimmed" size="sm" align="center">
        リセットするためにメールアドレスをご入力ください
      </Text>

      <Paper withBorder shadow="md" p={30} radius="md" mt="xl">
        <TextInput
          label="メールアドレス"
          placeholder="test@example.com"
          required
        />
        <Group position="apart" mt="lg" className={classes.controls}>
          <Link href={getPath("SIGN_IN")} passHref>
            <Anchor<"a"> color="dimmed" size="sm" className={classes.control}>
              <Center inline>
                <ArrowLeft size={12} />
                <Box ml={5}>ログインページに戻る</Box>
              </Center>
            </Anchor>
          </Link>
          <Button className={classes.control} onClick={handleClick}>
            リセットする
          </Button>
        </Group>
      </Paper>
    </>
  );
};

ForgotPassword.getLayout = AuthLayout;

export default ForgotPassword;
