import type { ComponentType, SVGProps } from "react";
import { BoxIcon, GlobeIcon, HomeHeartIcon, ShieldCheckIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";

interface Fact {
  title: string;
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

// حقائق عن الشركة تزيد ثقة الزائر. كلها معلومات فعلية (لا أرقام تقديرية).
const facts: Fact[] = [
  { title: "صناعة سورية", text: "نصنّع منتجاتنا في دمشق", Icon: HomeHeartIcon },
  { title: "بيع بالجملة", text: "لأصحاب المحلات والتجّار", Icon: BoxIcon },
  { title: "شحن", text: "داخل سوريا وخارجها", Icon: GlobeIcon },
  { title: "نموذج مسجّل", text: "لدى حماية الملكية", Icon: ShieldCheckIcon },
];

export default function TrustStrip() {
  return (
    <section aria-label="لماذا تثق بنا" className="border-b border-line bg-white">
      <ul className="mx-auto grid max-w-6xl grid-cols-2 gap-x-4 gap-y-6 px-6 py-8 md:grid-cols-4">
        {facts.map(({ title, text, Icon }, i) => (
          <li key={title}>
            <Reveal delay={i * 100} className="flex items-center gap-3">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-secondary-soft text-primary ring-1 ring-secondary/30">
                <Icon className="h-6 w-6" />
              </span>
              <span className="min-w-0">
                <span className="block font-bold text-primary">{title}</span>
                <span className="block text-sm text-foreground/65">{text}</span>
              </span>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
