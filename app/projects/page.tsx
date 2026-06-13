"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "首頁", href: "/" },
  { label: "服務項目", href: "/services" },
  { label: "工程實績", href: "/projects" },
  { label: "關於我們", href: "/about" },
  { label: "最新消息", href: "/news" },
  { label: "聯絡我們", href: "/#contact" },
];

const CATEGORIES = ["全部", "磁磚工程", "防水工程", "粉光工程", "拆除翻新", "砌磚隔間", "商業空間"];

const PROJECTS = [
  {
    id: 1,
    title: "住宅主臥衛浴全室翻新",
    location: "台北市信義區",
    area: "約 4 坪",
    category: "磁磚工程",
    tags: ["磁磚", "防水", "拆除"],
    desc: "舊浴室拆除、防水重做、新磁磚鋪設，採用大板磚 60×120cm，對縫精準，完工後業主非常滿意。",
    color: "#3d2b1f",
  },
  {
    id: 2,
    title: "頂樓平台防水全面施作",
    location: "新北市三重區",
    area: "約 30 坪",
    category: "防水工程",
    tags: ["PU防水", "屋頂"],
    desc: "屋頂積水嚴重，徹底清除舊防水層後，施作 PU 彈性防水塗料兩道，保固 5 年，施工後完全止漏。",
    color: "#1a2e3b",
  },
  {
    id: 3,
    title: "辦公大樓外牆水泥粉光",
    location: "台中市西區",
    area: "約 150 坪",
    category: "粉光工程",
    tags: ["水泥粉光", "外牆"],
    desc: "6 層辦公大樓外牆全面粉光，搭建鷹架施工，分區作業，在業主指定工期內順利完工。",
    color: "#2a2a2a",
  },
  {
    id: 4,
    title: "老公寓廚房磁磚翻新",
    location: "新北市板橋區",
    area: "約 3 坪",
    category: "磁磚工程",
    tags: ["磁磚", "廚房"],
    desc: "30 年老屋廚房，舊磁磚敲除後重新整平，貼附防油易清潔磁磚，附廚台下方防水處理。",
    color: "#3b2a1a",
  },
  {
    id: 5,
    title: "透天厝全室拆除重整",
    location: "桃園市中壢區",
    area: "約 60 坪",
    category: "拆除翻新",
    tags: ["拆除", "清運", "粉光"],
    desc: "三層透天厝全室拆除，磁磚、隔間牆一次清運完畢，後續配合新泥作工程，工期掌控精準。",
    color: "#1f2a1a",
  },
  {
    id: 6,
    title: "衛浴新增砌磚隔間",
    location: "台北市大安區",
    area: "約 5 坪",
    category: "砌磚隔間",
    tags: ["砌磚", "隔間"],
    desc: "主臥新增獨立衛浴，以白磚砌牆隔間，牆體紮實，搭配防水工程同步施作，一次到位。",
    color: "#2a1a2a",
  },
  {
    id: 7,
    title: "咖啡廳地坪洗石子施工",
    location: "台北市松山區",
    area: "約 25 坪",
    category: "商業空間",
    tags: ["洗石子", "商業"],
    desc: "新開幕咖啡廳整體地坪洗石子施作，骨材選色搭配業主設計風格，表面研磨後光澤細緻。",
    color: "#1a1f2a",
  },
  {
    id: 8,
    title: "陽台防水整修",
    location: "新北市永和區",
    area: "約 6 坪",
    category: "防水工程",
    tags: ["防水", "陽台"],
    desc: "陽台長期積水滲入樓下，徹底剔除舊地磚後重做防水、調整洩水坡，再貼附防滑磁磚。",
    color: "#1a2e2e",
  },
  {
    id: 9,
    title: "餐廳廚房地板整平翻新",
    location: "台中市北區",
    area: "約 15 坪",
    category: "商業空間",
    tags: ["地坪整平", "磁磚", "商業"],
    desc: "營業中餐廳廚房地板不平影響安全，利用公休日集中施工，拆除打底整平，貼附防滑耐磨磚。",
    color: "#2a1a1a",
  },
];

const FOOTER_SERVICES = ["水泥粉光工程", "磁磚貼附工程", "防水施工", "地坪整平打底", "拆除清運服務", "砌磚隔間", "洗石子抿石子", "舊屋翻新"];

export default function ProjectsPage() {
  const [active, setActive] = useState("全部");

  const filtered = active === "全部" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <div style={{ fontFamily: "var(--font-dm-sans), var(--font-montserrat), sans-serif", color: "#252525" }}>

      {/* TOP BAR */}
      <div style={{ background: "#252525", color: "#fff", fontSize: "13px", padding: "8px 0" }}>
        <div style={container}>
          <span>📞 免費諮詢專線：0912-345-678 &nbsp;｜&nbsp; 📍 服務範圍：雙北、桃園、台中</span>
        </div>
      </div>

      {/* NAVBAR */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "#fff", borderBottom: "1px solid #e1e1e1", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        <div style={{ ...container, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: "72px" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{ width: 38, height: 38, background: "#ffb600", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, color: "#252525" }}>冠</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "16px", color: "#252525", letterSpacing: "-0.3px", lineHeight: 1.1 }}>冠誠泥作工程</div>
              <div style={{ fontSize: "10px", color: "#888", letterSpacing: "1px" }}>MASONRY ENGINEERING</div>
            </div>
          </a>
          <nav style={{ display: "flex", gap: "24px" }}>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} style={{
                color: link.label === "工程實績" ? "#ffb600" : "#252525",
                textDecoration: "none", fontWeight: link.label === "工程實績" ? 700 : 500, fontSize: "14px",
                borderBottom: link.label === "工程實績" ? "2px solid #ffb600" : "2px solid transparent", paddingBottom: "2px",
              }}>{link.label}</a>
            ))}
          </nav>
          <a href="/#contact" style={btnPrimary}>免費估價</a>
        </div>
      </header>

      {/* HERO */}
      <section style={{ background: "linear-gradient(135deg, #252525, #1a1a1a)", padding: "72px 20px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: 0, top: 0, width: 360, height: 360, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,182,0,0.14) 0%, transparent 70%)", transform: "translate(30%,-30%)", pointerEvents: "none" }} />
        <div style={container}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", textDecoration: "none" }}>首頁</a>
            <span style={{ color: "rgba(255,255,255,0.3)" }}>›</span>
            <span style={{ color: "#ffb600", fontSize: "13px", fontWeight: 600 }}>工程實績</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: 16 }}>工程實績</h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", maxWidth: 500, lineHeight: 1.8 }}>
            超過 300 個完工案例，涵蓋住宅翻新、商業空間、新建工程，圖片真實呈現我們的施工品質。
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
                  borderColor: active === cat ? "#ffb600" : "#ddd",
                  background: active === cat ? "#ffb600" : "#fff",
                  color: active === cat ? "#252525" : "#555",
                  transition: "all 0.18s",
                }}
              >{cat}</button>
            ))}
          </div>

          {/* PROJECT GRID */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {filtered.map((p) => (
              <div key={p.id} style={{ borderRadius: 10, overflow: "hidden", boxShadow: "0 2px 16px rgba(0,0,0,0.08)", background: "#fff" }}>
                {/* PHOTO PLACEHOLDER */}
                <div style={{
                  height: 200, background: p.color,
                  display: "flex", flexDirection: "column",
                  alignItems: "flex-start", justifyContent: "flex-end",
                  padding: "16px 18px", gap: 8,
                }}>
                  <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                    {p.tags.map((t) => (
                      <span key={t} style={{ background: "#ffb600", color: "#252525", fontSize: "11px", fontWeight: 700, padding: "3px 9px", borderRadius: 4 }}>{t}</span>
                    ))}
                  </div>
                </div>
                <div style={{ padding: "20px 22px" }}>
                  <div style={{ fontSize: "11px", color: "#ffb600", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase", marginBottom: 6 }}>{p.category}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "16px", color: "#252525", marginBottom: 8, lineHeight: 1.3 }}>{p.title}</h3>
                  <p style={{ fontSize: "13.5px", color: "#666", lineHeight: 1.75, marginBottom: 14 }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: 16, fontSize: "12.5px", color: "#888" }}>
                    <span>📍 {p.location}</span>
                    <span>📐 {p.area}</span>
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
          <p style={{ ...bodyText, maxWidth: 480, margin: "0 auto 32px" }}>師傅親自到場丈量，詳細書面報價，透明不含糊。</p>
          <a href="/#contact" style={btnPrimary}>立即免費諮詢</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#252525", color: "#fff", padding: "60px 20px 0" }}>
        <div style={{ ...container, display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 38, height: 38, background: "#ffb600", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, color: "#252525" }}>冠</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "16px" }}>冠誠泥作工程行</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", letterSpacing: "1px" }}>MASONRY ENGINEERING</div>
              </div>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, marginBottom: 20 }}>深耕台灣 15 年，專業承接各式泥作工程。誠信報價、品質保證。</p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>週一至週六 08:00 – 18:00，週日休息</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, color: "#ffb600" }}>服務項目</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {FOOTER_SERVICES.map((s) => (
                <li key={s}><a href="/services" style={{ color: "rgba(255,255,255,0.65)", fontSize: "13.5px", textDecoration: "none" }}>{s}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, color: "#ffb600" }}>快速連結</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[{ label: "工程實績", href: "/projects" }, { label: "關於我們", href: "/about" }, { label: "最新消息", href: "/news" }].map((l) => (
                <li key={l.label}><a href={l.href} style={{ color: "rgba(255,255,255,0.65)", fontSize: "13.5px", textDecoration: "none" }}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, color: "#ffb600" }}>聯絡資訊</h4>
            <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.65)", lineHeight: 2 }}>
              📞 0912-345-678<br />📧 kuancheng@masonry.tw<br />📍 雙北・桃園・台中
            </p>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 48, padding: "20px 0", textAlign: "center", fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
          © 2026 冠誠泥作工程行｜All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

const container: React.CSSProperties = { maxWidth: 1160, margin: "0 auto", padding: "0 20px" };
const btnPrimary: React.CSSProperties = { background: "#ffb600", color: "#252525", padding: "12px 28px", borderRadius: 6, fontWeight: 700, fontSize: "14px", textDecoration: "none", display: "inline-block" };
const sectionLabel: React.CSSProperties = { color: "#ffb600", fontWeight: 700, letterSpacing: "1.5px", fontSize: "12px", textTransform: "uppercase" as const, marginBottom: 12 };
const h2: React.CSSProperties = { fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#252525", lineHeight: 1.2, letterSpacing: "-0.5px", marginBottom: 16 };
const bodyText: React.CSSProperties = { fontSize: "15px", color: "#666", lineHeight: 1.85 };
