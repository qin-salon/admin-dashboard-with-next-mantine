import type { CustomNextPage } from "next";
import { DashboardLayout } from "src/layout";

const Notification: CustomNextPage = () => {
  return <div>Notification</div>;
};

Notification.getLayout = DashboardLayout;

export default Notification;
