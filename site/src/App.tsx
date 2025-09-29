import { routes } from "./router";
import { RouterProvider } from "react-router";
import { withTranslation } from "react-i18next";
import "./assets/scss/style.scss";

function AppRoutes() {
  return <RouterProvider router={routes} />;
}

const TranslatedAppRoutes = withTranslation()(AppRoutes);

export default TranslatedAppRoutes;
