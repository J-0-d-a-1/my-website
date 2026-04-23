import { useTranslations } from "next-intl";
import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import Image from "next/image";
import IconDark from "../../public/icon-dark.svg";

export default function Navbar() {
  const t = useTranslations("nav");

  const navLinks = [
    { key: "about", href: "#about" },
    { key: "projects", href: "#projects" },
    { key: "skills", href: "#skills" },
    { key: "contact", href: "#contact" },
  ] as const;

  return (
    <nav className="flex justify-between items-center px-10 py-6 border-b border-white/[0.08">
      <Image src={IconDark} alt="Jo" width={40} height={40} />
      <div className="flex items-center gap-8">
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="text-xs font-mono tracking-[0.12em] uppercase text-muted hover:text-[#f0ede6] transition-colors duration-200"
              >
                {t(link.key)}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
