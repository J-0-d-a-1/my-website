import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="max-w-5xl mx-auto px-10 mt-16 pt-6 border-t border-white/[0.08] flex justify-between items-center pb-8">
      <span className="text-[0.72rem] font-mono text-muted tracking-[0.08em]">
        © {new Date().getFullYear()} Jumpei Oda
      </span>
      <span className="text-[0.72rem] font-mono text-muted tracking-[0.08em]">
        {t("built")}
      </span>
    </footer>
  );
}
