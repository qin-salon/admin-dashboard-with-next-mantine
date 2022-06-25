import type { CustomNextPage } from "next";
import { DashboardLayout } from "src/layout";
import { Index } from "src/pages-component/index";

const IndexPage: CustomNextPage = (props) => {
  return <Index {...props} />;
};

IndexPage.getLayout = DashboardLayout;

export default IndexPage;
