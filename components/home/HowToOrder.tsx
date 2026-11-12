import type { ComponentType, SVGProps } from "react";
import { ChatIcon, GridIcon, ShieldCheckIcon } from "@/components/icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

interface Step {
  title: string;
  text: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const steps: Step[] = [
  { title: "حدّد طلبك", text: "اختر الأنواع والألوان والكميات التي يحتاجها محلّك.", Icon: GridIcon },
  { title: "تواصل معنا", text: "راسلنا عبر واتساب أو اتصل بنا للاتفاق على التفاصيل والأسعار.", Icon: ChatIcon },
  { title: "نجهّز ونشحن", text: "نجهّز طلبك ونشحنه إليك داخل سوريا أو خارجها.", Icon: ShieldCheckIcon },
];

export default function HowToOrder() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <SectionHeading
        eyebrow="طريقة الطلب"
        title="كيف تطلب؟"
        subtitle="ثلاث خطوات بسيطة وبدون تعقيد."
      />
      <ol className="relative grid gap-10 md:grid-cols-3 md:gap-6">
        {/* خط منقّط يربط الخطوات على الشاشات الكبيرة */}
        <span className="step-line absolute inset-x-[16%] top-8 hidden h-px md:block" aria-hidden="true" />
        {steps.map(({ title, text, Icon }, i) => (
          <Reveal key={title} delay={i * 160}>
            <li className="group relative text-center">
              <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-secondary/50 bg-white text-primary shadow-md shadow-primary/10 ring-8 ring-background transition duration-300 group-hover:bg-primary group-hover:text-secondary-light">
                <Icon className="h-7 w-7" />
                <span className="absolute -top-1 -end-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary text-xs font-extrabold text-white">
                  {i + 1}
                </span>
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-primary">{title}</h3>
              <p className="mx-auto mt-2 max-w-xs leading-7 text-foreground/70">{text}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
