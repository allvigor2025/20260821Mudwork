import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "泥作師傅黃師傅｜MUD-WORK 專業泥作工程 - 牆面施工、浴室裝修、磁磚鋪設",
  description: "40 年傳承淬鍊的泥作工法，承接牆面施工、浴室裝修、磁磚鋪設、自地自建、統包工程。台北、台中服務，提供免費到府估價。",
  alternates: { canonical: "/" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "泥作師傅黃師傅 MUD-WORK",
  image: "https://mudwork.online/images/hero-brick.jpg",
  url: "https://mudwork.online",
  telephone: "+886-975-091-591",
  priceRange: "$$",
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "愛國東路26號",
      addressLocality: "中正區",
      addressRegion: "台北市",
      addressCountry: "TW",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "興祥街191巷29號",
      addressLocality: "烏日區",
      addressRegion: "台中市",
      addressCountry: "TW",
    },
  ],
  areaServed: ["台北市", "台中市"],
  sameAs: [
    "https://line.me/R/ti/p/@mtj8192y",
    "https://www.facebook.com/concreteAREA/",
    "https://www.tiktok.com/@decorman2020",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "浴室裝修大概需要幾天完工？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "視工程範圍而定，全室翻新一般需要 7～14 天，包含拆除、防水、泥作、磁磚鋪設、衛浴安裝等步驟，實際天數會依現場狀況與師傅評估後告知。",
      },
    },
    {
      "@type": "Question",
      name: "自地自建的泥作工程可以統包嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "可以，我們提供自地自建統包服務，從基礎泥作到牆面、磁磚等各項工序皆可整合施作，讓您不用分別聯繫多個廠商。",
      },
    },
    {
      "@type": "Question",
      name: "到府估價需要收費嗎？",
      acceptedAnswer: {
        "@type": "Answer",
        text: "不需要，我們提供免費到府丈量估價服務，師傅親自到場了解現況後，提供詳細報價，讓您安心規劃預算。",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
