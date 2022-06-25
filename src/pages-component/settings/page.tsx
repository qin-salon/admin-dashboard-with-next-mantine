import { Group, Stack } from "@mantine/core";
import type { FC } from "react";
import { PageContainer } from "src/component/PageContainer";
import { PageContent } from "src/component/PageContent";

/** @package */
export const Settings: FC = () => {
  return (
    <PageContainer
      title="設定"
      items={[
        { label: "ダミー", href: "#" },
        { label: "パンくず", href: "#" },
        { label: "リスト", href: "#" },
      ]}
    >
      <Stack spacing="xl">
        <PageContent outerTitle title="Foo!">
          Foo
        </PageContent>
        <Group grow>
          <PageContent title="Bar!">Bar</PageContent>
          <PageContent title="Baz!">Baz</PageContent>
        </Group>
      </Stack>
    </PageContainer>
  );
};
