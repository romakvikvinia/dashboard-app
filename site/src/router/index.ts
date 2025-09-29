import { createBrowserRouter } from "react-router";
import Layout from "../modules/layout/Layout";
import { protectedLoader } from "../common/loaders/protectedLoader";

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
    loader: protectedLoader,
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
