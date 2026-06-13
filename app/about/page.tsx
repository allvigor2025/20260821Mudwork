"use client";

const NAV_LINKS = [
  { label: "首頁", href: "/" },
  { label: "服務項目", href: "/services" },
  { label: "工程實績", href: "/projects" },
  { label: "關於我們", href: "/about" },
  { label: "最新消息", href: "/news" },
  { label: "聯絡我們", href: "/#contact" },
];

const VALUES = [
  { icon: "🔍", title: "誠信報價", desc: "施工前提供詳細書面估價，工程項目逐項列出，無隱藏費用，報多少算多少。" },
  { icon: "🏆", title: "品質第一", desc: "每道工序都有師傅現場監督，用料不偷工減料，完工標準比業界平均高一個等級。" },
  { icon: "⏱", title: "準時交工", desc: "簽約前確認工期，施工中如有延誤主動告知，盡一切努力在約定時間內完成。" },
  { icon: "🔧", title: "完工保固", desc: "防水工程保固 2–5 年，其餘工程保固 1 年，保固期內發生問題免費到場處理。" },
];

const MILESTONES = [
  { year: "2009", event: "創立冠誠泥作工程行，初期專注雙北住宅磁磚工程。" },
  { year: "2013", event: "業務擴展至防水與粉光工程，開始承接建設公司新建案。" },
  { year: "2017", event: "服務範圍延伸至桃園、台中，工班人數增至 15 人。" },
  { year: "2021", event: "累積完工案例突破 200 件，獲多家室內設計公司長期配合。" },
  { year: "2024", event: "導入數位估價系統，提供業主線上詢價、追蹤施工進度服務。" },
];

const TEAM = [
  { name: "陳冠誠", role: "創辦人・總師傅", desc: "從學徒做起，18 歲入行，超過 25 年泥作施工經驗，親自督導每個案場。" },
  { name: "林建宏", role: "工務主任", desc: "負責工程進度與品質控管，擁有乙級建築工程技術士資格。" },
  { name: "王淑芬", role: "估價・客服", desc: "負責到府丈量估價、客戶溝通與施工協調，讓業主省心。" },
];

const CERTIFICATIONS = [
  "甲級建築工程技術士",
  "乙級裝修工程技術士",
  "防水工程施工認證",
  "職業安全衛生教育訓練合格",
];

const FOOTER_SERVICES = ["水泥粉光工程", "磁磚貼附工程", "防水施工", "地坪整平打底", "拆除清運服務", "砌磚隔間", "洗石子抿石子", "舊屋翻新"];

export default function AboutPage() {
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
                color: link.label === "關於我們" ? "#ffb600" : "#252525",
                textDecoration: "none", fontWeight: link.label === "關於我們" ? 700 : 500, fontSize: "14px",
                borderBottom: link.label === "關於我們" ? "2px solid #ffb600" : "2px solid transparent", paddingBottom: "2px",
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
            <span style={{ color: "#ffb600", fontSize: "13px", fontWeight: 600 }}>關於我們</span>
          </div>
          <h1 style={{ fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.5px", lineHeight: 1.1, marginBottom: 16 }}>關於冠誠</h1>
          <p style={{ fontSize: "15px", color: "rgba(255,255,255,0.65)", maxWidth: 540, lineHeight: 1.85 }}>
            從一把鏝刀起家，15 年來我們用每一道工序證明：好的泥作，是一棟房子最重要的基礎。
          </p>
        </div>
      </section>

      {/* STORY */}
      <section style={{ background: "#fff", padding: "88px 20px" }}>
        <div style={{ ...container, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }}>
          <div>
            <p style={sectionLabel}>我們的故事</p>
            <h2 style={h2}>從學徒到師傅，<br />用 15 年換來的口碑</h2>
            <p style={{ ...bodyText, marginBottom: 20 }}>
              創辦人陳冠誠師傅 18 歲入行，從搬砂漿的學徒做起，跟著老師傅學習每一道工序。
              看著一面面牆從毛坯變得平整光滑，他深刻體會到泥作師傅這份工作的重量——
              那是一個家庭日後生活的基礎。
            </p>
            <p style={{ ...bodyText, marginBottom: 20 }}>
              2009 年，帶著累積的手藝與口碑，他創立了冠誠泥作工程行。
              一開始只有三個人，接的是鄰居介紹的小工程；如今，我們有 15 人的工班，
              每年完成超過 60 個案場，服務範圍涵蓋雙北、桃園、台中。
            </p>
            <p style={{ ...bodyText }}>
              這些年不論工程大小，我們的態度從未改變：<strong style={{ color: "#252525" }}>用自己家的標準，做每一面牆。</strong>
            </p>
          </div>
          <div style={{ background: "#f5f5f3", borderRadius: 12, padding: "40px", display: "flex", flexDirection: "column", gap: 24 }}>
            <div style={{ borderLeft: "4px solid #ffb600", paddingLeft: 20 }}>
              <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#ffb600" }}>15年</div>
              <div style={{ fontSize: "14px", color: "#666", marginTop: 4 }}>專業泥作施工經驗</div>
            </div>
            <div style={{ borderLeft: "4px solid #ffb600", paddingLeft: 20 }}>
              <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#ffb600" }}>300+</div>
              <div style={{ fontSize: "14px", color: "#666", marginTop: 4 }}>累積完工案例</div>
            </div>
            <div style={{ borderLeft: "4px solid #ffb600", paddingLeft: 20 }}>
              <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#ffb600" }}>98%</div>
              <div style={{ fontSize: "14px", color: "#666", marginTop: 4 }}>客戶好評率</div>
            </div>
            <div style={{ borderLeft: "4px solid #ffb600", paddingLeft: 20 }}>
              <div style={{ fontSize: "2.4rem", fontWeight: 800, color: "#ffb600" }}>15人</div>
              <div style={{ fontSize: "14px", color: "#666", marginTop: 4 }}>專業施工工班</div>
            </div>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ background: "#fff", borderRadius: 10, padding: "36px 28px", borderTop: "4px solid #ffb600", textAlign: "center" }}>
                <div style={{ fontSize: "2.4rem", marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: "17px", marginBottom: 12, color: "#252525" }}>{v.title}</h3>
                <p style={{ fontSize: "14px", color: "#666", lineHeight: 1.75 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MILESTONES */}
      <section style={{ background: "#252525", padding: "88px 20px" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ ...sectionLabel, color: "#ffb600" }}>發展歷程</p>
            <h2 style={{ ...h2, color: "#fff" }}>一步一腳印</h2>
          </div>
          <div style={{ position: "relative", maxWidth: 700, margin: "0 auto" }}>
            <div style={{ position: "absolute", left: 72, top: 0, bottom: 0, width: 2, background: "rgba(255,182,0,0.3)" }} />
            {MILESTONES.map((m, i) => (
              <div key={m.year} style={{ display: "flex", gap: 32, marginBottom: i < MILESTONES.length - 1 ? 40 : 0, alignItems: "flex-start", position: "relative" }}>
                <div style={{ minWidth: 64, textAlign: "right" }}>
                  <span style={{ fontSize: "14px", fontWeight: 700, color: "#ffb600" }}>{m.year}</span>
                </div>
                <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#ffb600", marginTop: 2, flexShrink: 0, zIndex: 1 }} />
                <div style={{ paddingBottom: 8 }}>
                  <p style={{ fontSize: "14.5px", color: "rgba(255,255,255,0.75)", lineHeight: 1.75 }}>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section style={{ background: "#fff", padding: "88px 20px" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={sectionLabel}>我們的團隊</p>
            <h2 style={h2}>認識冠誠的人</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }}>
            {TEAM.map((m) => (
              <div key={m.name} style={{ background: "#f5f5f3", borderRadius: 10, padding: "40px 28px", textAlign: "center" }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", margin: "0 auto 20px", background: "linear-gradient(135deg, #ffb600, #e09600)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, color: "#252525", fontSize: "24px" }}>
                  {m.name[0]}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: "17px", marginBottom: 4 }}>{m.name}</h3>
                <p style={{ color: "#ffb600", fontSize: "12px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" as const, marginBottom: 14 }}>{m.role}</p>
                <p style={{ fontSize: "13.5px", color: "#666", lineHeight: 1.75 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ background: "#f5f5f3", padding: "72px 20px", borderTop: "1px solid #e8e8e8" }}>
        <div style={container}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={sectionLabel}>資格認證</p>
            <h2 style={h2}>專業有憑有據</h2>
          </div>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            {CERTIFICATIONS.map((c) => (
              <div key={c} style={{ background: "#fff", border: "1.5px solid #ffb600", borderRadius: 8, padding: "14px 24px", fontSize: "14px", fontWeight: 600, color: "#252525", display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ color: "#ffb600" }}>✓</span> {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "linear-gradient(135deg, #ffb600, #e09600)", padding: "72px 20px", textAlign: "center" }}>
        <div style={container}>
          <h2 style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#252525", marginBottom: 16 }}>
            歡迎與我們合作
          </h2>
          <p style={{ fontSize: "15px", color: "rgba(37,37,37,0.75)", marginBottom: 32, maxWidth: 480, margin: "0 auto 32px" }}>
            不論工程大小，皆可聯繫。師傅免費到場評估，提供透明書面報價。
          </p>
          <a href="/#contact" style={{ background: "#252525", color: "#fff", padding: "14px 36px", borderRadius: 6, fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-block" }}>
            立即免費諮詢
          </a>
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
const h2: React.CSSProperties = { fontSize: "clamp(1.6rem,3vw,2.2rem)", fontWeight: 800, color: "#252525", lineHeight: 1.2, letterSpacing: "-0.5px", marginBottom: 16 };
const bodyText: React.CSSProperties = { fontSize: "15px", color: "#666", lineHeight: 1.85 };
