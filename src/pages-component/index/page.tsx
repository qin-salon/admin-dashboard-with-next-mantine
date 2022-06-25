import { Button, Stack } from "@mantine/core";
import { showNotification } from "@mantine/notifications";
import type { FC } from "react";
import { PageContainer } from "src/component/PageContainer";
import { PageContent } from "src/component/PageContent";

import { SampleTable } from "./SampleTable";

/** @package */
export const Index: FC = () => {
  return (
    <PageContainer title="ホーム" fluid>
      <Stack spacing="xl">
        <PageContent title="テーブル">
          <SampleTable />
        </PageContent>
        <PageContent title="通知">
          <Button
            onClick={() => {
              return showNotification({ message: "成功しました" });
            }}
          >
            通知を表示
          </Button>
        </PageContent>
      </Stack>
    </PageContainer>
  );
};
