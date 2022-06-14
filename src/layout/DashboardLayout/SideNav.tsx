import { FC, ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useBooleanToggle } from "@mantine/hooks";
import {
  createStyles,
  Navbar,
  Group,
  UnstyledButton,
  Tooltip,
  TooltipProps,
} from "@mantine/core";
import {
  Home,
  Settings,
  ArrowLeft,
  ArrowRight,
  Logout,
  DeviceAnalytics,
} from "tabler-icons-react";
import { getPath } from "src/lib/const";
import { ActiveLink } from "src/lib/next";

const useStyles = createStyles((theme, _params, getRef) => {
  const icon: string = getRef("icon");

  return {
    header: {
      paddingBottom: theme.spacing.sm,
      marginBottom: theme.spacing.lg,
      borderBottom: `1px solid ${theme.colors.gray[2]}`,
    },

    footer: {
      paddingTop: theme.spacing.sm,
      marginTop: theme.spacing.lg,
      borderTop: `1px solid ${theme.colors.gray[2]}`,
    },

    logo: {
      ...theme.fn.focusStyles(),
      width: "100%",
      display: "flex",
      alignItems: "center",
      columnGap: theme.spacing.sm,
      textDecoration: "none",
      fontSize: theme.fontSizes.sm,
      color: theme.colors.gray[7],
      padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.sm,
      fontWeight: 700,
    },

    link: {
      ...theme.fn.focusStyles(),
      width: "100%",
      display: "flex",
      alignItems: "center",
      columnGap: theme.spacing.sm,
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
  const [isCollapsed, toggleIsCollapsed] = useBooleanToggle(false);

  return (
    <Navbar
      p="md"
      sx={{
        position: "sticky",
        top: 0,
        width: isCollapsed ? 81 : 300,
        transition: isCollapsed ? "width 0.1s linear" : undefined,
      }}
    >
      <Navbar.Section grow>
        <Group className={classes.header} position="apart">
          <Link href={getPath("INDEX")}>
            <a className={classes.logo}>
              <DeviceAnalytics />
              {isCollapsed ? null : "HR AD Reporter"}
            </a>
          </Link>
        </Group>
        {ITEMS.map(({ label, href, Icon }) => (
          <CustomTooltip key={label} label={label} disabled={!isCollapsed}>
            <ActiveLink href={href} passHref>
              {(isActive) => {
                return (
                  <a
                    className={cx(classes.link, {
                      [classes.linkActive]: isActive,
                    })}
                  >
                    <Icon className={classes.linkIcon} />
                    {isCollapsed ? null : <span>{label}</span>}
                  </a>
                );
              }}
            </ActiveLink>
          </CustomTooltip>
        ))}
      </Navbar.Section>

      <Navbar.Section className={classes.footer}>
        <UnstyledButton
          className={classes.link}
          onClick={() => toggleIsCollapsed()}
        >
          {isCollapsed ? (
            <ArrowRight className={classes.linkIcon} />
          ) : (
            <>
              <ArrowLeft className={classes.linkIcon} />
              <span>折りたたむ</span>
            </>
          )}
        </UnstyledButton>
        <CustomTooltip label="ログアウト" disabled={!isCollapsed}>
          <SignOutButton>{isCollapsed ? null : "ログアウト"}</SignOutButton>
        </CustomTooltip>
      </Navbar.Section>
    </Navbar>
  );
};

const CustomTooltip: FC<TooltipProps> = ({
  label,
  disabled,
  children,
  ...rest
}) => {
  return (
    <Tooltip
      label={label}
      disabled={disabled}
      position="right"
      withArrow
      sx={{ width: "100%" }}
      {...rest}
      transitionDuration={200}
      exitTransitionDuration={200}
    >
      {children}
    </Tooltip>
  );
};

const SignOutButton: FC<{ children?: ReactNode }> = ({ children }) => {
  const router = useRouter();
  const { classes } = useStyles();
  const signOut = () => {
    router.push(getPath("SIGN_IN"));
  };

  return (
    <UnstyledButton className={classes.link} onClick={signOut}>
      <Logout className={classes.linkIcon} />
      {children ? <span>{children}</span> : null}
    </UnstyledButton>
  );
};
