import ButtonLink from "@/components/Button";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";

// نبذة قصيرة فقط؛ القصة والرؤية والقيم كاملةً في صفحة "من نحن" (بدون تكرار هنا).
export default function AboutSummary() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <SectionHeading eyebrow="من نحن" title="صناعة دمشقية بروح عصرية" />
      <Reveal delay={100}>
        <p className="text-lg leading-9 text-foreground/75">
          {siteConfig.name} شركة سورية متخصصة في صناعة وتجارة الحجابات والإشاربات، مقرّها في{" "}
          {siteConfig.address}. نجمع بين الأصالة والتصميم العصري لنقدّم لمحلّك بضاعة يثق بها
          زبائنك.
        </p>
        <ButtonLink href="/about" variant="outline" className="mt-8">
          اعرف المزيد عنا
        </ButtonLink>
      </Reveal>
    </section>
  );
}
