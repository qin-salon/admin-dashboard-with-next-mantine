import { FC, ReactNode } from "react";
import { Box, Paper, Title } from "@mantine/core";

type PageContentProps = {
  children: ReactNode;
  title: string;
  className?: string;
  outerTitle?: boolean;
};

export const PageContent: FC<PageContentProps> = ({
  children,
  title,
  outerTitle,
  className,
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
