import type { Metadata } from "next";
import Image from "next/image";
import type { ComponentType, SVGProps } from "react";
import CallToAction from "@/components/CallToAction";
import PageBanner from "@/components/PageBanner";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import {
  BoxIcon,
  CheckCircleIcon,
  GlobeIcon,
  HomeHeartIcon,
  MedalIcon,
  SparkleIcon,
} from "@/components/icons";
import { asset, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "من نحن",
  description: "تعرّف على قصة ورؤية ورسالة حجابات البشائر: مصنع حجابات وإشاربات في دمشق يبيع بالجملة.",
};

const highlights = [
  "تصنيع محلي في دمشق",
  "جميع الألوان متوفرة",
  "بيع بالجملة لأصحاب المحلات",
  "شحن داخل سوريا وخارجها",
];

interface Card {
  title: string;
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const visionMission: Card[] = [
  {
    title: "رؤيتنا",
    text: "أن نكون المورّد الأول لمحلات الحجابات والإشاربات، وأن نقدّم صناعة سورية تنافس بجودتها وإبداعها في الأسواق المحلية والعالمية.",
    Icon: SparkleIcon,
  },
  {
    title: "رسالتنا",
    text: "تقديم منتجات عالية الجودة بتصاميم مبتكرة وأسعار مناسبة، مع الالتزام بخدمة عملائنا بصدق واحترام، والمساهمة في دعم الصناعة الوطنية وإحياء حرفة الحجاب بروح عصرية.",
    Icon: MedalIcon,
  },
];

const values: Card[] = [
  { title: "إبتكار", text: "نطوّر تصاميمنا باستمرار لتواكب ذوق المرأة العصرية.", Icon: SparkleIcon },
  { title: "جودة", text: "نختار الأقمشة بعناية ونتابع كل مرحلة من التصنيع.", Icon: MedalIcon },
  { title: "تميّز", text: "نهتم بالتفاصيل الصغيرة التي تصنع الفرق.", Icon: HomeHeartIcon },
];

const facts: Card[] = [
  { title: "صناعة وتجارة", text: "نصنّع ونبيع الحجابات والإشاربات.", Icon: HomeHeartIcon },
  { title: "جملة", text: "نتعامل مع أصحاب المحلات والتجّار.", Icon: BoxIcon },
  { title: "شحن", text: "داخل سوريا وخارجها.", Icon: GlobeIcon },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner title="من نحن" subtitle={siteConfig.slogan} />

      {/* قصتنا */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <SectionHeading align="start" eyebrow="قصتنا" title="من دمشق إلى أسواق الداخل والخارج" />
          <Reveal delay={100}>
            <p className="text-lg leading-9 text-foreground/75">
              انطلقت {siteConfig.name} من دمشق بشغف كبير لتقديم حجابات وإشاربات تجمع بين الأصالة
              والذوق الرفيع. بدأنا بإيمان راسخ بأن الحجاب جزء من هوية المرأة وجمالها، فعملنا على
              تطوير منتجاتنا عاماً بعد عام حتى أصبحنا اسماً يثق به كثيرون في صناعة وتجارة الحجابات
              والإشاربات.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 font-medium text-foreground/85">
                  <CheckCircleIcon className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-sm">
          <span
            className="absolute inset-0 translate-x-3 translate-y-3 rounded-3xl border border-secondary"
            aria-hidden="true"
          />
          <Image
            src={asset("/images/about.jpg")}
            alt="بروشور حجابات البشائر - صناعة وتجارة الحجابات والإشاربات"
            width={754}
            height={1080}
            sizes="(min-width: 768px) 40vw, 90vw"
            className="relative h-auto w-full rounded-3xl border border-line shadow-xl shadow-primary/15"
          />
        </Reveal>
      </section>

      {/* الرؤية والرسالة */}
      <section className="border-y border-line bg-sand py-20">
        <div className="mx-auto max-w-6xl px-6">
          <SectionHeading eyebrow="إلى أين نتّجه" title="رؤيتنا ورسالتنا" />
          <div className="grid gap-6 md:grid-cols-2">
            {visionMission.map(({ title, text, Icon }, i) => (
              <Reveal key={title} delay={i * 150} className="h-full">
                <article className="h-full rounded-2xl border border-line bg-white p-8">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary-soft text-primary ring-1 ring-secondary/30">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-bold text-primary">{title}</h3>
                  <p className="mt-3 leading-9 text-foreground/75">{text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* قيمنا */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <SectionHeading
          eyebrow="قيمنا"
          title={siteConfig.slogan}
          subtitle="ثلاث كلمات في شعارنا، نلتزم بها في كل قطعة."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {values.map(({ title, text, Icon }, i) => (
            <Reveal key={title} delay={i * 150} className="h-full">
              <article className="group h-full rounded-2xl border border-line bg-white p-8 text-center transition duration-300 hover:-translate-y-1.5 hover:border-secondary/50 hover:shadow-xl hover:shadow-primary/10">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-secondary-light transition duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold text-primary">{title}</h3>
                <p className="mt-3 leading-8 text-foreground/70">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <ul className="mt-12 grid gap-4 rounded-2xl border border-line bg-white p-6 md:grid-cols-3 md:divide-x md:divide-line">
          {facts.map(({ title, text, Icon }) => (
            <li key={title} className="flex items-center gap-3 md:px-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-secondary-soft text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-bold text-primary">{title}</span>
                <span className="block text-sm text-foreground/65">{text}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      <CallToAction title="يسعدنا التعامل معك" text="لديك سؤال أو طلب لمحلّك؟ تواصل معنا مباشرةً وسنردّ عليك في ساعات العمل." />
    </>
  );
}
