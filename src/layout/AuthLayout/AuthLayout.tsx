import { Center, Container } from "@mantine/core";
import type { CustomLayout } from "next";

import { LayoutErrorBoundary } from "../LayoutErrorBoundary";

export const AuthLayout: CustomLayout = (page) => {
  return (
    <Center
      sx={(theme) => ({
        minHeight: "100vh",
        backgroundColor: theme.colors.gray[0],
      })}
    >
      <Container size="xs" sx={{ width: 480, paddingBottom: 16 }}>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </Container>
    </Center>
  );
};
