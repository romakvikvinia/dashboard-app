import i18n from "../../i18n";
import { useTranslation } from "react-i18next";

const SignIn = () => {
  const { t } = useTranslation();
  return (
    <div>
      {t("Auth.SignIn.Title")}

      <select
        defaultValue={"ka"}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="ka">ქართული</option>
      </select>
    </div>
  );
};

export default SignIn;
