import { Button, Global } from "@mantine/core";
import type { FC, ReactNode } from "react";

export const GlobalStyleProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <Global
        styles={{
          "*": { wordBreak: "break-all" },
          'button, *[type="button"]': { transform: "none !important" },
        }}
      />
      {children}
    </>
  );
};
