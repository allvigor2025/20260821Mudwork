"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "首頁", href: "/" },
  { label: "服務項目", href: "/services" },
  { label: "工程實績", href: "/projects" },
  { label: "浴室裝修專案", href: "/bathroom" },
  { label: "關於我們", href: "/about" },
  { label: "聯絡我們", href: "/#contact" },
];

const CATEGORIES = ["全部", "牆面施工", "浴室裝修", "自地自建", "磁磚鋪設", "統包工程"];

const PROJECTS = [
  {
    id: 1,
    title: "牆面施工特色案例",
    location: "彰化縣永靖鄉",
    category: "牆面施工",
    tags: ["磚砌", "粉光"],
    desc: "精密磚砌與牆面整平粉光工程，施工細節到位，獲得業主高度肯定的特色案例。",
    img: "/images/service-wall.jpg",
  },
  {
    id: 2,
    title: "浴室裝修案例",
    location: "台北・台中服務區",
    category: "浴室裝修",
    tags: ["拆除", "防水", "磁磚"],
    desc: "全室拆除、防水層重做、磁磚鋪設更換與衛浴組安裝，打造舒適實用的浴室空間。",
    img: "/images/service-bathroom.jpg",
  },
  {
    id: 3,
    title: "自地自建工程",
    location: "台北・台中服務區",
    category: "自地自建",
    tags: ["基礎泥作", "統包"],
    desc: "自地自建案場的泥作工程，從基礎打底到牆體砌築，全程專業把關。",
    img: "/images/service-selfbuild.jpg",
  },
  {
    id: 4,
    title: "磁磚鋪設工程",
    location: "台北・台中服務區",
    category: "磁磚鋪設",
    tags: ["室內地壁磚", "商業空間"],
    desc: "室內地壁磚與商業空間磁磚鋪設，精準對縫，表面平整耐用。",
    img: "/images/service-tile.png",
  },
  {
    id: 5,
    title: "統包工程案例",
    location: "台北・台中服務區",
    category: "統包工程",
    tags: ["統包", "多工序整合"],
    desc: "整合拆除、泥作、磁磚等多項工序的統包案場，單一窗口溝通，工期掌控精準。",
    img: "/images/hero-brick.jpg",
  },
];

const FOOTER_SERVICES = ["牆面施工", "浴室裝修", "磁磚鋪設", "自地自建", "統包工程", "防水工程"];

export default function ProjectsClient() {
  const [active, setActive] = useState("全部");

  const filtered = active === "全部" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div style={{ fontFamily: "var(--font-dm-sans), var(--font-montserrat), sans-serif", color: "#14151f" }}>

      {/* NAVBAR */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "#fff", borderBottom: "1px solid #e1e1e1", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        <div className="flex-wrap gap-y-3" style={{ ...container, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px" }}>
          <a href="/" style={{ textDecoration: "none" }}>
            <span style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.5px", color: "#14151f" }}>
              mudwork<span style={{ color: "#e65644" }}>.</span>
            </span>
          </a>
          <nav className="flex-wrap" style={{ display: "flex", gap: "20px", order: 3 }}>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} style={{
                color: link.label === "工程實績" ? "#e65644" : "#14151f",
                textDecoration: "none", fontWeight: link.label === "工程實績" ? 700 : 500, fontSize: "14px",
                borderBottom: link.label === "工程實績" ? "2px solid #e65644" : "2px solid transparent", paddingBottom: "2px",
              }}>{link.label}</a>
            ))}
          </nav>
          <a href="/#contact" style={btnPrimary}>免費估價</a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #14151f, #0e0f17)", padding: "72px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(230,86,68,0.14) 0%, transparent 70%)", transform: "translate(30%,-30%)", pointerEvents: "none" }} />
        <div style={container}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", textDecoration: "none" }}>首頁</a>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ color: "#e65644", fontSize: "13px", fontWeight: 600 }}>工程實績</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: 16 }}>工程實績</h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", maxWidth: 500, lineHeight: 1.8 }}>
            案例遍布全台，涵蓋牆面施工、浴室裝修、自地自建、磁磚鋪設與統包工程。
          </p>
        </div>
      </section>

      {/* FILTER + GRID */}
      <section style={{ background: "#fff", padding: "72px 20px 88px" }}>
        <div style={container}>

          {/* CATEGORY FILTER */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 48, justifyContent: "center" }}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "8px 20px", borderRadius: 999, fontSize: "13.5px", fontWeight: 600,
                  cursor: "pointer", border: "1.5px solid",
                  borderColor: active === cat ? "#e65644" : "#ddd",
                  background: active === cat ? "#e65644" : "#fff",
                  color: active === cat ? "#fff" : "#555",
                  transition: "all 0.18s",
                }}
              >{cat}</button>
            ))}
          </div>

          {/* PROJECT GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((p) => (
              <div key={p.id} style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.08)", background: "#fff" }}>
                {/* PHOTO PLACEHOLDER */}
                <div style={{
                  height: 200,
                  backgroundImage: `linear-gradient(0deg, rgba(10,10,12,0.7), rgba(10,10,12,0.05)), url('${p.img}')`,
                  backgroundSize: "cover", backgroundPosition: "center",
                  display: "flex", flexDirection: "column",
                  alignItems: "flex-start", justifyContent: "flex-end",
                  padding: "16px 18px", gap: 8,
                }}>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tags.map((t) => (
                      <span key={t} style={{ background: "#e65644", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "3px 9px", borderRadius: 4 }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "20px 22px" }}>
                  <div style={{ fontSize: "11px", color: "#e65644", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 6 }}>{p.category}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "16px", color: "#14151f", marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ fontSize: "13.5px", color: "#666", lineHeight: 1.75, marginBottom: 14 }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 16, fontSize: "12.5px", color: "#888" }}>
                    <span>📍 {p.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 0", color: "#999" }}>
              此分類暫無案例，請選擇其他類別。
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#f5f5f3", padding: "64px 20px", textAlign: "center", borderTop: "1px solid #e8e8e8" }}>
        <div style={container}>
          <p style={sectionLabel}>有工程需求？</p>
          <h2 style={{ ...h2, marginBottom: 16 }}>讓我們為您的案場提供免費估價</h2>
          <p style={{ ...bodyText, maxWidth: 480, margin: "0 auto 32px" }}>師傅親自到場丈量，詳細報價，透明不含糊。</p>
          <a href="/#contact" style={btnPrimary}>立即免費諮詢</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#14151f", color: "#fff", padding: "60px 20px 0" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10" style={container}>
          <div>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontSize: "20px", fontWeight: 800, letterSpacing: "-0.5px", color: "#fff" }}>
                mudwork<span style={{ color: "#e65644" }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, marginBottom: 20 }}>40 年傳承淬鍊的泥作工法，專業承接各式泥作工程。誠信服務、品質保證。</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, color: "#e65644" }}>服務項目</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {FOOTER_SERVICES.map((s) => (
                <li key={s}><a href="/services" style={{ color: "rgba(255,255,255,0.65)", fontSize: "13.5px", textDecoration: "none" }}>{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, color: "#e65644" }}>聯絡資訊</h4>
            <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.65)", lineHeight: 2 }}>
              📞 0975-091-591<br />💬 LINE：@mtj8192y<br />📍 台北・台中
            </p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 48, padding: "20px 0", textAlign: "center", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
          © 2026 泥作師傅黃師傅｜MUD-WORK｜All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

const container: React.CSSProperties = { maxWidth: 1160, margin: "0 auto", padding: "0 20px" };
const btnPrimary: React.CSSProperties = { background: "#e65644", color: "#fff", padding: "12px 28px", borderRadius: 6, fontWeight: 700, fontSize: "14px", textDecoration: "none", display: "inline-block" };
const sectionLabel: React.CSSProperties = { color: "#e65644", fontWeight: 700, letterSpacing: "1.5px", fontSize: "12px", textTransform: "uppercase" as const, marginBottom: 12 };
const h2: React.CSSProperties = { fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#14151f", lineHeight: 1.2, letterSpacing: "-0.5px", marginBottom: 16 };
const bodyText: React.CSSProperties = { fontSize: "15px", color: "#666", lineHeight: 1.85 };
