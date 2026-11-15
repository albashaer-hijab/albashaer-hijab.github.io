import Link from "next/link";
import { siteConfig } from "@/lib/site";

interface LogoProps {
  variant?: "dark" | "light";
}

const INK = "#3b1a4a"; // بنفسجي غامق (الحرف والكلمة)
const MAGENTA = "#8e2a7c"; // بنفسجي وردي (الشريط والزخرفة)

// شعار البشائر مرسوماً كـ SVG (مطابق لشعار البروشور): حرف B مزخرف داخل حلقة،
// كلمة "البشائر" مائلة، وتحتها شريط ALBASHA'ER.
// في الفوتر (خلفية داكنة) يوضع داخل حاوية بيضاء ليبقى واضحاً.
export default function Logo({ variant = "dark" }: LogoProps) {
  const light = variant === "light";

  return (
    <Link
      href="/"
      aria-label={siteConfig.name}
      className={light ? "inline-block rounded-xl bg-white px-3 py-1.5" : "inline-block"}
    >
      <svg
        viewBox="0 0 250 112"
        role="img"
        aria-label={siteConfig.name}
        className={light ? "h-11 w-auto" : "h-14 w-auto"}
        direction="ltr"
      >
        {/* الحلقة البيضاوية حول الحرف */}
        <ellipse
          cx="158"
          cy="56"
          rx="33"
          ry="47"
          transform="rotate(24 158 56)"
          fill="none"
          stroke={INK}
          strokeWidth="2.6"
        />
        {/* الخيط الرفيع الملتف أعلى الحرف */}
        <path
          d="M150 52c10-8 26-6 34-18 6-9 3-20-6-21-8-1-11 9-4 11"
          fill="none"
          stroke={INK}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        {/* زخرفة البيزلي داخل الحلقة */}
        <path
          d="M134 54c8-9 22-10 26-3 3 6-4 11-10 8-4-2-3-7 1-7-6-2-11 1-17 2z"
          fill={MAGENTA}
        />
        <circle cx="131" cy="59" r="2.2" fill={MAGENTA} />

        {/* حرف B المزخرف */}
        <text
          x="166"
          y="92"
          fontSize="104"
          fill={INK}
          style={{ fontFamily: "var(--font-script), cursive" }}
        >
          B
        </text>

        {/* كلمة البشائر (مائلة وعريضة) */}
        <text
          x="134"
          y="62"
          textAnchor="end"
          fontSize="34"
          fontWeight="800"
          fill={INK}
          transform="skewX(-14)"
          style={{ fontFamily: "var(--font-tajawal), sans-serif" }}
        >
          البشائر
        </text>

        {/* شريط الاسم بالإنجليزية */}
        <rect x="6" y="74" width="140" height="27" rx="13.5" fill={MAGENTA} />
        <text
          x="76"
          y="94"
          textAnchor="middle"
          fontSize="19"
          fontWeight="700"
          fill="#fff"
          letterSpacing="0.6"
          style={{ fontFamily: "Arial, Helvetica, sans-serif" }}
        >
          ALBASHA’ER
        </text>
      </svg>
    </Link>
  );
}
