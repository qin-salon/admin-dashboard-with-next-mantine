import { Box, Paper, Title } from "@mantine/core";
import type { FC, ReactNode } from "react";

type PageContentProps = {
  children: ReactNode;
  title: string;
  className?: string;
  outerTitle?: boolean;
};

/** @package */
export const PageContent: FC<PageContentProps> = ({
  children,
  className,
  outerTitle,
  title,
}) => {
  return (
    <Box className={className}>
      {outerTitle ? (
        <Title order={2} mb="sm">
          {title}
        </Title>
      ) : null}
      <Paper shadow="xs" p="md">
        {outerTitle ? null : (
          <Title order={2} mb="sm">
            {title}
          </Title>
        )}
        {children}
      </Paper>
    </Box>
  );
};
