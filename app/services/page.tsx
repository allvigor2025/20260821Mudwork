"use client";

import { useEffect, useRef } from "react";

const NAV_LINKS = [
  { label: "首頁", href: "/" },
  { label: "工程項目", href: "/#projects" },
  { label: "服務項目", href: "/services" },
  { label: "關於我們", href: "/#about" },
  { label: "聯絡我們", href: "/#contact" },
];

const SERVICES = [
  {
    icon: "🧱",
    title: "水泥粉光",
    desc: "室內外牆面水泥砂漿粉刷、批土整平，表面光滑細緻，耐候耐久。適用於新建工程交屋前底層處理，或老屋翻新整面重做。完工面平整度符合業界標準，可直接作為油漆或壁紙底材。",
    features: ["內外牆粉刷", "批土整平", "表面拋光", "耐候處理"],
  },
  {
    icon: "🪵",
    title: "磁磚工程",
    desc: "浴室、廚房、客廳、陽台等各式磁磚貼附，精準對縫施工，防滑防潮，選材豐富多元。我們配合業主需求選用適合的黏著劑與填縫材，確保磁磚不空鼓、不滲水。",
    features: ["室內地壁磚", "戶外石英磚", "馬賽克磚", "大板磚施作"],
  },
  {
    icon: "💧",
    title: "防水工程",
    desc: "屋頂、陽台、衛浴防水施作，採用 PU 彈性防水塗料或抗裂砂漿，有效阻絕滲漏問題。施工前徹底清除舊防水層，確保新防水層附著力，完工後保固明確。",
    features: ["屋頂防水", "浴室防水", "外牆防潮", "陽台止水"],
  },
  {
    icon: "🔨",
    title: "拆除清運",
    desc: "舊磁磚拆除、牆面剔除、混凝土打鑿、廢棄物清運一條龍處理。我們使用專業電動工具，施工快速乾淨，並做好防塵防噪措施，不影響鄰居正常生活。",
    features: ["磁磚拆除", "牆面剔除", "RC打鑿", "廢棄物清運"],
  },
  {
    icon: "📐",
    title: "地坪整平打底",
    desc: "地板水泥打底整平，精確控制坡度與厚度，為後續鋪設磁磚、木地板、環氧樹脂地板奠定穩固基礎。衛浴地板可同步施作洩水坡，確保排水順暢。",
    features: ["水泥打底", "洩水坡施作", "厚度控制", "表面自平處理"],
  },
  {
    icon: "🏗",
    title: "外牆修補翻新",
    desc: "裂縫填補、外牆修復、騎樓地板翻新、磁磚脫落修補，恢復建築外觀，延長使用年限。老舊社區外牆整修、建物外皮翻新，提升房屋價值與居住安全。",
    features: ["裂縫灌注", "外牆翻新", "騎樓地板", "馬賽克磚修補"],
  },
];

const PROCESS = [
  { step: "01", title: "電話或表單詢問", desc: "說明工程地點與需求，初步了解工程範圍。" },
  { step: "02", title: "師傅到場丈量", desc: "免費到場確認現況，提供詳細書面估價。" },
  { step: "03", title: "簽約確認施工", desc: "雙方確認報價與工期，簽訂合約後開工。" },
  { step: "04", title: "施工與驗收", desc: "按計畫施工，完工後業主驗收確認。" },
];

const PARTNER_TAGS = ["住宅自住翻新", "老屋整修", "新建工程泥作", "商業空間裝修", "社區大樓維修", "室內設計配合"];

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
            border: "1.5px solid #ffb600", borderRadius: 999,
            padding: "8px 20px", fontSize: "13px", fontWeight: 600, color: "#252525",
            whiteSpace: "nowrap",
          }}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}

const FOOTER_SERVICES = ["水泥粉光工程", "磁磚貼附工程", "防水施工", "地坪整平打底", "拆除清運服務", "外牆修補翻新"];

export default function ServicesPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), var(--font-montserrat), sans-serif", color: "#252525" }}>

      {/* TOP BAR */}
      <div style={{ background: "#252525", color: "#fff", fontSize: "13px", padding: "8px 0" }}>
        <div style={container}>
          <span>📞 免費諮詢專線：0912-345-678 &nbsp;｜&nbsp; 📍 服務範圍：雙北、桃園、台中</span>
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
              width: 38, height: 38, background: "#ffb600", borderRadius: 4,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18, fontWeight: 900, color: "#252525",
            }}>冠</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "16px", color: "#252525", letterSpacing: "-0.3px", lineHeight: 1.1 }}>冠誠泥作工程</div>
              <div style={{ fontSize: "10px", color: "#888", letterSpacing: "1px" }}>MASONRY ENGINEERING</div>
            </div>
          </a>

          <nav style={{ display: "flex", gap: "28px" }}>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} style={{
                color: link.label === "服務項目" ? "#ffb600" : "#252525",
                textDecoration: "none",
                fontWeight: link.label === "服務項目" ? 700 : 500,
                fontSize: "14.5px",
                borderBottom: link.label === "服務項目" ? "2px solid #ffb600" : "2px solid transparent",
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
        background: "linear-gradient(135deg, #252525 0%, #1a1a1a 60%, #111 100%)",
        padding: "72px 20px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: 0, top: 0,
          width: 360, height: 360, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,182,0,0.14) 0%, transparent 70%)",
          transform: "translate(30%, -30%)", pointerEvents: "none",
        }} />
        <div style={container}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <a href="/" style={{ color: "rgba(255,255,255,0.5)", fontSize: "13px", textDecoration: "none" }}>首頁</a>
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px" }}>›</span>
            <span style={{ color: "#ffb600", fontSize: "13px", fontWeight: 600 }}>服務項目</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: 16 }}>
            服務項目
          </h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", maxWidth: 500, lineHeight: 1.8 }}>
            從拆除到完工，我們提供泥作工程全流程施作，每道工序都有師傅親自把關。
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
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "#ffb600" }} />
                <div style={{
                  width: 60, height: 60, borderRadius: 12, background: "#fff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "1.8rem", marginBottom: 24, boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#252525", marginBottom: 12 }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.8, marginBottom: 20 }}>{s.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.features.map((f) => (
                    <span key={f} style={{
                      background: "#fff", border: "1px solid #ffb600",
                      color: "#252525", fontSize: "11.5px", fontWeight: 600,
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
      <section style={{ background: "#252525", padding: "80px 20px" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ ...sectionLabel, color: "#ffb600" }}>施工流程</p>
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
                    color: "#ffb600", fontSize: "18px", zIndex: 1,
                  }}>→</div>
                )}
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  background: "#ffb600", color: "#252525",
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
        background: "linear-gradient(135deg, #ffb600, #e09600)",
        padding: "72px 20px", textAlign: "center",
      }}>
        <div style={container}>
          <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 800, color: "#252525", marginBottom: 16 }}>
            有施工需求？讓我們來評估
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(37,37,37,0.75)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            師傅免費到場丈量估價，施工前提供詳細書面報價，沒有隱藏費用。
          </p>
          <a href="/#contact" style={{
            background: "#252525", color: "#fff",
            padding: "14px 36px", borderRadius: 6,
            fontWeight: 700, fontSize: "15px", textDecoration: "none",
            display: "inline-block", letterSpacing: "0.5px",
          }}>
            立即免費諮詢
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#252525", color: "#fff", padding: "60px 20px 0" }}>
        <div style={{ ...container, display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 40 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{
                width: 38, height: 38, background: "#ffb600", borderRadius: 4,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18, fontWeight: 900, color: "#252525",
              }}>冠</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "16px" }}>冠誠泥作工程行</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", letterSpacing: "1px" }}>MASONRY ENGINEERING</div>
              </div>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, marginBottom: 20 }}>
              深耕台灣 15 年，專業承接住宅、商辦、新建工程各式泥作工程。<br />
              誠信報價、品質保證，是我們對每位業主的承諾。
            </p>
            <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.45)" }}>週一至週六 08:00 – 18:00，週日休息</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, color: "#ffb600" }}>服務項目</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {FOOTER_SERVICES.map((s) => (
                <li key={s}>
                  <a href="/services" style={{ color: "rgba(255,255,255,0.65)", fontSize: "13.5px", textDecoration: "none" }}>{s}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, color: "#ffb600" }}>聯絡資訊</h4>
            <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.65)", lineHeight: 2 }}>
              📞 0912-345-678<br />
              📧 kuancheng@masonry.tw<br />
              📍 服務地區：雙北・桃園・台中
            </p>
          </div>
        </div>
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.1)", marginTop: 48, padding: "20px 0",
          textAlign: "center", fontSize: "13px", color: "rgba(255,255,255,0.4)",
        }}>
          © 2026 冠誠泥作工程行｜All Rights Reserved
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
  background: "#ffb600",
  color: "#252525",
  padding: "12px 28px",
  borderRadius: 6,
  fontWeight: 700,
  fontSize: "14px",
  textDecoration: "none",
  display: "inline-block",
  letterSpacing: "0.3px",
};

const sectionLabel: React.CSSProperties = {
  color: "#ffb600",
  fontWeight: 700,
  letterSpacing: "1.5px",
  fontSize: "12px",
  textTransform: "uppercase",
  marginBottom: 12,
};

const h2: React.CSSProperties = {
  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
  fontWeight: 800,
  color: "#252525",
  lineHeight: 1.2,
  letterSpacing: "-0.5px",
  marginBottom: 16,
};
