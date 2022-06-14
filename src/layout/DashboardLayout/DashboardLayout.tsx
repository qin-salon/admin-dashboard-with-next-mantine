import type { CustomLayout } from "next";
import { AppShell } from "@mantine/core";

import { SideNav } from "./SideNav";
import { LayoutErrorBoundary } from "../LayoutErrorBoundary";

export const DashboardLayout: CustomLayout = (page) => {
  return (
    <AppShell
      padding="md"
      navbar={<SideNav />}
      styles={(theme) => ({
        body: { minHeight: "100vh" },
        main: { backgroundColor: theme.colors.gray[0] },
      })}
    >
      <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
    </AppShell>
  );
};
