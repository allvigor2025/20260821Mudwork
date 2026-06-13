import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "冠誠泥作工程行｜專業水泥粉光、磁磚、防水施工",
  description: "深耕台灣 15 年的泥作工程行，承接住宅翻新、商辦、新建各式泥作工程。水泥粉光、磁磚貼附、防水工程、地坪整平，雙北桃園台中服務。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className={`${dmSans.variable} ${montserrat.variable}`}>
      <body>
        {children}
        {/* LINE 浮動聯絡按鈕 */}
        <a
          href="https://line.me/ti/p/~your-line-id"
          target="_blank"
          rel="noopener noreferrer"
          title="LINE 聯絡我們"
          style={{
            position: "fixed",
            bottom: "28px",
            right: "28px",
            zIndex: 9999,
            width: "56px",
            height: "56px",
            borderRadius: "50%",
            background: "#06C755",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 16px rgba(6,199,85,0.45)",
            textDecoration: "none",
          }}
        >
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 3C8.373 3 3 7.597 3 13.2c0 3.416 1.922 6.44 4.905 8.394-.21.785-.674 2.524-.774 2.916-.124.487.178.48.374.349.154-.102 2.44-1.633 3.423-2.296.636.088 1.29.136 1.972.136 6.627 0 12-4.597 12-10.2C27 7.597 21.627 3 15 3z" fill="white"/>
            <path d="M11.25 15.75H9.75v-4.5h1.5v4.5zm4.5 0h-1.5l-2.25-3v3h-1.5v-4.5h1.5l2.25 3v-3h1.5v4.5zm4.5 0h-3.75v-4.5h1.5v3h2.25v1.5z" fill="#06C755"/>
          </svg>
        </a>
      </body>
    </html>
  );
}
