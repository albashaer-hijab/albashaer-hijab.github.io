import ButtonLink from "@/components/Button";
import Reveal from "@/components/Reveal";

interface CallToActionProps {
  title?: string;
  text?: string;
}

// قسم الدعوة للتواصل في نهاية الصفحات: خلفية داكنة بإطار ذهبي رفيع.
export default function CallToAction({
  title = "جاهز لتزويد محلّك؟",
  text = "تواصل معنا لمعرفة الأسعار والكميات المتوفرة، وسنساعدك في اختيار ما يناسب محلّك وزبائنك.",
}: CallToActionProps) {
  return (
    <section className="px-6 pb-20">
      <Reveal className="mx-auto max-w-5xl rounded-3xl bg-primary-dark p-2 shadow-xl shadow-primary/20">
        <div className="rounded-[1.25rem] border border-secondary/40 px-6 py-12 text-center sm:px-12">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl leading-8 text-white/75">{text}</p>
          <ButtonLink href="/contact" variant="secondary" className="mt-8 px-9 text-lg">
            تواصل معنا
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
