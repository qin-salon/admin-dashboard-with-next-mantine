import type { ContainerProps } from "@mantine/core";
import { Anchor, Breadcrumbs, Container, Space, Title } from "@mantine/core";
import Link from "next/link";
import type { FC, ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  title: string;
  items?: { label: string; href: string }[];
} & Pick<ContainerProps, "fluid">;

/** @package */
export const PageContainer: FC<PageContainerProps> = ({
  children,
  fluid,
  items,
  title,
}) => {
  return (
    <Container px={0} fluid={fluid}>
      {items && items.length > 0 ? (
        <Breadcrumbs>
          {items.map((item) => {
            return (
              <Link key={item.label} href={item.href} passHref>
                <Anchor>{item.label}</Anchor>
              </Link>
            );
          })}
        </Breadcrumbs>
      ) : null}

      <Title order={1}>{title}</Title>

      <Space h="xl" />

      {children}
    </Container>
  );
};
