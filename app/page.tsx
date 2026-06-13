"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "首頁", href: "/" },
  { label: "服務項目", href: "/services" },
  { label: "工程實績", href: "/projects" },
  { label: "關於我們", href: "/about" },
  { label: "最新消息", href: "/news" },
  { label: "聯絡我們", href: "#contact" },
];

const SERVICES = [
  { icon: "🧱", title: "水泥粉光", desc: "室內外牆面水泥砂漿粉刷、批土整平，表面光滑細緻、耐候耐久，完工品質精良。" },
  { icon: "🪵", title: "磁磚工程", desc: "浴室、廚房、客廳各式磁磚貼附，精準對縫施工，防滑防潮，選材豐富多元。" },
  { icon: "💧", title: "防水工程", desc: "屋頂、陽台、衛浴防水施作，採用優質防水材料，有效阻絕滲漏，保固明確。" },
  { icon: "🔨", title: "拆除清運", desc: "舊磁磚拆除、牆面剔除、廢棄物清運一條龍，施工快速乾淨，不影響鄰居作息。" },
  { icon: "📐", title: "地坪整平", desc: "地板水泥打底整平，精確控制坡度與厚度，為後續鋪面工程奠定穩固基礎。" },
  { icon: "🏗", title: "外牆修補", desc: "裂縫填補、外牆修復、騎樓地板翻新，恢復建築外觀，延長使用年限。" },
  { icon: "🪨", title: "砌磚隔間", desc: "紅磚、白磚牆體砌築，新增房間隔間或衛浴分間，穩固耐用，隔音效果佳。" },
  { icon: "🌊", title: "洗石子・抿石子", desc: "外牆、庭院、景觀牆洗石子、抿石子施作，紋理自然美觀，防滑耐磨。" },
  { icon: "🏠", title: "舊屋翻新", desc: "老屋全室泥作翻修，含拆除、防水、粉光、磁磚一條龍，讓老屋煥然一新。" },
];

const STATS = [
  { value: "300+", label: "完工案例" },
  { value: "15年", label: "豐富施工經驗" },
  { value: "98%", label: "客戶好評率" },
  { value: "200+", label: "配合建設公司" },
];

const WHY_US = [
  { icon: "✅", label: "施工品質保證" },
  { icon: "⏱", label: "準時完工交屋" },
  { icon: "💬", label: "施工前詳細估價" },
  { icon: "🔧", label: "完工後保固服務" },
];

const PROJECTS = [
  { title: "住宅浴室全室翻新", location: "台北市信義區", tag: "磁磚 ／ 防水" },
  { title: "辦公大樓外牆粉光", location: "台中市西區", tag: "水泥粉光" },
  { title: "三樓公寓廚衛磁磚", location: "新北市三重區", tag: "磁磚工程" },
  { title: "頂樓防水全面施作", location: "桃園市中壢區", tag: "防水工程" },
];

const TESTIMONIALS = [
  {
    name: "陳先生",
    role: "自住屋主，台北",
    text: "浴室翻新找冠誠，師傅手藝很細心，磁磚對縫整齊，防水也做得很紮實，完工後完全沒有滲水問題，強力推薦！",
  },
  {
    name: "林小姐",
    role: "室內設計師",
    text: "配合過多個案場，施工品質穩定、溝通順暢，能配合設計圖紙施工，是我固定配合的泥作廠商。",
  },
  {
    name: "王工頭",
    role: "建設公司工務主任",
    text: "工程進度掌控良好，材料用量精準不浪費，工班態度認真，大型案場也能準時完工，品質符合標準。",
  },
  {
    name: "張老闆",
    role: "餐廳業主，台中",
    text: "廚房地板整平和磁磚鋪設，師傅速度快又不馬虎，讓我趕上開幕日期，非常感謝！",
  },
];

const FAQS = [
  {
    q: "泥作粉光完工後，幾天可以貼磁磚？",
    a: "水泥砂漿粉光後一般需要養護 7～14 天，待表面乾燥硬化後方可進行磁磚貼附，具體時間視現場溫濕度而定，師傅會現場評估後告知。",
  },
  {
    q: "防水工程保固期多長？",
    a: "一般防水工程提供 2～5 年保固，視施工範圍與材料等級而定。合約中會明確載明保固條款，如保固期內發生滲漏問題，免費到場維修。",
  },
  {
    q: "施工期間噪音大嗎？需要通知管委會嗎？",
    a: "拆除與打鑿作業會產生較大噪音，建議施工前提前通知管委會並張貼公告。我們會配合社區規定，在允許時段內施工，並做好防塵防噪措施。",
  },
];

const FOOTER_SERVICES = ["水泥粉光工程", "磁磚貼附工程", "防水施工", "地坪整平打底", "拆除清運服務", "砌磚隔間", "洗石子抿石子", "舊屋翻新"];

export default function MasonryHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });

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
                color: link.label === "首頁" ? "#ffb600" : "#252525",
                textDecoration: "none",
                fontWeight: link.label === "首頁" ? 700 : 500,
                fontSize: "14.5px",
                borderBottom: link.label === "首頁" ? "2px solid #ffb600" : "2px solid transparent",
                paddingBottom: "2px",
              }}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" style={btnPrimary}>免費估價</a>
        </div>
      </header>

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg, #252525 0%, #1a1a1a 60%, #111 100%)",
        color: "#fff", padding: "120px 20px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: "-80px", top: "-80px",
          width: 420, height: 420, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,182,0,0.18) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />
        <div style={{
          position: "absolute", left: "55%", bottom: 0,
          width: 2, height: "60%",
          background: "linear-gradient(to bottom, transparent, rgba(255,182,0,0.15), transparent)",
          pointerEvents: "none",
        }} />
        <div style={{ ...container, maxWidth: 720 }}>
          <p style={{ color: "#ffb600", fontWeight: 700, letterSpacing: "3px", fontSize: "12px", textTransform: "uppercase", marginBottom: 20 }}>
            15 年專業泥作工程
          </p>
          <h1 style={{ fontSize: "clamp(2.4rem,5vw,3.6rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: 24, letterSpacing: "-1px" }}>
            粉光、磁磚、防水<br />
            <span style={{ color: "#ffb600" }}>品質紮實</span>，按時交工
          </h1>
          <p style={{ fontSize: "16px", lineHeight: 1.9, color: "rgba(255,255,255,0.72)", marginBottom: 40, maxWidth: 560 }}>
            冠誠泥作工程行深耕北中台灣 15 年，承接住宅翻新、新建工程、商業空間等各式泥作項目，
            堅持用料實在、施工細緻，每個案場都當自己家在做。
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a href="/services" style={btnPrimary}>查看服務項目</a>
            <a href="#contact" style={{ ...btnOutline, borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>立即免費諮詢</a>
          </div>
        </div>
      </section>

      {/* ABOUT + STATS */}
      <section id="about" style={{ background: "#fff", padding: "88px 20px" }}>
        <div style={{ ...container, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={sectionLabel}>關於冠誠</p>
            <h2 style={h2}>15 年磨練，每道工序都不將就</h2>
            <p style={{ ...bodyText, marginBottom: 20 }}>
              創立以來，我們累積超過 300 個完工案例，服務對象涵蓋自住屋主、室內設計師、建設公司與商業業主。
              無論是浴室磁磚翻新、防水施作，還是整棟大樓的外牆粉光，師傅都以同樣的標準完成每一面牆。
            </p>
            <p style={{ ...bodyText, marginBottom: 32 }}>
              我們重視事前充分溝通與書面估價，施工中保持現場整潔，完工後提供保固，讓您安心省心。
            </p>
            <a href="#contact" style={{ ...btnPrimary, display: "inline-block" }}>與我們合作</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {STATS.map((s) => (
              <div key={s.value} style={{
                background: "#f5f5f3", borderRadius: 8, padding: "28px 24px",
                borderLeft: "4px solid #ffb600",
              }}>
                <div style={{ fontSize: "2rem", fontWeight: 800, color: "#ffb600", lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontSize: "13.5px", color: "#555", marginTop: 8, lineHeight: 1.5 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ background: "#f5f5f3", padding: "88px 20px" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={sectionLabel}>我們的專業</p>
            <h2 style={h2}>服務項目</h2>
            <p style={{ ...bodyText, maxWidth: 500, margin: "0 auto 16px" }}>不論工程大小，皆可配合施作，歡迎電話詢問或到府估價。</p>
            <a href="/services" style={{ color: "#ffb600", fontWeight: 600, fontSize: "14px" }}>查看完整服務說明 →</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, marginBottom: 36 }}>
            {SERVICES.map((s) => (
              <div key={s.title} style={{
                background: "#fff", borderRadius: 10, padding: "36px 28px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                borderBottom: "3px solid transparent",
                transition: "border-color 0.2s",
              }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderBottomColor = "#ffb600")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderBottomColor = "transparent")}
              >
                <div style={{ fontSize: "2.4rem", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: 12, color: "#252525" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{
        background: "linear-gradient(135deg, #252525, #1a1a1a)",
        color: "#fff", padding: "88px 20px",
      }}>
        <div style={{ ...container, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={{ ...sectionLabel, color: "#ffb600" }}>為什麼選擇我們</p>
            <h2 style={{ ...h2, color: "#fff" }}>誠信施工，品質說話</h2>
            <p style={{ ...bodyText, color: "rgba(255,255,255,0.70)", marginBottom: 32 }}>
              我們深知一道牆的品質攸關居住安全與美觀，因此對每個細節都不妥協——
              從備料、打底、粉光到收邊，每一步都按標準施工。
            </p>
            <a href="#contact" style={{ ...btnPrimary, display: "inline-block" }}>立即詢價</a>
          </div>
          <div>
            <p style={{ ...sectionLabel, color: "#ffb600" }}>我們的承諾</p>
            <p style={{ ...bodyText, color: "rgba(255,255,255,0.65)", marginBottom: 28 }}>
              簽約前書面報價、施工中定期回報進度、完工後保固服務，全程透明無隱藏費用。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {WHY_US.map((p) => (
                <div key={p.label} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: "rgba(255,255,255,0.07)", borderRadius: 8,
                  padding: "14px 18px",
                }}>
                  <span style={{ fontSize: "1.4rem" }}>{p.icon}</span>
                  <span style={{ fontSize: "14px", fontWeight: 600 }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ background: "#252525", padding: "88px 20px" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ ...sectionLabel, color: "#ffb600" }}>實際案例</p>
            <h2 style={{ ...h2, color: "#fff" }}>近期完工工程</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
            {PROJECTS.map((p, i) => (
              <div key={p.title} style={{
                background: "rgba(255,255,255,0.05)", borderRadius: 10, overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
              }}>
                <div style={{
                  height: 200,
                  background: i % 2 === 0
                    ? "linear-gradient(135deg, rgba(255,182,0,0.25), rgba(37,37,37,0.85))"
                    : "linear-gradient(135deg, rgba(37,37,37,0.85), rgba(255,182,0,0.18))",
                  display: "flex", alignItems: "flex-end",
                  padding: "16px 20px",
                }}>
                  <span style={{
                    background: "#ffb600", color: "#252525",
                    fontSize: "11px", fontWeight: 700, padding: "4px 10px",
                    borderRadius: 4, letterSpacing: "0.5px",
                  }}>{p.tag}</span>
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "16px", marginBottom: 6 }}>{p.title}</h3>
                  <p style={{ color: "#ffb600", fontSize: "13px", fontWeight: 600 }}>📍 {p.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ background: "#fff", padding: "88px 20px" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={sectionLabel}>業主口碑</p>
            <h2 style={h2}>客戶怎麼說</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28 }}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} style={{
                background: "#f5f5f3", borderRadius: 10, padding: "32px 28px",
                borderLeft: "4px solid #ffb600",
              }}>
                <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.85, marginBottom: 20 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "linear-gradient(135deg, #ffb600, #e09600)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, color: "#252525", fontSize: "18px",
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "14px", color: "#252525" }}>{t.name}</div>
                    <div style={{ fontSize: "12px", color: "#999" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT + FAQ */}
      <section id="contact" style={{ background: "#f5f5f3", padding: "88px 20px" }}>
        <div style={{ ...container, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <p style={sectionLabel}>免費估價</p>
            <h2 style={h2}>有工程需求？<br />立即聯絡我們！</h2>
            <p style={{ ...bodyText, marginBottom: 32 }}>
              留下您的姓名和需求，我們將在一個工作天內回覆，並安排師傅到場免費丈量估價。
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <input
                placeholder="您的姓名 *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
              />
              <input
                placeholder="聯絡電話 *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={inputStyle}
              />
              <textarea
                placeholder="工程需求說明（例：浴室磁磚翻新，約 4 坪）"
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical" }}
              />
              <button style={{ ...btnPrimary, border: "none", cursor: "pointer", alignSelf: "flex-start" }}>
                送出詢問
              </button>
            </div>
          </div>

          <div>
            <p style={sectionLabel}>常見問題</p>
            <h2 style={h2}>施工前，你可能想知道的事</h2>
            <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
              {FAQS.map((faq, i) => (
                <div key={i} style={{
                  background: "#fff", borderRadius: 8, overflow: "hidden",
                  border: "1px solid #e4e4e4",
                }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%", textAlign: "left", padding: "18px 20px",
                      background: "none", border: "none", cursor: "pointer",
                      fontWeight: 600, fontSize: "14.5px", color: "#252525",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                    }}
                  >
                    {faq.q}
                    <span style={{ color: "#ffb600", fontSize: "18px", flexShrink: 0, marginLeft: 12 }}>
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === i && (
                    <div style={{ padding: "0 20px 18px", fontSize: "14px", color: "#666", lineHeight: 1.8 }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div style={{ marginTop: 32, background: "#252525", borderRadius: 10, padding: "24px 28px", color: "#fff" }}>
              <p style={{ fontWeight: 700, fontSize: "15px", marginBottom: 8 }}>直接聯絡師傅</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13.5px", lineHeight: 1.8 }}>
                📞 0912-345-678<br />
                📧 kuancheng@masonry.tw<br />
                🕐 週一至週六 08:00 – 18:00
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#252525", color: "#fff", padding: "60px 20px 0" }}>
        <div style={{ ...container, display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 40 }}>
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
            <h4 style={{ fontWeight: 700, marginBottom: 20, color: "#ffb600" }}>快速連結</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "服務項目", href: "/services" },
                { label: "工程實績", href: "/projects" },
                { label: "關於我們", href: "/about" },
                { label: "最新消息", href: "/news" },
                { label: "聯絡我們", href: "#contact" },
              ].map((l) => (
                <li key={l.label}><a href={l.href} style={{ color: "rgba(255,255,255,0.65)", fontSize: "13.5px", textDecoration: "none" }}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, color: "#ffb600" }}>聯絡資訊</h4>
            <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.65)", lineHeight: 2 }}>
              📞 0912-345-678<br />
              📧 kuancheng@masonry.tw<br />
              📍 雙北・桃園・台中
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

const btnOutline: React.CSSProperties = {
  background: "transparent",
  color: "#252525",
  padding: "11px 26px",
  borderRadius: 6,
  fontWeight: 700,
  fontSize: "14px",
  textDecoration: "none",
  display: "inline-block",
  border: "2px solid #252525",
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

const bodyText: React.CSSProperties = {
  fontSize: "15px",
  color: "#666",
  lineHeight: 1.85,
};

const inputStyle: React.CSSProperties = {
  padding: "13px 16px",
  borderRadius: 6,
  border: "1px solid #ddd",
  fontSize: "14px",
  color: "#252525",
  background: "#fff",
  outline: "none",
  width: "100%",
};
