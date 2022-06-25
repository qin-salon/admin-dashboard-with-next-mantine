import type { CustomNextPage } from "next";
import { Settings } from "src/pages-component/settings";
import { DashboardLayout } from "src/pages-layout";

const SettingsPage: CustomNextPage = (props) => {
  return <Settings {...props} />;
};

SettingsPage.getLayout = DashboardLayout;

export default SettingsPage;
