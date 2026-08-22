"use client";

import { useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "首頁", href: "/" },
  { label: "服務項目", href: "/services" },
  { label: "工程實績", href: "/projects" },
  { label: "浴室裝修專案", href: "/bathroom" },
  { label: "關於我們", href: "/about" },
  { label: "聯絡我們", href: "/#contact" },
];

const SERVICES = [
  {
    icon: "🧱",
    title: "牆面施工",
    desc: "牆面施工專注於精密磚砌、牆面粗底整平、拉皮粉光等工序，以精湛技術打造美觀、堅固的牆面。無論新建牆體或既有牆面修復，皆以同樣標準完成每一道工序。",
    features: ["紅磚牆舖設", "牆面粗皮、拉皮、粉光", "牆面整修"],
  },
  {
    icon: "🚿",
    title: "浴室裝修",
    desc: "專注於浴室裝修項目，致力於為客戶打造舒適、美觀且實用的浴室空間。從全室整修到單項更換，皆可依需求彈性配合施作。",
    features: ["全室整修", "浴缸拆換", "磁磚鋪設更換", "防水工程", "馬桶、浴櫃更換"],
  },
  {
    icon: "🪟",
    title: "磁磚鋪設",
    desc: "專注於精確磁磚鋪設，以專業技術為您打造美觀耐用的磁磚表面，室內外空間、商業與住宅皆可施作。",
    features: ["室內地面磁磚", "浴室牆面磁磚", "廚房磁磚地板", "戶外露台磁磚", "泳池磁磚", "商業空間磁磚"],
  },
  {
    icon: "🏗",
    title: "自地自建",
    desc: "自地自建工程的泥作項目，從基礎打底、牆體砌築到表面粉光，全程專業把關，為新建房屋打下穩固基礎。",
    features: ["基礎泥作", "牆體砌築", "地坪整平", "全程監工"],
  },
  {
    icon: "📋",
    title: "統包工程",
    desc: "整合各項泥作工序的一條龍統包服務，從拆除、打底、砌磚到磁磚鋪設，讓您不需分別聯繫多個廠商，省心省力。",
    features: ["工程統包", "進度掌控", "單一窗口溝通"],
  },
  {
    icon: "💧",
    title: "防水工程",
    desc: "浴室、陽台等空間防水層塗刷施作，施工前徹底清除舊防水層，確保新防水層附著力，有效阻絕滲漏問題。",
    features: ["浴室防水", "陽台防水", "防水層塗刷"],
  },
];

const PROCESS = [
  { step: "01", title: "電話或 LINE 詢問", desc: "說明工程地點與需求，初步了解工程範圍。" },
  { step: "02", title: "師傅到場丈量", desc: "免費到場確認現況，提供詳細報價。" },
  { step: "03", title: "確認施工", desc: "雙方確認報價與工期，安排開工時間。" },
  { step: "04", title: "施工與驗收", desc: "按計畫施工，完工後業主驗收確認。" },
];

const PARTNER_TAGS = ["住宅泥作翻新", "浴室裝修", "自地自建工程", "商業空間裝修", "磁磚鋪設", "統包工程"];

function TagCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const allTags = [...PARTNER_TAGS, ...PARTNER_TAGS, ...PARTNER_TAGS];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let pos = 0;
    let rafId: number;
    const tick = () => {
      pos += 0.4;
      if (pos >= track.scrollWidth / 3) pos = 0;
      track.style.transform = `translateX(-${pos}px)`;
      rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div ref={trackRef} style={{ display: "flex", alignItems: "center", gap: "16px", willChange: "transform", width: "max-content" }}>
        {allTags.map((tag, i) => (
          <div key={i} style={{
            flexShrink: 0, background: "#fff",
            border: "1.5px solid #e65644", borderRadius: 999,
            padding: "8px 20px", fontSize: "13px", fontWeight: 600, color: "#14151f",
            whiteSpace: "nowrap",
          }}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

const FOOTER_SERVICES = ["牆面施工", "浴室裝修", "磁磚鋪設", "自地自建", "統包工程", "防水工程"];

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), var(--font-montserrat), sans-serif", color: "#14151f" }}>

      {/* TOP BAR */}
      <div style={{ background: "#14151f", color: "#fff", fontSize: "13px", padding: "8px 0" }}>
        <div style={container}>
          <span>📞 免費諮詢專線：0975-091-591 &nbsp;｜&nbsp; 📍 服務區域：台北・台中</span>
        </div>
      </div>

      {/* NAVBAR */}
      <header style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "#fff", borderBottom: "1px solid #e1e1e1",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
      }}>
        <div style={{ ...container, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: "72px" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{
              width: 38, height: 38, background: "#e65644", borderRadius: 4,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, fontWeight: 900, color: "#fff",
            }}>黃</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "16px", color: "#14151f", letterSpacing: "-0.3px", lineHeight: 1.1 }}>泥作師傅黃師傅</div>
              <div style={{ fontSize: "10px", color: "#888", letterSpacing: "1px" }}>MUD-WORK</div>
            </div>
          </a>

          <nav style={{ display: "flex", gap: "24px" }}>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} style={{
                color: link.label === "服務項目" ? "#e65644" : "#14151f",
                textDecoration: "none",
                fontWeight: link.label === "服務項目" ? 700 : 500,
                fontSize: "14px",
                borderBottom: link.label === "服務項目" ? "2px solid #e65644" : "2px solid transparent",
                paddingBottom: "2px",
              }}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="/#contact" style={btnPrimary}>免費估價</a>
        </div>
      </header>

      {/* HERO BANNER */}
      <section style={{
        background: "linear-gradient(135deg, #14151f 0%, #0e0f17 60%, #111 100%)",
        padding: "72px 20px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: 0, top: 0,
          width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(230,86,68,0.14) 0%, transparent 70%)",
          transform: "translate(30%, -30%)", pointerEvents: "none",
        }} />
        <div style={container}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", textDecoration: "none" }}>首頁</a>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>›</span>
            <span style={{ color: "#e65644", fontSize: "13px", fontWeight: 600 }}>服務項目</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: 16 }}>
            服務項目
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", maxWidth: 500, lineHeight: 1.8 }}>
            40 年泥作工法傳承，從牆面施工到浴室裝修，每道工序都由師傅親自把關。
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section style={{ background: "#fff", padding: "80px 20px" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={sectionLabel}>專業服務</p>
            <h2 style={h2}>我們能為您做什麼</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {SERVICES.map((s) => (
              <div key={s.title} style={{
                background: "#f5f5f3", borderRadius: 10, padding: "40px 32px",
                position: "relative", overflow: "hidden",
                transition: "box-shadow 0.25s, transform 0.25s", cursor: "default",
              }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.12)";
                  el.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#e65644" }} />
                <div style={{
                  width: 60, height: 60, borderRadius: 12, background: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.8rem", marginBottom: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#14151f", marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.8, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.features.map((f) => (
                    <span key={f} style={{
                      background: "#fff", border: "1px solid #e65644",
                      color: "#14151f", fontSize: "11.5px", fontWeight: 600,
                      padding: "3px 10px", borderRadius: 4,
                    }}>{f}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: "#14151f", padding: "80px 20px" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ ...sectionLabel, color: "#e65644" }}>施工流程</p>
            <h2 style={{ ...h2, color: "#fff" }}>從諮詢到完工，4 個步驟搞定</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {PROCESS.map((p, i) => (
              <div key={p.step} style={{
                background: "rgba(255,255,255,0.06)", borderRadius: 10, padding: "32px 24px",
                textAlign: "center", position: "relative",
              }}>
                {i < PROCESS.length - 1 && (
                  <div style={{
                    position: "absolute", right: "-12px", top: "50%",
                    transform: "translateY(-50%)",
                    color: "#e65644", fontSize: "18px", zIndex: 1,
                  }}>→</div>
                )}
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "#e65644", color: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "16px", fontWeight: 800, margin: "0 auto 20px",
                }}>{p.step}</div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "15px", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13.5px", lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE TAGS CAROUSEL */}
      <section style={{ background: "#f5f5f3", padding: "64px 20px", borderTop: "1px solid #e8e8e8" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={sectionLabel}>適用對象</p>
            <h2 style={h2}>各類型工程，我們都能配合</h2>
          </div>
          <div style={{ background: "#fff", borderRadius: 12, padding: "32px 0", boxShadow: "0 2px 16px rgba(0,0,0,0.06)", overflow: "hidden" }}>
            <TagCarousel />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "linear-gradient(135deg, #e65644, #c94734)",
        padding: "72px 20px", textAlign: "center",
      }}>
        <div style={container}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
            有施工需求？讓我們來評估
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            師傅免費到場丈量估價，施工前提供詳細報價，沒有隱藏費用。
          </p>
          <a href="/#contact" style={{
            background: "#14151f", color: "#fff",
            padding: "14px 36px", borderRadius: 6,
            fontWeight: 700, fontSize: "15px", textDecoration: "none",
            display: "inline-block", letterSpacing: "0.5px",
          }}>
            立即免費諮詢
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#14151f", color: "#fff", padding: "60px 20px 0" }}>
        <div style={{ ...container, display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 38, height: 38, background: "#e65644", borderRadius: 4,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, fontWeight: 900, color: "#fff",
              }}>黃</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "16px" }}>泥作師傅黃師傅</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", letterSpacing: "1px" }}>MUD-WORK</div>
              </div>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, marginBottom: 20 }}>
              40 年傳承淬鍊的泥作工法，專業承接各式泥作工程。誠信服務、品質保證。
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, color: "#e65644" }}>服務項目</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a href="/services" style={{ color: "rgba(255,255,255,0.65)", fontSize: "13.5px", textDecoration: "none" }}>{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, color: "#e65644" }}>聯絡資訊</h4>
            <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.65)", lineHeight: 2 }}>
              📞 0975-091-591<br />
              💬 LINE：@mtj8192y<br />
              📍 服務區域：台北・台中
            </p>
          </div>
        </div>
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 48, padding: "20px 0",
          textAlign: "center", fontSize: "13px", color: "rgba(255,255,255,0.4)",
        }}>
          © 2026 泥作師傅黃師傅｜MUD-WORK｜All Rights Reserved
        </div>
      </footer>
    </div>
  );
}

const container: React.CSSProperties = {
  maxWidth: 1160,
  margin: "0 auto",
  padding: "0 20px",
};

const btnPrimary: React.CSSProperties = {
  background: "#e65644",
  color: "#fff",
  padding: "12px 28px",
  borderRadius: 6,
  fontWeight: 700,
  fontSize: "14px",
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.3px",
};

const sectionLabel: React.CSSProperties = {
  color: "#e65644",
  fontWeight: 700,
  letterSpacing: "1.5px",
  fontSize: "12px",
  textTransform: "uppercase",
  marginBottom: 12,
};

const h2: React.CSSProperties = {
  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
  fontWeight: 800,
  color: "#14151f",
  lineHeight: 1.2,
  letterSpacing: "-0.5px",
  marginBottom: 16,
};
