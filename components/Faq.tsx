import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

interface FaqItem {
  question: string;
  answer: string;
}

// الأسئلة الشائعة — عدّل الأسئلة والأجوبة هنا.
// الأجوبة مبنية على معلومات الشركة الفعلية فقط (لا أسعار ولا كميات ولا مدد شحن).
// لا تُكرَّر هنا معلومات الصفحة الرئيسية (الجملة، الشحن، طريقة الطلب) ولا صفحة اتصل بنا (الساعات).
const faqs: FaqItem[] = [
  {
    question: "ما المنتجات التي تصنّعونها؟",
    answer:
      "نصنّع حجابات الليكرا وحجابات القطن بنوعيها (قطعة واحدة وقطعتين)، وراسيات الليكرا والقطن، وزنود القطن.",
  },
  {
    question: "كيف أعرف الأسعار؟",
    answer:
      "تختلف الأسعار بحسب النوع والكمية. أخبرنا بما تحتاجه عبر واتساب أو الهاتف لنرسل لك التفاصيل.",
  },
  {
    question: "هل أستطيع طلب ألوان محددة؟",
    answer: "نعم. أخبرنا بالألوان التي يطلبها زبائنك لنؤكد لك توفرها قبل تجهيز الطلب.",
  },
];

export default function Faq() {
  return (
    <section className="mb-20 border-y border-line bg-sand py-20">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="أسئلة شائعة"
          title="إجابات عمّا يسأل عنه التجّار"
          subtitle="لم تجد جواب سؤالك؟ تواصل معنا مباشرةً."
        />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 80}>
              <details className="group rounded-2xl border border-line bg-white transition-colors open:border-secondary/50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold text-primary [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary-soft text-lg leading-none text-primary transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="px-5 pb-5 leading-8 text-foreground/75">{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
