import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "服務項目｜牆面施工、浴室裝修、磁磚鋪設、自地自建｜泥作師傅黃師傅",
  description: "泥作師傅黃師傅服務項目：牆面施工、浴室裝修、磁磚鋪設、自地自建、統包工程、防水工程。40 年泥作工法傳承，台北、台中服務。",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
