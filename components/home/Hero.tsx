import Image from "next/image";
import ButtonLink from "@/components/Button";
import { CheckCircleIcon } from "@/components/icons";
import Typewriter from "@/components/Typewriter";
import { heroImages, siteConfig } from "@/lib/site";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

const trustPoints = ["بيع بالجملة", "جميع الألوان", "شحن داخل سوريا وخارجها"];

export default function Hero() {
  return (
    <section className="bg-soft overflow-hidden border-b border-line">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-14 md:grid-cols-2 md:py-20">
        {/* النص */}
        <div className="text-center md:text-start">
          <p
            className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-white px-4 py-1.5 text-sm font-bold text-secondary-deep"
            style={delay(50)}
          >
            <span className="h-1.5 w-1.5 rotate-45 bg-secondary" aria-hidden="true" />
            صناعة وتجارة الحجابات والإشاربات · دمشق
          </p>

          <h1
            className="animate-fade-up mt-6 font-display text-5xl font-bold leading-tight text-primary sm:text-6xl"
            style={delay(180)}
          >
            {siteConfig.name}
          </h1>

          <p className="animate-fade-up mt-4 text-2xl font-bold text-foreground" style={delay(320)}>
            من المصنع إلى محلّك
            {/* سطر مستقل بارتفاع ثابت حتى لا تتحرك الصفحة مع تغيّر الكلمات */}
            <Typewriter
              words={["حجابات ليكرا", "حجابات قطن", "راسيات ليكرا وقطن"]}
              className="mt-1 block min-h-[1.5em] text-secondary-deep"
            />
          </p>

          <p
            className="animate-fade-up mx-auto mt-5 max-w-lg text-lg leading-9 text-foreground/70 md:mx-0"
            style={delay(460)}
          >
            نصنّع الحجابات والإشاربات في دمشق ونبيعها بالجملة لأصحاب المحلات والتجّار، بجميع
            الألوان، مع شحن داخل سوريا وخارجها.
          </p>

          <div
            className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start"
            style={delay(600)}
          >
            <ButtonLink href="/contact" className="animate-pulse-ring px-8 text-lg">
              تواصل معنا
            </ButtonLink>
            <ButtonLink href="/about" variant="outline" className="px-8 text-lg">
              تعرّف علينا
            </ButtonLink>
          </div>

          <ul
            className="animate-fade-up mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-foreground/75 md:justify-start"
            style={delay(740)}
          >
            {trustPoints.map((point) => (
              <li key={point} className="flex items-center gap-1.5">
                <CheckCircleIcon className="h-5 w-5 text-secondary" />
                {point}
              </li>
            ))}
          </ul>
        </div>

        {/* الصورتان داخل إطارين مقوّسين */}
        <div className="animate-fade-up relative mx-auto w-full max-w-sm pb-8 md:max-w-md" style={delay(300)}>
          {/* قوس ذهبي رفيع خلف الصورة الكبيرة */}
          <span
            className="absolute end-[-14px] top-[-14px] h-[88%] w-[78%] rounded-t-full border border-secondary"
            aria-hidden="true"
          />
          <div className="relative ms-auto aspect-[4/5] w-[78%] overflow-hidden rounded-t-full rounded-b-3xl bg-secondary-soft shadow-2xl shadow-primary/15">
            <Image
              src={heroImages.main}
              alt="فتاة ترتدي حجاباً من حجابات البشائر"
              fill
              priority
              sizes="(min-width: 768px) 30vw, 70vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute bottom-0 start-0 aspect-[4/5] w-[46%] overflow-hidden rounded-t-full rounded-b-2xl border-[6px] border-white bg-secondary-soft shadow-xl shadow-primary/15">
            <Image
              src={heroImages.side}
              alt="فتاة ترتدي حجاباً بلون هادئ"
              fill
              sizes="(min-width: 768px) 18vw, 40vw"
              className="object-cover object-top"
            />
          </div>
          <p className="absolute end-0 bottom-10 rounded-2xl border border-line bg-white px-4 py-2.5 text-sm font-bold text-primary shadow-lg">
            <span className="block text-xs font-medium text-secondary-deep">شعارنا</span>
            {siteConfig.slogan}
          </p>
        </div>
      </div>
    </section>
  );
}
