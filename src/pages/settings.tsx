import type { CustomNextPage } from "next";
import { DashboardLayout } from "src/layout";
import { Settings } from "src/pages-component/settings";

const SettingsPage: CustomNextPage = (props) => {
  return <Settings {...props} />;
};

SettingsPage.getLayout = DashboardLayout;

export default SettingsPage;
