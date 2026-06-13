"use client";

const NAV_LINKS = [
  { label: "首頁", href: "/" },
  { label: "服務項目", href: "/services" },
  { label: "工程實績", href: "/projects" },
  { label: "關於我們", href: "/about" },
  { label: "最新消息", href: "/news" },
  { label: "聯絡我們", href: "/#contact" },
];

const NEWS = [
  {
    id: 1,
    date: "2026-05-15",
    category: "工程知識",
    title: "浴室磁磚為什麼會空鼓？師傅教你看懂施工品質",
    summary: "磁磚空鼓是很多屋主最常碰到的問題，輕則影響美觀，重則整片脫落。本文從施工角度解析空鼓的成因，以及如何在驗收時自己判斷品質。",
    readTime: "5 分鐘",
    color: "#2a1a1a",
  },
  {
    id: 2,
    date: "2026-04-28",
    category: "防水工程",
    title: "屋頂防水施工前，你一定要知道的 5 件事",
    summary: "屋頂防水是房屋維護的重中之重，但市場上施工品質良莠不齊。這篇文章整理出屋頂防水施工前業主必須確認的關鍵細節，幫助你避免花錢又白做的窘境。",
    readTime: "7 分鐘",
    color: "#1a2e3b",
  },
  {
    id: 3,
    date: "2026-04-10",
    category: "舊屋翻新",
    title: "老屋全室翻新泥作工程，施工順序是關鍵",
    summary: "舊屋翻新工程複雜，泥作往往是影響後續所有工程的基礎。本文說明標準施工順序，以及為什麼省略某些步驟會讓你在後期付出更大代價。",
    readTime: "6 分鐘",
    color: "#1f2a1a",
  },
  {
    id: 4,
    date: "2026-03-22",
    category: "工程知識",
    title: "水泥粉光 vs 批土：哪個適合你的牆面？",
    summary: "許多人搞不清楚水泥粉光和批土的差異，以為功能一樣。本文詳細比較兩者的適用情境、成本與耐久度，讓你在溝通工程時不再霧煞煞。",
    readTime: "4 分鐘",
    color: "#2a2a1a",
  },
  {
    id: 5,
    date: "2026-03-05",
    category: "估價資訊",
    title: "磁磚工程怎麼估價？影響報價的 4 大因素",
    summary: "「磁磚工程多少錢一坪？」是業主最常問的問題。本文拆解磁磚工程的報價邏輯，讓你在比較報價時有所依據，不再只看總價。",
    readTime: "5 分鐘",
    color: "#1a1a2a",
  },
  {
    id: 6,
    date: "2026-02-18",
    category: "案例分享",
    title: "三重老公寓浴廁全面翻新——施工前後對比",
    summary: "這個案場是一間屋齡超過 30 年的公寓浴廁，原始磁磚空鼓嚴重、排水不良。記錄從拆除到完工的全過程，供有相同需求的業主參考。",
    readTime: "8 分鐘",
    color: "#2a1a2a",
  },
];

const CATEGORIES = ["全部", "工程知識", "防水工程", "舊屋翻新", "估價資訊", "案例分享"];

const FOOTER_SERVICES = ["水泥粉光工程", "磁磚貼附工程", "防水施工", "地坪整平打底", "拆除清運服務", "砌磚隔間", "洗石子抿石子", "舊屋翻新"];

export default function NewsPage() {
  return (
    <div style={{ fontFamily: "var(--font-dm-sans), var(--font-montserrat), sans-serif", color: "#252525" }}>

      {/* TOP BAR */}
      <div style={{ background: "#252525", color: "#fff", fontSize: "13px", padding: "8px 0" }}>
        <div style={container}><span>📞 免費諮詢專線：0912-345-678 &nbsp;｜&nbsp; 📍 服務範圍：雙北、桃園、台中</span></div>
      </div>

      {/* NAVBAR */}
      <header style={{ position: "sticky", top: 0, zIndex: 100, background: "#fff", borderBottom: "1px solid #e1e1e1", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
        <div style={{ ...container, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: "72px" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <div style={{ width: 38, height: 38, background: "#ffb600", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 900, color: "#252525" }}>冠</div>
            <div>
              <div style={{ fontWeight: 800, fontSize: "16px", color: "#252525", lineHeight: 1.1 }}>冠誠泥作工程</div>
              <div style={{ fontSize: "10px", color: "#888", letterSpacing: "1px" }}>MASONRY ENGINEERING</div>
            </div>
          </a>
          <nav style={{ display: "flex", gap: "24px" }}>
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} style={{
                color: link.label === "最新消息" ? "#ffb600" : "#252525",
                textDecoration: "none", fontWeight: link.label === "最新消息" ? 700 : 500, fontSize: "14px",
                borderBottom: link.label === "最新消息" ? "2px solid #ffb600" : "2px solid transparent", paddingBottom: "2px",
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
            <span style={{ color: "#ffb600", fontSize: "13px", fontWeight: 600 }}>最新消息</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: 16 }}>最新消息</h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", maxWidth: 500, lineHeight: 1.8 }}>
            師傅親自整理的泥作工程知識、施工案例分享，讓你在動工前做好功課。
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ background: "#fff", padding: "72px 20px 0" }}>
        <div style={container}>
          <p style={sectionLabel}>最新一篇</p>
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 40, marginBottom: 72, background: "#f5f5f3", borderRadius: 12, overflow: "hidden" }}>
            <div style={{ height: 320, background: NEWS[0].color, display: "flex", alignItems: "flex-end", padding: "24px" }}>
              <span style={{ background: "#ffb600", color: "#252525", fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: 4 }}>{NEWS[0].category}</span>
            </div>
            <div style={{ padding: "40px 32px 40px 8px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ fontSize: "12px", color: "#999", marginBottom: 12 }}>{NEWS[0].date} · 閱讀約 {NEWS[0].readTime}</div>
              <h2 style={{ fontSize: "clamp(1.2rem,2vw,1.6rem)", fontWeight: 800, color: "#252525", lineHeight: 1.3, marginBottom: 16 }}>{NEWS[0].title}</h2>
              <p style={{ fontSize: "14.5px", color: "#666", lineHeight: 1.8, marginBottom: 24 }}>{NEWS[0].summary}</p>
              <a href="#" style={{ color: "#ffb600", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>閱讀全文 →</a>
            </div>
          </div>
        </div>
      </section>

      {/* ALL ARTICLES */}
      <section style={{ background: "#fff", padding: "0 20px 88px" }}>
        <div style={container}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
            {CATEGORIES.map((cat) => (
              <span key={cat} style={{ padding: "7px 18px", borderRadius: 999, fontSize: "13px", fontWeight: 600, border: "1.5px solid #ddd", color: "#555", cursor: "pointer", background: "#fff" }}>
                {cat}
              </span>
            ))}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {NEWS.map((n) => (
              <article key={n.id} style={{ borderRadius: 10, overflow: "hidden", background: "#f5f5f3", transition: "box-shadow 0.2s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(0,0,0,0.1)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = "none")}
              >
                <div style={{ height: 180, background: n.color, display: "flex", alignItems: "flex-end", padding: "16px" }}>
                  <span style={{ background: "#ffb600", color: "#252525", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: 4 }}>{n.category}</span>
                </div>
                <div style={{ padding: "20px 22px 24px" }}>
                  <div style={{ fontSize: "12px", color: "#999", marginBottom: 10 }}>{n.date} · {n.readTime}</div>
                  <h3 style={{ fontWeight: 700, fontSize: "15.5px", color: "#252525", lineHeight: 1.4, marginBottom: 12 }}>{n.title}</h3>
                  <p style={{ fontSize: "13.5px", color: "#666", lineHeight: 1.75, marginBottom: 16 }}>{n.summary}</p>
                  <a href="#" style={{ color: "#ffb600", fontWeight: 700, fontSize: "13px", textDecoration: "none" }}>閱讀全文 →</a>
                </div>
              </article>
            ))}
          </div>
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
              {FOOTER_SERVICES.map((s) => (<li key={s}><a href="/services" style={{ color: "rgba(255,255,255,0.65)", fontSize: "13.5px", textDecoration: "none" }}>{s}</a></li>))}
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
