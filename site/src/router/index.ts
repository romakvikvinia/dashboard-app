import { createBrowserRouter } from "react-router";
import Layout from "../modules/layout/Layout";

export const routes = createBrowserRouter([
  {
    path: "/auth",
    children: [
      {
        path: "signin",
        index: true,
        lazy: {
          Component: async () =>
            (await import("../modules/auth/SignIn")).default,
        },
      },
    ],
  },
  {
    Component: Layout,
    children: [
      {
        index: true,
        lazy: {
          Component: async () => (await import("../modules/home/Home")).default,
        },
      },
    ],
  },
]);
