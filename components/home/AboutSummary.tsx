import ButtonLink from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

// الكلمات الثلاث في شعار الشركة، مع معنى كل واحدة.
const values = [
  { word: "إبتكار", text: "تصاميم متجددة تواكب طلب السوق." },
  { word: "جودة", text: "أقمشة مختارة بعناية وتصنيع متقن." },
  { word: "تميّز", text: "تفاصيل تميّز بضاعة محلّك عن غيرها." },
];

export default function AboutSummary() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
      <div>
        <SectionHeading align="start" eyebrow="من نحن" title="صناعة دمشقية بروح عصرية" />
        <Reveal delay={100}>
          <p className="text-lg leading-9 text-foreground/75">
            {siteConfig.name} شركة سورية متخصصة في صناعة وتجارة الحجابات والإشاربات، يقع مقرّها في{" "}
            {siteConfig.address}. نجمع بين الأصالة والتصميم العصري لنقدّم لمحلّك بضاعة يثق بها
            زبائنك.
          </p>
          <ButtonLink href="/about" variant="outline" className="mt-8">
            اعرف المزيد عنا
          </ButtonLink>
        </Reveal>
      </div>

      <Reveal delay={200}>
        <div className="rounded-3xl bg-primary-dark p-2 shadow-xl shadow-primary/20">
          <ol className="rounded-[1.25rem] border border-secondary/40 px-6 py-4 sm:px-8">
            {values.map((value, i) => (
              <li
                key={value.word}
                className="flex items-center gap-5 border-b border-white/10 py-5 last:border-b-0"
              >
                <span className="font-display text-3xl font-bold text-secondary/70" dir="ltr">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold text-secondary-light">{value.word}</h3>
                  <p className="mt-1 leading-7 text-white/75">{value.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
