import type { ComponentType, SVGProps } from "react";
import { GridIcon, MedalIcon, PaletteIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

interface Feature {
  title: string;
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const features: Feature[] = [
  {
    title: "من المصنع مباشرةً",
    text: "نصنّع حجاباتنا بأنفسنا في دمشق، فتتعامل مع المصدر مباشرةً دون وسيط، ونتابع الجودة في كل مرحلة.",
    Icon: MedalIcon,
  },
  {
    title: "جميع الألوان",
    text: "جميع منتجاتنا متوفرة بتشكيلة ألوان واسعة، لتلبّي طلبات زبائنك على اختلاف أذواقهم.",
    Icon: PaletteIcon,
  },
  {
    title: "تشكيلة متكاملة",
    text: "حجابات ليكرا وقطن، راسيات، وزنود قطن: تجد ما يحتاجه محلّك عند مورّد واحد.",
    Icon: GridIcon,
  },
];

export default function WhyUs() {
  return (
    <section className="border-y border-line bg-sand py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="لماذا نحن؟"
          title="ما يميّز حجابات البشائر"
          subtitle="ثلاثة أسباب تجعلنا المورّد المناسب لمحلّك."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {features.map(({ title, text, Icon }, i) => (
            <Reveal key={title} delay={i * 150} className="h-full">
              <article className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-8 transition duration-300 hover:-translate-y-1.5 hover:border-secondary/50 hover:shadow-xl hover:shadow-primary/10">
                <span
                  className="absolute inset-x-0 top-0 h-1 origin-right scale-x-0 bg-secondary transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden="true"
                />
                <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-secondary-soft text-primary ring-1 ring-secondary/30 transition duration-300 group-hover:bg-primary group-hover:text-secondary-light">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-primary">{title}</h3>
                <p className="mt-3 leading-8 text-foreground/70">{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
