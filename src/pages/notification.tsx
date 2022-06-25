import type { CustomNextPage } from "next";
import { DashboardLayout } from "src/layout";
import { Notification } from "src/pages-component/notification";

const NotificationPage: CustomNextPage = (props) => {
  return <Notification {...props} />;
};

NotificationPage.getLayout = DashboardLayout;

export default NotificationPage;
