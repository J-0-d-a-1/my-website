"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale(next: string) {
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/"));
  }

  return (
    <div className="flex items-center gap-1">
      {routing.locales.map((l) => (
        <button
          key={l}
          onClick={() => switchLocale(l)}
          className={`text-[0.7rem] font-mono tracking-[0.1em] uppercase px-2 py-1 rounded-sm transition-colors ${locale === l ? "text-accent-gold border border-accent-gold/40" : "text-muted hover:text-[#f0ede6] border border-transparent"}`}
        >
          {l === "en" ? "EN" : "JP"}
        </button>
      ))}
    </div>
  );
}
