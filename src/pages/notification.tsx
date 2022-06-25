import type { CustomNextPage } from "next";
import { Notification } from "src/pages-component/notification";
import { DashboardLayout } from "src/pages-layout";

const NotificationPage: CustomNextPage = (props) => {
  return <Notification {...props} />;
};

NotificationPage.getLayout = DashboardLayout;

export default NotificationPage;
