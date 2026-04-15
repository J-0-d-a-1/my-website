import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer>
      <span>© {new Date().getFullYear()} Jumpei Oda</span>
      <span>{t("built")}</span>
    </footer>
  );
}
