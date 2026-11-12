import type { Metadata } from "next";
import ButtonLink from "@/components/Button";

export const metadata: Metadata = {
  title: "الصفحة غير موجودة",
};

export default function NotFound() {
  return (
    <section className="bg-soft flex min-h-[60vh] flex-col items-center justify-center px-6 py-20 text-center">
      <p className="font-display text-7xl font-bold text-secondary" dir="ltr">
        404
      </p>
      <h1 className="mt-4 font-display text-3xl font-bold text-primary">الصفحة غير موجودة</h1>
      <p className="mt-3 max-w-md leading-8 text-foreground/70">
        عذراً، لم نجد الصفحة التي تبحث عنها. ربما تغيّر الرابط أو حُذفت الصفحة.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">العودة إلى الرئيسية</ButtonLink>
        <ButtonLink href="/contact" variant="outline">
          تواصل معنا
        </ButtonLink>
      </div>
    </section>
  );
}
