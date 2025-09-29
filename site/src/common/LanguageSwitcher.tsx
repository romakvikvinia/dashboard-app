import i18n from "../i18n";

const LanguageSwitcher = () => {
  return (
    <select
      defaultValue={"ka"}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      <option value="en">English</option>
      <option value="ka">ქართული</option>
    </select>
  );
};

export default LanguageSwitcher;
