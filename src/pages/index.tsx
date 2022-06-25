import type { CustomNextPage } from "next";
import { Index } from "src/pages-component/index";
import { DashboardLayout } from "src/pages-layout";

const IndexPage: CustomNextPage = (props) => {
  return <Index {...props} />;
};

IndexPage.getLayout = DashboardLayout;

export default IndexPage;
