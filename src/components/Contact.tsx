import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("contact");

  return (
    <section id="contact">
      <div>
        <span>{t("section_label")}</span>
        <h2>{t("section_title")}</h2>
      </div>
      <div>
        <div>
          <p>{t("bio")}</p>
          <div>
            <span>{t("github")}</span>
            <a
              href="https://github.com/J-0-d-a-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/J-0-d-a-1
            </a>
          </div>
          <div>
            <span>{t("linedin")}</span>
            <a href="https://linkedin.com/in/jumpei-oda">
              linkedin.com/in/jumpei-oda
            </a>
          </div>
          <div>
            <span>{t("location")}</span>
            <span>{t("location_value")}</span>
          </div>
        </div>

        <form>
          <input type="text" placeholder={t("form_name")} />
          <input type="email" placeholder={t("form_email")} />
          <textarea placeholder={t("form_message")} rows={4}></textarea>
          <button type="submit">{t("form_submit")}</button>
        </form>
      </div>
    </section>
  );
}
