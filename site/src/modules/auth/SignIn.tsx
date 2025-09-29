import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();
  return <div>{t("Auth.SignIn.Title")}</div>;
};

export default SignIn;
