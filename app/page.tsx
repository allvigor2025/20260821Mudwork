"use client";

import { useState } from "react";

const NAV_LINKS = [
  { label: "首頁", href: "/" },
  { label: "服務項目", href: "/services" },
  { label: "工程實績", href: "/projects" },
  { label: "浴室裝修專案", href: "/bathroom" },
  { label: "關於我們", href: "/about" },
  { label: "聯絡我們", href: "#contact" },
];

const SERVICES = [
  { icon: "🧱", title: "牆面施工", desc: "紅磚牆舖設、牆面粗底拉皮粉光、牆面整修，以精湛技術打造美觀堅固的牆面。" },
  { icon: "🚿", title: "浴室裝修", desc: "全室整修、浴缸拆換、磁磚鋪設更換、防水工程、馬桶浴櫃更換，打造舒適實用的浴室空間。" },
  { icon: "🪟", title: "磁磚鋪設", desc: "室內地壁磚、浴室牆面、廚房地板、戶外露台、泳池、商業空間，各式磁磚精確鋪設。" },
  { icon: "🏗", title: "自地自建", desc: "自地自建泥作工程統包，從基礎到完工，全程專業把關。" },
  { icon: "📋", title: "統包工程", desc: "一條龍統包服務，整合各項泥作工序，省心省力，一次搞定。" },
  { icon: "💧", title: "防水工程", desc: "浴室、陽台防水層塗刷，有效阻絕滲漏，工法紮實耐用。" },
];

const STATS = [
  { value: "40年", label: "工法傳承淬鍊" },
  { value: "1對1", label: "師傅親自到場" },
  { value: "台北・台中", label: "服務區域" },
  { value: "免費", label: "到府估價" },
];

const WHY_US = [
  { icon: "✅", label: "師傅親自施作" },
  { icon: "⏱", label: "準時完工交屋" },
  { icon: "💬", label: "免費到府估價" },
  { icon: "🔧", label: "客製化設計" },
];

const PROJECTS = [
  { title: "牆面磚砌施工", location: "台北・台中服務區", tag: "牆面施工", img: "/images/service-wall.jpg" },
  { title: "浴室裝修案例", location: "台北・台中服務區", tag: "浴室裝修", img: "/images/service-bathroom.jpg" },
  { title: "自地自建泥作統包", location: "台北・台中服務區", tag: "自地自建", img: "/images/service-selfbuild.jpg" },
  { title: "磁磚鋪設工程", location: "台北・台中服務區", tag: "磁磚鋪設", img: "/images/service-tile.png" },
];

const TESTIMONIALS = [
  {
    name: "醫院院長",
    role: "住宅泥作翻新客戶",
    text: "黃師傅的手藝真的沒話說，牆面粉光平整細緻，磁磚對縫也很講究，40 年的工法果然不一樣，推薦給有需要的朋友。",
  },
  {
    name: "企業副總",
    role: "自地自建客戶",
    text: "自地自建的泥作工程請黃師傅統包處理，溝通順暢、施工確實，每個環節都親自把關，讓人非常放心。",
  },
  {
    name: "陳小姐",
    role: "浴室裝修客戶",
    text: "浴室全室翻新，從拆除到防水、磁磚都做得很扎實，完工後完全沒有滲水問題，師傅態度也很親切。",
  },
  {
    name: "林先生",
    role: "商業空間客戶",
    text: "店面地坪磁磚鋪設，師傅施工快速又不馬虎，價格實在，是值得長期配合的泥作師傅。",
  },
];

const FAQS = [
  {
    q: "浴室裝修大概需要幾天完工？",
    a: "視工程範圍而定，全室翻新一般需要 7～14 天，包含拆除、防水、泥作、磁磚鋪設、衛浴安裝等步驟，實際天數會依現場狀況與師傅評估後告知。",
  },
  {
    q: "自地自建的泥作工程可以統包嗎？",
    a: "可以，我們提供自地自建統包服務，從基礎泥作到牆面、磁磚等各項工序皆可整合施作，讓您不用分別聯繫多個廠商。",
  },
  {
    q: "到府估價需要收費嗎？",
    a: "不需要，我們提供免費到府丈量估價服務，師傅親自到場了解現況後，提供詳細報價，讓您安心規劃預算。",
  },
];

const FOOTER_SERVICES = ["牆面施工", "浴室裝修", "磁磚鋪設", "自地自建", "統包工程", "防水工程"];

export default function MudworkHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ fontFamily: "var(--font-dm-sans), var(--font-montserrat), sans-serif", color: "#14151f" }}>

      {/* HERO — nav overlays directly on the photo, like the real site */}
      <section style={{
        backgroundImage: "url('/images/hero-brick.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff", position: "relative", overflow: "hidden",
      }}>
        {/* NAVBAR — transparent, overlaid on the photo */}
        <header style={{ position: "relative", zIndex: 100 }}>
          <div style={{ ...container, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 20px" }}>
            <a href="/" style={{ textDecoration: "none" }}>
              <span style={{ fontSize: "24px", fontWeight: 800, letterSpacing: "-0.5px", color: "#fff" }}>
                mudwork<span style={{ color: "#e65644" }}>.</span>
              </span>
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="選單"
              style={{
                width: 44, height: 44, background: "#e65644", border: "none", borderRadius: 6,
                display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ width: 20, height: 2, background: "#fff", display: "block" }} />
                <span style={{ width: 20, height: 2, background: "#fff", display: "block" }} />
                <span style={{ width: 20, height: 2, background: "#fff", display: "block" }} />
              </div>
            </button>
          </div>

          {menuOpen && (
            <nav style={{ background: "#fff", boxShadow: "0 8px 24px rgba(0,0,0,0.15)" }}>
              <div style={{ ...container, padding: "16px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
                {NAV_LINKS.map((link) => (
                  <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} style={{
                    color: "#14151f", textDecoration: "none", fontWeight: 600, fontSize: "15px",
                    padding: "10px 4px", borderBottom: "1px solid #eee",
                  }}>
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>
          )}
        </header>

        <div style={{ ...container, padding: "40px 20px 100px", position: "relative" }}>
          <p style={{ color: "#fff", fontWeight: 700, fontSize: "14px", marginBottom: 16, textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>
            全台最好的泥作工程廠商
          </p>
          <h1 style={{
            fontSize: "clamp(2.6rem,6vw,4.2rem)", fontWeight: 800, lineHeight: 1.1, marginBottom: 28,
            textShadow: "0 4px 20px rgba(0,0,0,0.85)",
          }}>
            泥作師傅黃師傅
          </h1>
          <p style={{
            fontSize: "16px", lineHeight: 1.9, marginBottom: 32, maxWidth: 620,
            textShadow: "0 2px 10px rgba(0,0,0,0.9)",
          }}>
            擅長磚砌、石材鋪設以及水泥地板等各項服務。透過提供高品質的施工和專業建議，我們致力於打造出既堅固耐用又美觀的空間。
            無論是住宅或商業項目，我們都以精湛的技術和用心服務，為您實現理想中的環境。
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", marginBottom: 32 }}>
            <a href="https://lin.ee/DfUKOQF" target="_blank" rel="noopener noreferrer" style={btnPrimary}>立即估價</a>
            <span style={{ fontWeight: 600, fontSize: "14px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>40年傳承淬鍊的工法</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 24 }}>
            <span style={{ fontSize: "14px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>📍 台北市中正區愛國東路26號</span>
            <span style={{ fontSize: "14px", textShadow: "0 2px 8px rgba(0,0,0,0.8)" }}>📍 台中市烏日區興祥街191巷29號</span>
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {[
              { label: "LINE", href: "https://line.me/R/ti/p/@mtj8192y" },
              { label: "Facebook", href: "https://www.facebook.com/concreteAREA/" },
              { label: "TikTok", href: "https://www.tiktok.com/@decorman2020" },
            ].map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                width: 36, height: 36, borderRadius: "50%", background: "rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontSize: "12px", fontWeight: 700, textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.4)",
              }}>{s.label[0]}</a>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO + CONTACT FORM */}
      <section id="contact" style={{ background: "#f5f5f3", padding: "88px 20px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16" style={{ ...container, alignItems: "start" }}>
          <div>
            <h2 style={h2}>提供您最好的裝修泥作工程服務</h2>
            <p style={{ ...bodyText, marginBottom: 20 }}>
              精湛技藝，用心施工，為您打造最完美的空間。我們是專業且經驗豐富的泥作工程承包商，
              在泥作工程領域深耕超過 40 年，服務對象涵蓋住宅與商業項目。
            </p>
            <a href="tel:0975091591" style={{ ...btnPrimary, display: "inline-block" }}>📞 快速取得報價：0975-091-591</a>
          </div>
          <div style={{ background: "#fff", borderRadius: 12, padding: "32px 28px", boxShadow: "0 8px 32px rgba(0,0,0,0.08)" }}>
            <p style={{ fontSize: "15px", fontWeight: 700, color: "#14151f", marginBottom: 18 }}>留下任何訊息</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <input
                placeholder="姓名 *"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
              />
              <input
                placeholder="電話 *"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={inputStyle}
              />
              <textarea
                placeholder="有什麼想說的嗎？"
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                style={{ ...inputStyle, resize: "vertical" }}
              />
              <button style={{ ...btnPrimary, border: "none", cursor: "pointer" }}>送出詢問</button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE QUICK NAV — real project photos */}
      <section style={{ background: "#fff" }}>
        <div className="grid grid-cols-2 md:grid-cols-4">
          {[
            { n: "01", title: "牆面施工", img: "/images/service-wall.jpg", href: "/services" },
            { n: "02", title: "浴室裝修", img: "/images/service-bathroom.jpg", href: "/bathroom" },
            { n: "03", title: "磁磚鋪設", img: "/images/service-tile.png", href: "/services" },
            { n: "04", title: "自地自建", img: "/images/service-selfbuild.jpg", href: "/services" },
          ].map((s) => (
            <a key={s.n} href={s.href} style={{
              position: "relative", height: 300, display: "flex", alignItems: "flex-end",
              padding: "24px", textDecoration: "none", overflow: "hidden",
              backgroundImage: `linear-gradient(0deg, rgba(10,10,12,0.85), rgba(10,10,12,0.1)), url('${s.img}')`,
              backgroundSize: "cover", backgroundPosition: "center",
            }}>
              <div>
                <div style={{ color: "#e65644", fontWeight: 800, fontSize: "13px", marginBottom: 8 }}>{s.n}.</div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "18px", marginBottom: 8 }}>{s.title}</h3>
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "12.5px", fontWeight: 600 }}>Learn More →</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ABOUT + STATS */}
      <section id="about" style={{ background: "#fff", padding: "88px 20px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16" style={{ ...container, alignItems: "center" }}>
          <div>
            <p style={sectionLabel}>關於黃師傅</p>
            <h2 style={h2}>40 年磨練，每道工序都不將就</h2>
            <p style={{ ...bodyText, marginBottom: 20 }}>
              我們是專業且經驗豐富的泥作工程承包商，在泥作工程領域深耕超過 40 年。
              服務範圍涵蓋牆面施工、浴室裝修、磁磚鋪設、自地自建與統包工程，
              案例遍布全台，深受住宅屋主與企業客戶信賴。
            </p>
            <p style={{ ...bodyText, marginBottom: 32 }}>
              我們以精湛的技術和優質材料保證每個工程的品質，注重細節，
              保證工程的安全性和耐用性，客戶的需求始終是我們首要關注的重點。
            </p>
            <a href="#contact" style={{ ...btnPrimary, display: "inline-block" }}>與我們合作</a>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {STATS.map((s) => (
              <div key={s.value} style={{
                background: "#f5f5f3", borderRadius: 8, padding: "28px 24px",
                borderLeft: "4px solid #e65644",
              }}>
                <div style={{ fontSize: "1.7rem", fontWeight: 800, color: "#e65644", lineHeight: 1 }}>{s.value}</div>
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
            <a href="/services" style={{ color: "#e65644", fontWeight: 600, fontSize: "14px" }}>查看完整服務說明 →</a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7" style={{ marginBottom: 36 }}>
            {SERVICES.map((s) => (
              <div key={s.title} style={{
                background: "#fff", borderRadius: 10, padding: "36px 28px",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
                borderBottom: "3px solid transparent",
                transition: "border-color 0.2s",
              }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderBottomColor = "#e65644")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderBottomColor = "transparent")}
              >
                <div style={{ fontSize: "2.4rem", marginBottom: 16 }}>{s.icon}</div>
                <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: 12, color: "#14151f" }}>{s.title}</h3>
                <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.75 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section style={{ background: "#fff", padding: "88px 20px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16" style={{ ...container, alignItems: "center" }}>
          <div>
            <p style={sectionLabel}>為什麼選擇我們</p>
            <h2 style={h2}>誠信施工，工法說話</h2>
            <p style={{ ...bodyText, marginBottom: 32 }}>
              我們深知一道牆的品質攸關居住安全與美觀，因此對每個細節都不妥協——
              從備料、打底、粉光到收邊，每一步都由師傅親自把關。
            </p>
            <a href="#contact" style={{ ...btnPrimary, display: "inline-block" }}>立即詢價</a>
          </div>
          <div>
            <p style={sectionLabel}>我們的承諾</p>
            <p style={{ ...bodyText, marginBottom: 28 }}>
              打造安全、美觀且耐用的空間，是我們對每位業主不變的使命，
              也是成為泥作工程行業領先者的目標。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {WHY_US.map((p) => (
                <div key={p.label} style={{
                  display: "flex", alignItems: "center", gap: 12,
                  background: "#f5f5f3", borderRadius: 8,
                  padding: "14px 18px",
                }}>
                  <span style={{ fontSize: "1.4rem" }}>{p.icon}</span>
                  <span style={{ fontSize: "14px", fontWeight: 600, color: "#14151f" }}>{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ background: "#f5f5f3", padding: "88px 20px" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={sectionLabel}>實際案例</p>
            <h2 style={h2}>近期完工工程</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <div key={p.title} style={{
                background: "#fff", borderRadius: 10, overflow: "hidden",
                boxShadow: "0 2px 16px rgba(0,0,0,0.06)",
              }}>
                <div style={{
                  height: 200,
                  backgroundImage: `linear-gradient(0deg, rgba(10,10,12,0.75), rgba(10,10,12,0.05)), url('${p.img}')`,
                  backgroundSize: "cover", backgroundPosition: "center",
                  display: "flex", alignItems: "flex-end",
                  padding: "16px 20px",
                }}>
                  <span style={{
                    background: "#e65644", color: "#fff",
                    fontSize: "11px", fontWeight: 700, padding: "4px 10px",
                    borderRadius: 4, letterSpacing: "0.5px",
                  }}>{p.tag}</span>
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <h3 style={{ color: "#14151f", fontWeight: 700, fontSize: "16px", marginBottom: 6 }}>{p.title}</h3>
                  <p style={{ color: "#e65644", fontSize: "13px", fontWeight: 600 }}>📍 {p.location}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <a href="/projects" style={btnPrimary}>查看更多案例</a>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} style={{
                background: "#f5f5f3", borderRadius: 10, padding: "32px 28px",
                borderLeft: "4px solid #e65644",
              }}>
                <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.85, marginBottom: 20 }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "linear-gradient(135deg, #e65644, #c94734)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontWeight: 800, color: "#fff", fontSize: "18px",
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "14px", color: "#14151f" }}>{t.name}</div>
                    <div style={{ fontSize: "12px", color: "#999" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: "#f5f5f3", padding: "88px 20px" }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16" style={{ ...container, alignItems: "start" }}>
          <div>
            <p style={sectionLabel}>免費估價</p>
            <h2 style={h2}>有工程需求？<br />立即聯絡我們！</h2>
            <p style={{ ...bodyText, marginBottom: 32 }}>
              留下您的姓名和需求，我們將盡快回覆，並安排師傅到場免費丈量估價。
            </p>
            <a href="#contact" style={{ ...btnPrimary, display: "inline-block" }}>回到上方留言表單</a>
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
                      fontWeight: 600, fontSize: "14.5px", color: "#14151f",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                    }}
                  >
                    {faq.q}
                    <span style={{ color: "#e65644", fontSize: "18px", flexShrink: 0, marginLeft: 12 }}>
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

            <div style={{ marginTop: 32, background: "#14151f", borderRadius: 10, padding: "24px 28px", color: "#fff" }}>
              <p style={{ fontWeight: 700, fontSize: "15px", marginBottom: 8 }}>直接聯絡師傅</p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "13.5px", lineHeight: 1.8 }}>
                📞 0975-091-591<br />
                💬 LINE：@mtj8192y<br />
                📍 台北市中正區愛國東路26號｜台中市烏日區興祥街191巷29號
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#14151f", color: "#fff", padding: "60px 20px 0" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10" style={container}>
          <div>
            <div style={{ marginBottom: 20 }}>
              <span style={{ fontSize: "22px", fontWeight: 800, letterSpacing: "-0.5px", color: "#fff" }}>
                mudwork<span style={{ color: "#e65644" }}>.</span>
              </span>
            </div>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.9, marginBottom: 20 }}>
              40 年傳承淬鍊的泥作工法，專業承接牆面施工、浴室裝修、磁磚鋪設、自地自建與統包工程。<br />
              誠信服務、品質保證，是我們對每位業主的承諾。
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
            <h4 style={{ fontWeight: 700, marginBottom: 20, color: "#e65644" }}>快速連結</h4>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { label: "服務項目", href: "/services" },
                { label: "工程實績", href: "/projects" },
                { label: "浴室裝修專案", href: "/bathroom" },
                { label: "關於我們", href: "/about" },
                { label: "聯絡我們", href: "#contact" },
              ].map((l) => (
                <li key={l.label}><a href={l.href} style={{ color: "rgba(255,255,255,0.65)", fontSize: "13.5px", textDecoration: "none" }}>{l.label}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: 20, color: "#e65644" }}>聯絡資訊</h4>
            <p style={{ fontSize: "13.5px", color: "rgba(255,255,255,0.65)", lineHeight: 2 }}>
              📞 0975-091-591<br />
              💬 LINE：@mtj8192y<br />
              📍 台北・台中
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

const btnOutline: React.CSSProperties = {
  background: "transparent",
  color: "#14151f",
  padding: "11px 26px",
  borderRadius: 6,
  fontWeight: 700,
  fontSize: "14px",
  textDecoration: "none",
  display: "inline-block",
  border: "2px solid #14151f",
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
  color: "#14151f",
  background: "#fff",
  outline: "none",
  width: "100%",
};
