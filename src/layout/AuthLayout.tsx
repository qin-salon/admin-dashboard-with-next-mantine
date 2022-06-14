import type { CustomLayout } from "next";

import { LayoutErrorBoundary } from "./LayoutErrorBoundary";

export const AuthLayout: CustomLayout = (page) => {
  return (
    <div>
      <h1>AuthLayout</h1>
      <main>
        <LayoutErrorBoundary>{page}</LayoutErrorBoundary>
      </main>
    </div>
  );
};
