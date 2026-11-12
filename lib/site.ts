import type { NavLink, PhoneNumber } from "@/types";

export const siteConfig = {
  name: "حجابات البشائر",
  nameEn: "Al-Basha'er",
  slogan: "إبتكار.. جودة.. تميّز",
  description:
    "حجابات البشائر: مصنع حجابات وإشاربات في دمشق - الحريقة. بيع بالجملة لأصحاب المحلات والتجّار، بجميع الألوان، مع شحن داخل سوريا وخارجها.",
  address: "دمشق - الحريقة",
  // ساعات العمل: تظهر في الفوتر وصفحة اتصل بنا.
  workingHours: "10 صباحاً - 8 مساءً",
  whatsappUrl: "https://wa.me/963944481500",
  // ضع رابط حساب إنستغرام هنا (مثل "https://instagram.com/xxxx") ليظهر في صفحة اتصل بنا والفوتر.
  instagramUrl: "https://www.instagram.com/albashaer.hijab/",
};

// اسم الحساب (مثل @albashaer.hijab) يُستخرج تلقائياً من الرابط أعلاه.
export const instagramHandle = siteConfig.instagramUrl
  .replace(/^https?:\/\/(www\.)?instagram\.com\//, "@")
  .replace(/\/$/, "");

// يضيف المسار الأساسي للموقع أمام مسارات الصور (مطلوب عند النشر على GitHub Pages
// تحت مسار فرعي مثل /albashaer). في التطوير المحلي لا يغيّر شيئاً.
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

// صورتا الهيرو في الصفحة الرئيسية (استبدليهما بنفس الاسم في public/images/lifestyle/).
export const heroImages = {
  main: asset("/images/lifestyle/hijab-gold.jpg"),
  side: asset("/images/lifestyle/hijab-calm.jpg"),
};

export const phones: PhoneNumber[] = [
  { label: "هاتف", display: "00963112210084", href: "tel:+963112210084" },
  { label: "هاتف", display: "00963112247721", href: "tel:+963112247721" },
  {
    label: "واتساب",
    display: "00963944481500",
    href: siteConfig.whatsappUrl,
    whatsapp: true,
  },
];

export const navLinks: NavLink[] = [
  { label: "الرئيسية", href: "/" },
  { label: "من نحن", href: "/about" },
  { label: "اتصل بنا", href: "/contact" },
];
