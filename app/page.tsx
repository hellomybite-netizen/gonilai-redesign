"use client";

import { useEffect, useRef, useState } from "react";

type Lang = "ms" | "en";

const content = {
  ms: {
    nav: ["Produk", "Cara ia berfungsi", "Kelebihan", "Bantuan"],
    eyebrow: "Perniagaan digital, dipermudah",
    headlineA: "Satu aplikasi.", headlineB: "Pelbagai peluang.",
    intro: "Jadikan telefon anda sebuah kedai digital. Jual reload, bayar bil dan tawarkan voucher kepada pelanggan—bila-bila masa, di mana sahaja.",
    start: "Mula percuma", explore: "Masuk pengalaman", scroll: "GULIR UNTUK TEROKAI",
    signal: "Perniagaan bukan statik.", signalAccent: "Ia sentiasa bergerak.", signalBody: "Setiap reload, setiap bil dan setiap pelanggan menggerakkan kedai anda ke hadapan.",
    trust: ["Tiada yuran pendaftaran", "Transaksi masa nyata", "Dibina untuk Malaysia"],
    marquee: ["RELOAD", "BAYARAN BIL", "E-WALLET", "VOUCHER DIGITAL", "DATA"],
    storyKicker: "SATU KEDAI DALAM POKET ANDA", storyTitle: "Semua yang anda perlukan untuk berniaga.",
    features: [
      { n: "01", title: "Tambah nilai tanpa menunggu.", body: "Isi wallet melalui FPX, JomPAY atau pindahan bank, kemudian teruskan perniagaan anda." },
      { n: "02", title: "Jual produk yang pelanggan mahu.", body: "Akses reload tempatan dan antarabangsa, bil, e-wallet, data dan voucher dari satu tempat." },
      { n: "03", title: "Setiap transaksi, lebih jelas.", body: "Semak sejarah, status dan resit. Kongsi bukti pembayaran terus kepada pelanggan." },
      { n: "04", title: "Jual lebih, nikmati lebih.", body: "Kumpul mata myKedai daripada transaksi dan tebus ganjaran untuk meningkatkan keuntungan." },
    ],
    stageLabels: ["Baki wallet", "Produk popular", "Resit digital", "Mata myKedai"],
    productKicker: "PELUANG TANPA SEMPADAN", productTitle: "Apa yang boleh anda jual hari ini?", productBody: "Pilih kategori untuk melihat bagaimana satu aplikasi membuka lebih banyak peluang pendapatan.",
    products: [
      { icon: "↗", name: "Reload", sub: "10 negara", desc: "Tambah nilai nombor tempatan dan antarabangsa dengan pantas." },
      { icon: "▦", name: "Bayaran bil", sub: "Setiap hari", desc: "Bantu pelanggan menyelesaikan bil penting dari satu aplikasi." },
      { icon: "◉", name: "E-Wallet", sub: "Mudah", desc: "Tambah nilai dompet digital popular tanpa proses yang rumit." },
      { icon: "✦", name: "Voucher", sub: "Lebih pilihan", desc: "Tawarkan voucher shopping, gaming dan gaya hidup digital." },
    ],
    howKicker: "DARIPADA MUAT TURUN KE JUALAN PERTAMA", howTitle: "Empat langkah. Itu sahaja.",
    steps: [["01", "Muat turun", "Dapatkan aplikasi myKedai."], ["02", "Daftar", "Sahkan akaun melalui KYC."], ["03", "Tambah nilai", "Isi baki wallet anda."], ["04", "Mula menjual", "Layani pelanggan pertama anda."]],
    proofLead: "Kedai kecil. Cita-cita besar.", proofBody: "myKedai memberi peniaga alat digital yang ringkas untuk menjana pendapatan di mana sahaja mereka berada.",
    stats: [["104k+", "muat turun"], ["10", "negara"], ["RM3.9M", "nilai transaksi"]],
    faqKicker: "BANTUAN", faqTitle: "Perkara yang sering ditanya.",
    faqs: [["Adakah pendaftaran percuma?", "Ya. Tiada yuran pendaftaran untuk membuka akaun myKedai."], ["Bagaimana saya menambah nilai wallet?", "Gunakan FPX, JomPAY atau pindahan bank. Ketersediaan kaedah mungkin bergantung pada jumlah."], ["Mengapa KYC diperlukan?", "KYC membantu mengesahkan identiti serta melindungi akaun dan dana daripada penyalahgunaan."], ["Apakah perbezaan pengguna BASIC dan ADVANCE?", "BASIC mempunyai had transaksi harian, manakala ADVANCE membuka akses transaksi yang lebih tinggi selepas pengesahan tambahan."]],
    ctaKicker: "KEDAI ANDA SEDIA DIBUKA", ctaTitle: "Mulakan dari telefon yang sudah ada di tangan anda.", ctaBody: "Muat turun myKedai. Daftar percuma. Bina pendapatan anda sendiri.",
    download: "Muat turun di", footer: "Rakan perniagaan digital anda untuk reload, bil dan voucher.", rights: "Hak cipta terpelihara.", caveat: "Angka berdasarkan laman myKedai semasa; sahkan sebelum penerbitan.",
  },
  en: {
    nav: ["Products", "How it works", "Benefits", "Help"],
    eyebrow: "Digital business, made simple",
    headlineA: "One app.", headlineB: "Many opportunities.",
    intro: "Turn your phone into a digital store. Sell reloads, pay bills and offer vouchers to customers—anytime, anywhere.",
    start: "Start for free", explore: "Enter the experience", scroll: "SCROLL TO EXPLORE",
    signal: "Business is not static.", signalAccent: "It is always moving.", signalBody: "Every reload, every bill and every customer moves your store forward.",
    trust: ["No registration fees", "Real-time transactions", "Built for Malaysia"],
    marquee: ["RELOAD", "BILL PAYMENT", "E-WALLET", "DIGITAL VOUCHERS", "DATA"],
    storyKicker: "A STORE IN YOUR POCKET", storyTitle: "Everything you need to do business.",
    features: [
      { n: "01", title: "Top up without the wait.", body: "Fund your wallet through FPX, JomPAY or bank transfer, then get straight back to business." },
      { n: "02", title: "Sell what customers want.", body: "Access local and international reloads, bills, e-wallets, data and vouchers in one place." },
      { n: "03", title: "Every transaction, made clear.", body: "Review history, status and receipts. Share proof of payment directly with your customers." },
      { n: "04", title: "Sell more, enjoy more.", body: "Collect myKedai points from transactions and redeem rewards to grow your earnings." },
    ],
    stageLabels: ["Wallet balance", "Popular products", "Digital receipt", "myKedai points"],
    productKicker: "OPPORTUNITY WITHOUT BORDERS", productTitle: "What can you sell today?", productBody: "Choose a category to see how one app opens more ways to earn.",
    products: [
      { icon: "↗", name: "Reload", sub: "10 countries", desc: "Top up local and international numbers in moments." },
      { icon: "▦", name: "Bill payment", sub: "Every day", desc: "Help customers settle essential bills from one app." },
      { icon: "◉", name: "E-Wallet", sub: "Simple", desc: "Top up popular digital wallets without complicated steps." },
      { icon: "✦", name: "Vouchers", sub: "More choice", desc: "Offer shopping, gaming and digital lifestyle vouchers." },
    ],
    howKicker: "FROM DOWNLOAD TO FIRST SALE", howTitle: "Four steps. That is all.",
    steps: [["01", "Download", "Get the myKedai app."], ["02", "Register", "Verify your account through KYC."], ["03", "Top up", "Fund your digital wallet."], ["04", "Start selling", "Serve your first customer."]],
    proofLead: "Small store. Big ambition.", proofBody: "myKedai gives merchants simple digital tools to earn wherever they are.",
    stats: [["104k+", "downloads"], ["10", "countries"], ["RM3.9M", "transaction value"]],
    faqKicker: "HELP", faqTitle: "Things people often ask.",
    faqs: [["Is registration free?", "Yes. There is no registration fee to open a myKedai account."], ["How do I fund my wallet?", "Use FPX, JomPAY or a bank transfer. Method availability may depend on the amount."], ["Why is KYC required?", "KYC helps verify identity and protects accounts and funds against misuse."], ["What is the difference between BASIC and ADVANCE?", "BASIC has a daily transaction limit, while ADVANCE enables higher transaction access after additional verification."]],
    ctaKicker: "YOUR STORE IS READY TO OPEN", ctaTitle: "Start with the phone already in your hand.", ctaBody: "Download myKedai. Register free. Build an income of your own.",
    download: "Download on", footer: "Your digital business partner for reloads, bills and vouchers.", rights: "All rights reserved.", caveat: "Figures are based on the current myKedai site; verify before production release.",
  },
};

function Phone({ active, labels }: { active: number; labels: string[] }) {
  return <div className="device-wrap" aria-live="polite">
    <div className="device-glow" />
    <div className="device">
      <div className="device-notch" />
      <div className="device-screen">
        <div className="app-header"><span className="mini-logo">K</span><b>myKedai</b><i>•••</i></div>
        <div className="screen-label"><span>0{active + 1}</span>{labels[active]}</div>
        {active === 0 && <div className="screen-scene wallet-scene"><small>AVAILABLE BALANCE</small><strong>RM 478.15</strong><button>+ TOP UP</button><div className="wave" /></div>}
        {active === 1 && <div className="screen-scene product-scene">{["↗", "▦", "◉", "✦", "#", "+"].map((x, i) => <div key={i}><span>{x}</span><small>{["Reload", "Bills", "Wallet", "Voucher", "Data", "More"][i]}</small></div>)}</div>}
        {active === 2 && <div className="screen-scene receipt-scene"><div className="success">✓</div><b>TRANSACTION SUCCESSFUL</b><strong>RM 30.00</strong><p>Reload Mobile · 6012 345 6789</p><button>SHARE RECEIPT</button></div>}
        {active === 3 && <div className="screen-scene points-scene"><span>MY POINTS</span><strong>2,480</strong><div className="coin">K</div><button>REDEEM POINTS</button></div>}
        <div className="app-tabs"><span>⌂</span><span>◫</span><span>◎</span><span>◌</span></div>
      </div>
    </div>
  </div>;
}

function StoreButton({ store, label }: { store: string; label: string }) {
  const href = store === "Google Play" ? "https://play.google.com/store/apps/details?id=hash.myriatek.telinmy.dealer" : "https://apps.apple.com/id/app/mykedai/id1396978009";
  return <a className="store-button" href={href} target="_blank" rel="noreferrer"><span>{store === "Google Play" ? "▶" : "●"}</span><small>{label}<b>{store}</b></small></a>;
}

function KineticCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    let frame = 0;
    let animation = 0;
    let pointerX = .65;
    let pointerY = .45;
    const resize = () => {
      const ratio = Math.min(devicePixelRatio, 2);
      canvas.width = innerWidth * ratio;
      canvas.height = innerHeight * ratio;
      canvas.style.width = innerWidth + "px";
      canvas.style.height = innerHeight + "px";
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };
    const move = (event: PointerEvent) => { pointerX = event.clientX / innerWidth; pointerY = event.clientY / innerHeight; };
    const draw = () => {
      const width = innerWidth;
      const height = innerHeight;
      context.clearRect(0, 0, width, height);
      context.globalCompositeOperation = "lighter";
      for (let ribbon = 0; ribbon < 7; ribbon++) {
        const phase = frame * .008 + ribbon * .62;
        const startY = height * (.23 + ribbon * .075);
        context.beginPath();
        context.moveTo(-80, startY + Math.sin(phase) * 35);
        for (let x = -80; x <= width + 80; x += 38) {
          const normalized = x / width;
          const pull = Math.exp(-Math.pow(normalized - pointerX, 2) * 8) * (pointerY - .5) * 220;
          const y = startY + Math.sin(normalized * 7 + phase) * (60 + ribbon * 4) + pull;
          context.lineTo(x, y);
        }
        const gradient = context.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, "rgba(237,48,40,0)");
        gradient.addColorStop(.35, "rgba(237,48,40,.18)");
        gradient.addColorStop(.62, ribbon % 2 ? "rgba(255,180,74,.75)" : "rgba(255,62,42,.72)");
        gradient.addColorStop(1, "rgba(111,70,255,0)");
        context.strokeStyle = gradient;
        context.lineWidth = ribbon === 3 ? 2.2 : .7;
        context.shadowColor = ribbon % 2 ? "#ffb14a" : "#ed3028";
        context.shadowBlur = ribbon === 3 ? 26 : 10;
        context.stroke();
      }
      context.globalCompositeOperation = "source-over";
      frame++;
      animation = requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener("resize", resize); window.addEventListener("pointermove", move);
    return () => { cancelAnimationFrame(animation); window.removeEventListener("resize", resize); window.removeEventListener("pointermove", move); };
  }, []);
  return <canvas className="kinetic-canvas" ref={canvasRef} aria-hidden="true" />;
}

export default function Home() {
  const [lang, setLang] = useState<Lang>("ms");
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const t = content[lang];

  useEffect(() => {
    const onScroll = () => {
      document.documentElement.style.setProperty("--scroll-y", String(window.scrollY));
      document.documentElement.style.setProperty("--progress", String(Math.min(1, window.scrollY / (document.body.scrollHeight - innerHeight))));
    };
    const reveal = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((el) => reveal.observe(el));
    const featureObserver = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) setActiveFeature(Number((entry.target as HTMLElement).dataset.feature)); }), { rootMargin: "-35% 0px -45% 0px", threshold: 0 });
    document.querySelectorAll("[data-feature]").forEach((el) => featureObserver.observe(el));
    window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
    return () => { window.removeEventListener("scroll", onScroll); reveal.disconnect(); featureObserver.disconnect(); };
  }, []);

  const moveHero = (event: React.PointerEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--mx", String((event.clientX - rect.left) / rect.width - .5));
    event.currentTarget.style.setProperty("--my", String((event.clientY - rect.top) / rect.height - .5));
  };

  return <main>
    <div className="progress-bar" />
    <header className="site-header">
      <a className="brand" href="#top"><img className="brand-logo" src="/mykedai-logo-mobile.png" alt="myKedai" /></a>
      <nav>{t.nav.map((item, i) => <a key={item} href={["#products", "#story", "#how", "#faq"][i]}>{item}</a>)}</nav>
      <div className="header-tools"><div className="lang-switch" aria-label="Language"><button className={lang === "ms" ? "active" : ""} onClick={() => setLang("ms")}>BM</button><button className={lang === "en" ? "active" : ""} onClick={() => setLang("en")}>EN</button></div><a className="round-cta" href="#download">{t.start}<span>↗</span></a></div>
    </header>

    <section className="hero" id="top" ref={heroRef} onPointerMove={moveHero}>
      <KineticCanvas />
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-copy reveal">
        <p className="eyebrow"><span>●</span>{t.eyebrow}</p>
        <h1><span>{t.headlineA}</span><em>{t.headlineB}</em></h1>
        <p className="hero-intro">{t.intro}</p>
        <div className="hero-actions"><a className="primary-btn" href="#download">{t.start}<span>↗</span></a><a className="text-btn" href="#story">{t.explore}<span>↓</span></a></div>
      </div>
      <div className="hero-object" aria-hidden="true">
        <div className="object-ring ring-one"/><div className="object-ring ring-two"/><div className="object-ring ring-three"/>
        <div className="digital-coin"><div className="coin-face"><span>K</span><small>MYKEDAI<br/>DIGITAL STORE</small></div><div className="coin-edge"/></div>
        <div className="object-label label-a"><span>01</span> RELOAD <b>↗</b></div>
        <div className="object-label label-b"><span>02</span> BILLS <b>↗</b></div>
        <div className="object-label label-c"><span>03</span> VOUCHER <b>↗</b></div>
      </div>
      <div className="hero-bottom"><p>{t.trust.map(x => <span key={x}>✓ {x}</span>)}</p><a href="#story">{t.scroll}<i>↓</i></a></div>
    </section>

    <div className="marquee" aria-hidden="true"><div>{[...t.marquee, ...t.marquee].map((x, i) => <span key={i}>{x}<i>✦</i></span>)}</div></div>

    <section className="signal-section">
      <div className="signal-noise" />
      <p className="signal-index">01—MOTION / GERAKAN</p>
      <div className="signal-copy reveal"><h2>{t.signal}<br/><em>{t.signalAccent}</em></h2><p>{t.signalBody}</p></div>
      <div className="signal-orb" aria-hidden="true"><div/><span>K</span></div>
      <div className="signal-readout"><span>LIVE</span><b>∞</b><small>TRANSACTIONS<br/>IN MOTION</small></div>
    </section>

    <section className="story" id="story">
      <div className="story-stage"><div className="story-heading"><p>{t.storyKicker}</p><h2>{t.storyTitle}</h2></div><Phone active={activeFeature} labels={t.stageLabels}/><div className="story-index"><b>0{activeFeature + 1}</b><span>/04</span></div></div>
      <div className="story-copy">{t.features.map((feature, i) => <article data-feature={i} key={feature.n}><span>{feature.n}</span><h3>{feature.title}</h3><p>{feature.body}</p></article>)}</div>
    </section>

    <section className="product-lab" id="products">
      <div className="lab-head reveal"><p>{t.productKicker}</p><h2>{t.productTitle}</h2><span>{t.productBody}</span></div>
      <div className="lab-window reveal">
        <div className="lab-menu">{t.products.map((product, i) => <button key={product.name} className={activeProduct === i ? "active" : ""} onClick={() => setActiveProduct(i)}><span>0{i+1}</span>{product.name}</button>)}</div>
        <div className="lab-card"><div className="lab-symbol">{t.products[activeProduct].icon}</div><div><small>{t.products[activeProduct].sub}</small><h3>{t.products[activeProduct].name}</h3><p>{t.products[activeProduct].desc}</p></div><span className="lab-arrow">↗</span></div>
      </div>
    </section>

    <section className="how" id="how">
      <div className="how-title reveal"><p>{t.howKicker}</p><h2>{t.howTitle}</h2></div>
      <div className="steps">{t.steps.map((step, i) => <article className="reveal" style={{transitionDelay: i * 80 + "ms"}} key={step[0]}><span>{step[0]}</span><div className="step-dot">{i + 1}</div><h3>{step[1]}</h3><p>{step[2]}</p></article>)}</div>
    </section>

    <section className="proof-section">
      <div className="proof-copy reveal"><p>{t.proofLead}</p><h2>{t.proofBody}</h2></div>
      <div className="stats">{t.stats.map((stat, i) => <div key={stat[0]}><span>0{i+1}</span><strong>{stat[0]}</strong><p>{stat[1]}</p></div>)}</div><small>{t.caveat}</small>
    </section>

    <section className="faq" id="faq">
      <div className="faq-title reveal"><p>{t.faqKicker}</p><h2>{t.faqTitle}</h2></div>
      <div className="faq-list">{t.faqs.map((item, i) => <details className="reveal" key={item[0]}><summary><span>0{i+1}</span>{item[0]}<i>+</i></summary><p>{item[1]}</p></details>)}</div>
    </section>

    <section className="download" id="download">
      <div className="download-rings" /><div className="download-copy reveal"><p>{t.ctaKicker}</p><h2>{t.ctaTitle}</h2><span>{t.ctaBody}</span><div><StoreButton store="Google Play" label={t.download}/><StoreButton store="App Store" label={t.download}/></div></div>
      <div className="download-device"><Phone active={1} labels={t.stageLabels}/></div>
    </section>

    <footer><a className="brand" href="#top"><img className="brand-logo" src="/mykedai-logo-mobile.png" alt="myKedai" /></a><p>{t.footer}</p><div>{t.nav.map((x,i)=><a key={x} href={["#products", "#story", "#how", "#faq"][i]}>{x}</a>)}</div><small>© 2026 myKedai. {t.rights}</small></footer>
    <a className="mobile-cta" href="#download">{t.start}<span>↗</span></a>
  </main>;
}
