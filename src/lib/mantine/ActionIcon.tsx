import type { ActionIconProps } from "@mantine/core";
import { cloneElement, forwardRef } from "react";
import { ActionIcon as MantineActionIcon } from "@mantine/core";

export const ActionIcon = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ActionIconProps<"button" | "a"> & { dent?: boolean }
>(({ sx, dent, ...props }, ref) => {
  return cloneElement(<MantineActionIcon />, {
    sx: {
      ...sx,
      "&:not(:disabled):active": dent ? undefined : { transform: "none" },
    },
    ref,
    ...props,
  });
});

ActionIcon.displayName = "ActionIcon";
