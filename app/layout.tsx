import type { Metadata, Viewport } from "next";
import { El_Messiri, Tajawal } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollProgress from "@/components/ScrollProgress";
import { siteConfig } from "@/lib/site";
import "./globals.css";

// خط النصوص
const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "700", "800"],
  display: "swap",
});

// خط العناوين (كلاسيكي أنيق) — يُستخدم عبر الصنف font-display
const displayFont = El_Messiri({
  variable: "--font-display-ar",
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | ${siteConfig.slogan}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    locale: "ar_SY",
    type: "website",
    siteName: siteConfig.name,
  },
};

// الموقع فاتح دائماً: يمنع المتصفح من تغميق الألوان تلقائياً في الوضع الليلي للجوال.
export const viewport: Viewport = {
  colorScheme: "only light",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${displayFont.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
