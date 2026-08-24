import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "工程實績｜泥作師傅黃師傅 MUD-WORK",
  description: "泥作師傅黃師傅工程實績，涵蓋牆面施工、浴室裝修、自地自建、磁磚鋪設與統包工程案例，服務台北、台中地區。",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
