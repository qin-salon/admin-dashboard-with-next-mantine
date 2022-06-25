import { MantineProvider } from "@mantine/core";
import type { FC, ReactNode } from "react";

export const AppMantineProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {children}
    </MantineProvider>
  );
};
