import { createStyles, Navbar, Group, UnstyledButton } from "@mantine/core";
import { Home, Settings, ArrowLeft, Logout } from "tabler-icons-react";
import { getPath } from "src/lib/const";
import { ActiveLink } from "src/lib/next";
import { useRouter } from "next/router";
import { FC } from "react";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon: string = getRef("icon");

  return {
    header: {
      paddingBottom: theme.spacing.md,
      marginBottom: theme.spacing.md * 1.5,
      borderBottom: `1px solid ${theme.colors.gray[2]}`,
    },

    footer: {
      paddingTop: theme.spacing.md,
      marginTop: theme.spacing.md,
      borderTop: `1px solid ${theme.colors.gray[2]}`,
    },

    link: {
      ...theme.fn.focusStyles(),
      width: "100%",
      display: "flex",
      alignItems: "center",
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 500,

      "&:hover": {
        backgroundColor: theme.colors.gray[0],
        color: theme.black,

        [`& .${icon}`]: {
          color: theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color: theme.colors.gray[6],
      marginRight: theme.spacing.sm,
    },

    linkActive: {
      "&, &:hover": {
        backgroundColor: theme.colors[theme.primaryColor][0],
        color: theme.colors[theme.primaryColor][7],
        [`& .${icon}`]: {
          color: theme.colors[theme.primaryColor][7],
        },
      },
    },
  };
});

const ITEMS = [
  { href: getPath("INDEX"), label: "ホーム", Icon: Home },
  { href: getPath("SETTINGS"), label: "設定", Icon: Settings },
];

export const SideNav: FC = () => {
  const { classes, cx } = useStyles();

  return (
    <Navbar width={{ sm: 300 }} p="md" sx={{ position: "sticky", top: 0 }}>
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          Logo
        </Group>
        {ITEMS.map(({ label, href, Icon }) => (
          <ActiveLink key={label} href={href} passHref>
            {(isActive) => {
              return (
                <a
                  className={cx(classes.link, {
                    [classes.linkActive]: isActive,
                  })}
                >
                  <Icon className={classes.linkIcon} />
                  <span>{label}</span>
                </a>
              );
            }}
          </ActiveLink>
        ))}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UnstyledButton
          className={classes.link}
          onClick={() => {
            console.log("clicked!");
          }}
        >
          <ArrowLeft className={classes.linkIcon} />
          <span>折りたたむ</span>
        </UnstyledButton>
        <SignOutButton />
      </Navbar.Section>
    </Navbar>
  );
};

const SignOutButton: FC = () => {
  const router = useRouter();
  const { classes } = useStyles();
  const signOut = () => {
    router.push(getPath("SIGN_IN"));
  };

  return (
    <UnstyledButton className={classes.link} onClick={signOut}>
      <Logout className={classes.linkIcon} />
      <span>ログアウト</span>
    </UnstyledButton>
  );
};
