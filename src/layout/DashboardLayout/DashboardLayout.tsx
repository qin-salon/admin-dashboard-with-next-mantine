import type { CustomLayout } from "next";
import { AppShell, Box } from "@mantine/core";

import { SideNav } from "./SideNav";
import { Header } from "./Header";
import { LayoutErrorBoundary } from "../LayoutErrorBoundary";

export const DashboardLayout: CustomLayout = (page) => {
  return (
    <AppShell
      padding="md"
      navbar={<SideNav />}
      styles={(theme) => ({
        body: { minHeight: "100vh" },
        main: { padding: 0, backgroundColor: theme.colors.gray[0] },
      })}
    >
      <Header />
      <Box p="md">
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Box>
    </AppShell>
  );
};
