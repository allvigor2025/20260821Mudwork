"use client";

const NAV_LINKS = [
  { label: "首頁", href: "/" },
  { label: "服務項目", href: "/services" },
  { label: "工程實績", href: "/projects" },
  { label: "浴室裝修專案", href: "/bathroom" },
  { label: "關於我們", href: "/about" },
  { label: "聯絡我們", href: "/#contact" },
];

const VALUES = [
  { icon: "🎯", title: "專業技術", desc: "泥作工程領域深耕超過 40 年，以精湛的技術和優質材料保證每個工程的品質。" },
  { icon: "🎨", title: "客製化設計", desc: "依照每位客戶的空間與需求規劃施工方式，打造符合期待的空間。" },
  { icon: "📏", title: "精準施工", desc: "注重細節，每道工序都按標準施作，保證工程的安全性和耐用性。" },
  { icon: "🤝", title: "誠信服務", desc: "客戶的需求始終是我們首要關注的重點，全程溝通透明。" },
];

const SERVICE_FEATURES = [
  { title: "彈性安排", desc: "配合客戶時間表，安排到場丈量與施工時程。" },
  { title: "實惠套裝", desc: "服務涵蓋磚砌到水泥工程等項目，可依需求彈性組合。" },
  { title: "特別優惠", desc: "提供價格優惠與特殊服務方案。" },
];

const FOOTER_SERVICES = ["牆面施工", "浴室裝修", "磁磚鋪設", "自地自建", "統包工程", "防水工程"];

export default function AboutPage() {
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
                color: link.label === "關於我們" ? "#e65644" : "#14151f",
                textDecoration: "none", fontWeight: link.label === "關於我們" ? 700 : 500, fontSize: "14px",
                borderBottom: link.label === "關於我們" ? "2px solid #e65644" : "2px solid transparent", paddingBottom: "2px",
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
            <span style={{ color: "#e65644", fontSize: "13px", fontWeight: 600 }}>關於我們</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: 16 }}>關於黃師傅</h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", maxWidth: 540, lineHeight: 1.85 }}>
            40 年傳承淬鍊的工法，我們致力於打造出既堅固耐用又美觀的空間。
          </p>
        </div>
      </section>

      {/* STORY */}
      <section style={{ background: "#fff", padding: "88px 20px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16" style={{ ...container, alignItems: "center" }}>
          <div>
            <p style={sectionLabel}>我們的故事</p>
            <h2 style={h2}>專業且經驗豐富的<br />泥作工程承包商</h2>
            <p style={{ ...bodyText, marginBottom: 20 }}>
              我們是專業泥作工程公司，在泥作工程領域深耕超過 40 年，
              致力於提供高品質、精準施工的服務。從牆面施工、浴室裝修、磁磚鋪設，
              到自地自建與統包工程，案例遍布全台。
            </p>
            <p style={{ ...bodyText, marginBottom: 20 }}>
              我們以精湛的技術和優質材料保證每個工程的品質，注重細節，
              保證工程的安全性和耐用性，讓每位客戶都能安心託付。
            </p>
            <p style={{ ...bodyText }}>
              <strong style={{ color: "#14151f" }}>我們的使命，是為客戶打造安全、美觀且耐用的空間；</strong>
              我們的願景，是成為泥作工程行業的領先者。
            </p>
          </div>
          <div style={{ background: "#f5f5f3", borderRadius: 12, padding: "40px", display: "flex", flexDirection: "column", gap: 24 }}>
            {SERVICE_FEATURES.map((f) => (
              <div key={f.title} style={{ borderLeft: "4px solid #e65644", paddingLeft: 20 }}>
                <div style={{ fontSize: "16px", fontWeight: 800, color: "#14151f" }}>{f.title}</div>
                <div style={{ fontSize: "14px", color: "#666", marginTop: 6, lineHeight: 1.7 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section style={{ background: "#f5f5f3", padding: "88px 20px" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={sectionLabel}>核心理念</p>
            <h2 style={h2}>我們對每位業主的承諾</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div key={v.title} style={{ background: "#fff", borderRadius: 10, padding: "36px 28px", borderTop: "4px solid #e65644", textAlign: "center" }}>
                <div style={{ fontSize: "2.4rem", marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: "17px", marginBottom: 12, color: "#14151f" }}>{v.title}</h3>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #e65644, #c94734)", padding: "72px 20px", textAlign: "center" }}>
        <div style={container}>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#fff", marginBottom: 16 }}>
            歡迎與我們合作
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.85)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            不論工程大小，皆可聯繫。師傅免費到場評估，提供透明報價。
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
const bodyText: React.CSSProperties = { fontSize: "15px", color: "#666", lineHeight: 1.85 };
