import type { Metadata } from "next";
import ContactCard from "@/components/ContactCard";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import { ClockIcon, InstagramIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { instagramHandle, phones, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "اتصل بنا",
  description: `تواصل مع حجابات البشائر عبر الهاتف أو واتساب أو إنستغرام. ساعات العمل ${siteConfig.workingHours}.`,
};

const buttonBase =
  "btn-shine inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-lg font-bold transition duration-300 hover:-translate-y-0.5 hover:shadow-lg";

export default function ContactPage() {
  const callPhone = phones.find((phone) => !phone.whatsapp);

  return (
    <>
      <PageBanner
        title="اتصل بنا"
        subtitle="يسعدنا تواصلك. اختر الطريقة الأسهل لك وسنردّ عليك في ساعات العمل."
      />

      <section className="mx-auto max-w-4xl px-6 py-16">
        {/* أزرار التواصل السريع */}
        <Reveal className="mb-10 flex flex-wrap items-center justify-center gap-4">
          {callPhone && (
            <a href={callPhone.href} className={`${buttonBase} bg-primary text-white hover:bg-primary-dark`}>
              <PhoneIcon className="h-5 w-5" />
              اتصل بنا
            </a>
          )}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonBase} bg-[#25D366] text-white hover:bg-[#1ebe5a]`}
          >
            <WhatsAppIcon className="h-5 w-5" />
            واتساب
          </a>
          {siteConfig.instagramUrl && (
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${buttonBase} border border-primary/30 text-primary hover:border-primary hover:bg-primary hover:text-white`}
            >
              <InstagramIcon className="h-5 w-5" />
              <span dir="ltr">{instagramHandle}</span>
            </a>
          )}
        </Reveal>

        <div className="grid grid-cols-[minmax(0,1fr)] gap-6 md:grid-cols-2">
          <ContactCard title="أرقام التواصل" Icon={PhoneIcon}>
            <ul className="space-y-3">
              {phones.map((phone) => (
                <li key={phone.href}>
                  <a
                    href={phone.href}
                    className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-xl border border-line bg-background px-4 py-3 transition-colors hover:border-secondary/50 hover:bg-secondary-soft"
                    {...(phone.whatsapp && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <span className="flex items-center gap-2 text-base text-foreground/75">
                      {phone.whatsapp && <WhatsAppIcon className="h-5 w-5 text-primary" />}
                      {phone.label}
                    </span>
                    <span dir="ltr" className="text-lg font-bold text-primary">
                      {phone.display}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </ContactCard>

          <ContactCard title="ساعات العمل" Icon={ClockIcon} delay={120}>
            <p className="text-xl font-bold text-foreground">{siteConfig.workingHours}</p>
            <p className="mt-2 text-base leading-7 text-foreground/70">
              يمكنك مراسلتنا على واتساب في أي وقت، وسنرد عليك في ساعات العمل.
            </p>
          </ContactCard>
        </div>
      </section>
    </>
  );
}
