"use client";

const NAV_LINKS = [
  { label: "首頁", href: "/" },
  { label: "服務項目", href: "/services" },
  { label: "工程實績", href: "/projects" },
  { label: "浴室裝修專案", href: "/bathroom" },
  { label: "關於我們", href: "/about" },
  { label: "聯絡我們", href: "/#contact" },
];

const SERVICE_TYPES = [
  {
    icon: "🚽",
    title: "浴廁泥作工程",
    items: ["全浴室拆除清運", "防水層塗刷", "磚牆打粗底整平", "磁磚黏貼", "衛浴組安裝"],
  },
  {
    icon: "🏠",
    title: "全新整間浴室",
    items: ["設計規劃", "地基處理", "隔間建造", "泥作施工", "水電施工", "裝飾裝潢", "清潔驗收"],
  },
  {
    icon: "🔄",
    title: "舊浴室全室翻新",
    items: ["舊設施拆除", "重新鋪設地板磁磚", "更換衛浴設備", "粉刷", "照明安裝"],
  },
  {
    icon: "🛁",
    title: "浴缸拆除重貼磚",
    items: ["浴缸拆除", "表面清潔", "磁磚鋪設", "填縫"],
  },
];

const FOOTER_SERVICES = ["牆面施工", "浴室裝修", "磁磚鋪設", "自地自建", "統包工程", "防水工程"];

export default function BathroomPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), var(--font-montserrat), sans-serif", color: "#14151f" }}>

      {/* NAVBAR */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "#fff", borderBottom: "1px solid #e1e1e1", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        <div className="flex-wrap gap-y-3" style={{ ...container, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 20px" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{ width: 38, height: 38, background: "#e65644", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, color: "#fff" }}>黃</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "16px", color: "#14151f", lineHeight: 1.1 }}>泥作師傅黃師傅</div>
              <div style={{ fontSize: "10px", color: "#888", letterSpacing: "1px" }}>MUD-WORK</div>
            </div>
          </a>
          <nav className="flex-wrap" style={{ display: "flex", gap: "20px", order: 3 }}>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} style={{
                color: link.label === "浴室裝修專案" ? "#e65644" : "#14151f",
                textDecoration: "none", fontWeight: link.label === "浴室裝修專案" ? 700 : 500, fontSize: "14px",
                borderBottom: link.label === "浴室裝修專案" ? "2px solid #e65644" : "2px solid transparent", paddingBottom: "2px",
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
            <span style={{ color: "#e65644", fontSize: "13px", fontWeight: 600 }}>浴室裝修專案</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: 16 }}>浴室裝修專案</h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", maxWidth: 540, lineHeight: 1.85 }}>
            我們專注於浴室裝修，以高品質工藝和細心打造出令人驚艷且實用的空間。
          </p>
        </div>
      </section>

      {/* SERVICE TYPES */}
      <section style={{ background: "#fff", padding: "88px 20px" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={sectionLabel}>四大主要服務</p>
            <h2 style={h2}>依需求選擇最適合的方案</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {SERVICE_TYPES.map((s) => (
              <div key={s.title} style={{ background: "#f5f5f3", borderRadius: 10, padding: "36px 32px" }}>
                <div style={{ fontSize: "2.2rem", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: "18px", fontWeight: 700, color: "#14151f", marginBottom: 16 }}>{s.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {s.items.map((item, i) => (
                    <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: "14px", color: "#555" }}>
                      <span style={{
                        width: 22, height: 22, borderRadius: "50%", background: "#e65644", color: "#fff",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "11px", fontWeight: 800, flexShrink: 0,
                      }}>{i + 1}</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #e65644, #c94734)", padding: "72px 20px", textAlign: "center" }}>
        <div style={container}>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
            浴室裝修需求？免費預約估價
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            提供免費預約估價和線上表單預約服務，師傅親自到場評估。
          </p>
          <a href="/#contact" style={{ background: "#14151f", color: "#fff", padding: "14px 36px", borderRadius: 6, fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-block" }}>
            立即免費諮詢
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#14151f", color: "#fff", padding: "60px 20px 0" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr] gap-10" style={container}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <div style={{ width: 38, height: 38, background: "#e65644", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, color: "#fff" }}>黃</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: "16px" }}>泥作師傅黃師傅</div>
                <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.45)", letterSpacing: "1px" }}>MUD-WORK</div>
              </div>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, marginBottom: 20 }}>40 年傳承淬鍊的泥作工法，專業承接各式泥作工程。誠信服務、品質保證。</p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, color: "#e65644" }}>服務項目</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {FOOTER_SERVICES.map((s) => (<li key={s}><a href="/services" style={{ color: "rgba(255,255,255,0.65)", fontSize: "13.5px", textDecoration: "none" }}>{s}</a></li>))}
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
