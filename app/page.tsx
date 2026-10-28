"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Ketik gonilai.app",
    body: "Kamu bisa gunakan browser seperti Chrome, Opera, Mozilla, atau yang lainnya untuk akses gonilai.app.",
  },
  {
    number: "02",
    title: "Konfirmasi pembelian",
    body: "Klik tombol “Memilih Produk” untuk memilih produk yang diinginkan. Pastikan semua informasi pembelian benar, khususnya nomor telepon.",
  },
  {
    number: "03",
    title: "Pembayaran",
    body: "Sekarang kamu bisa melakukan pembayaran melalui 7-Eleven atau pembayaran online yang telah disediakan di gonilai.app.",
  },
];

type ProductBrand = {
  name: string;
  country: "ID" | "MY";
  logo?: string;
  wordmark?: string;
  tone?: string;
  wide?: boolean;
};

const products: Array<{ number: string; title: string; body: string; brands: ProductBrand[] }> = [
  {
    number: "01",
    title: "Isi Pulsa",
    body: "Isi ulang pulsa Indonesia dan Malaysia makin mudah dan hemat dengan GoNilai.",
    brands: [
      { name: "Telkomsel", logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Logo_TELKOMSEL.svg", country: "ID" },
      { name: "Indosat", logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Indosat_Ooredoo_Hutchison.png", country: "ID" },
      { name: "XL Axiata", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/XL_Axiata_2014.svg", country: "ID" },
      { name: "Smartfren", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Smartfren_logo.svg", country: "ID" },
      { name: "Celcom", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Celcom_logo.svg", country: "MY" },
      { name: "Maxis", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Maxis-logo.png", country: "MY" },
      { name: "U Mobile", wordmark: "U Mobile", country: "MY", tone: "umobile" },
      { name: "Unifi Mobile", wordmark: "unifi", country: "MY", tone: "unifi" },
    ],
  },
  {
    number: "02",
    title: "Paket Data",
    body: "Beli paket data operator Indonesia dan Malaysia agar keluarga selalu terkoneksi.",
    brands: [
      { name: "Telkomsel", logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Logo_TELKOMSEL.svg", country: "ID" },
      { name: "XL Axiata", logo: "https://upload.wikimedia.org/wikipedia/commons/2/27/XL_Axiata_2014.svg", country: "ID" },
      { name: "Smartfren", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Smartfren_logo.svg", country: "ID" },
      { name: "Celcom", logo: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Celcom_logo.svg", country: "MY" },
      { name: "Maxis", logo: "https://upload.wikimedia.org/wikipedia/commons/7/76/Maxis-logo.png", country: "MY" },
      { name: "Hotlink", wordmark: "hotlink", country: "MY", tone: "hotlink" },
    ],
  },
  {
    number: "03",
    title: "Token PLN",
    body: "Pastikan listrik selalu nyala di rumah dengan isi ulang token PLN tepat waktu.",
    brands: [
      { name: "PLN", logo: "https://upload.wikimedia.org/wikipedia/commons/2/20/Logo_PLN.svg", country: "ID", wide: true },
    ],
  },
  {
    number: "04",
    title: "Voucher",
    body: "Belanja kebutuhan harian dari Indomaret, Alfamart, Carrefour, dan pilihan lainnya.",
    brands: [
      { name: "Indomaret", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Indomaret.svg", country: "ID", wide: true },
      { name: "Alfamart", logo: "https://upload.wikimedia.org/wikipedia/commons/8/86/Alfamart_logo.svg", country: "ID", wide: true },
      { name: "Carrefour", wordmark: "Carrefour", country: "ID", tone: "carrefour", wide: true },
    ],
  },
];

function GoNilaiMessengerMark() {
  return <span className="gonilai-mark" aria-hidden="true"><img src="/gonilai/logo.png" alt="" /></span>;
}

const testimonials = [
  { quote: "Gonilai panceng OK MURAH SENANG GUNANYA MARI RAMAI2 GUNA GONILAI YG LAIN LEWAT", name: "Morsyid Morsyid", image: "/gonilai/morsyid.png" },
  { quote: "Trima kasih GONILAI sudah membantu saya ...beli pulsa PLN bisa dri malaysia", name: "momz keisha", image: "/gonilai/momz.png" },
  { quote: "Gonilai terbaek.hadiahnya ori gonila terbest💓💓💓", name: "Li samah", image: "/gonilai/li-samah.png" },
  { quote: "ya senang je sy pun dah guna Gonilai kira semenit je dah terus masuk", name: "Maria Borneo", image: "/gonilai/maria.png" },
  { quote: "pakai GoNilai emang mantap", name: "Awie Ansyah", image: "/gonilai/awie.png" },
  { quote: "senang gak usah susah2 isi sama GoNilai saja", name: "Tira Rahem", image: "/gonilai/tira.png" },
  { quote: "Alhamdulillah saya dh guna Gonilai memang baik lh buat saya. Senang mau bayar listerik atau pon isi pulsa", name: "Irma", image: "/gonilai/irma.png" },
];

const news = [
  {
    label: "PROMO",
    title: "GONILAI BIKIN MAKIN DEKAT DENGAN KELUARGA DI BULAN RAMADHAN",
    body: "Siapa pun yang isi ulang di GoNilai bisa tetap dekat dengan keluarga di momen yang istimewa.",
    href: "https://home.gonilai.my/promo-ramadhan/",
  },
  {
    label: "CERITA GONILAI",
    title: "Mudah pesannya, murah bayarnya, meriah hadiahnya dengan GoNilai",
    body: "Kenalan dengan layanan isi ulang di Malaysia yang memudahkanmu mengirim kebutuhan digital.",
    href: "https://home.gonilai.my/mudah-pesannya-murah-bayarnya-meriah-hadiahnya-dengan-gonilai/",
  },
  {
    label: "TIPS",
    title: "Kirim pulsa dan token PLN ke Indonesia lebih mudah dengan GoNilai",
    body: "Tetap terkoneksi dengan keluarga dan bantu kebutuhan rumah dari Malaysia.",
    href: "https://home.gonilai.my/kirim-pulsa-dan-token-pln-ke-indonesia-lebih-mudah-dengan-gonilai/",
  },
];

const policies = [
  {
    number: "01",
    title: "Kebijakan Refund",
    body: "Transaksi yang sudah dilakukan bersifat final dan tidak dapat dibatalkan. Jika terjadi kesalahan memasukkan nomer penerima tetapi berstatus sukses, transaksi tidak dapat dikembalikan. Transaksi berstatus gagal akan dikembalikan dalam bentuk GoNilai Credit. Nantinya pengguna GoNilai dapat melakukan transaksi baru dan melakukan pembayaran menggunakan GoNilai Credit.",
  },
  {
    number: "02",
    title: "Kebijakan Privasi",
    body: "GONILAI mengoperasikan situs web https://home.gonilai.my. Halaman ini memberi tahu Anda tentang kebijakan kami terkait pengumpulan, penggunaan, dan pengungkapan data pribadi saat Anda menggunakan Layanan kami dan pilihan yang Anda kaitkan dengan data tersebut. Kami menggunakan data Anda untuk menyediakan dan meningkatkan Layanan.",
    href: "https://home.gonilai.my/kebijakan-privasi/",
  },
  {
    number: "03",
    title: "Program Ajak Kawan",
    body: "HARAP BACA KETENTUAN PROGRAM INI DENGAN SAKSAMA. Perjanjian ini menetapkan ketentuan yang mengatur program Ajak Kawan kami. Dengan menggunakan Program Ajak Kawan, Anda menegaskan bahwa Anda menerima Perjanjian ini dan setuju untuk mematuhinya.",
    href: "https://home.gonilai.my/ketentuan-program-ajak-kawan/",
  },
  {
    number: "04",
    title: "Terms & Conditions",
    body: "These Terms and Conditions constitute a legally binding agreement made between you and GoNilai concerning your access to and use of the home.gonilai.my website and related services. By accessing the Site, you agree to be bound by these Terms and Conditions of Use.",
    href: "https://home.gonilai.my/terms-conditions/",
  },
];

const faqs = [
  ["Apakah GoNilai?", "GoNilai adalah sistem untuk pembelian produk yang disediakan melalui Facebook Messenger dan browser (website)."],
  ["Bagaimana cara daftar GoNilai?", "Buka browser di HP dan ketik gonilai.app. Klik MASUK/DAFTAR, pilih Daftar Sekarang, isi nama dan nomer telepon, lalu masukkan nomer OTP yang dikirim ke nomer terdaftar dan klik SIMPAN."],
  ["Bagaimana cara menggunakan GoNilai?", "Buka Messenger GoNilai dan tulis ‘hai’ atau kunjungi m.me/gonilai.my. Kamu juga dapat mengikuti video panduan yang tersedia di halaman GoNilai."],
  ["Apakah perlu download?", "GoNilai tidak menggunakan aplikasi. Pemilihan produk dapat dilakukan melalui Facebook Messenger atau dengan mengetik gonilai.app di web browser—kami menyarankan Google Chrome."],
  ["Transaksi saya gagal. Bagaimana saya mahu menukar nomor baru?", "Jika transaksi gagal, uang akan menjadi credit. Silakan membuat transaksi baru lalu pilih pembayaran Credit semasa pembayaran."],
  ["Macam mana cara keluar barcode?", "Bisa langsung klik link https://gonilai.app/."],
  ["PLN apa saja yang bisa dibayar di GoNilai?", "GoNilai hanya menyediakan PLN token saja. Untuk PLN bill belum tersedia untuk masa ini."],
  ["Boleh buat penggadaian di GoNilai?", "GoNilai tidak menyediakan penggadaian."],
  ["Apakah boleh kirim duit melalui GoNilai?", "GoNilai tidak menyediakan pengiriman duit."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const moveTestimonial = (direction: number) => {
    setActiveTestimonial((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  return (
    <main>
      <header className="site-header">
        <a className="logo" href="#beranda" aria-label="GoNilai — Beranda">
          <img src="/gonilai/logo.png" alt="GoNilai" />
        </a>
        <nav className={menuOpen ? "open" : ""} aria-label="Navigasi utama">
          <a href="#produk" onClick={() => setMenuOpen(false)}>Produk</a>
          <a href="#cara-beli" onClick={() => setMenuOpen(false)}>Cara Beli</a>
          <a href="#tentang" onClick={() => setMenuOpen(false)}>Tentang</a>
          <a href="#berita" onClick={() => setMenuOpen(false)}>Berita</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
        </nav>
        <a className="header-cta" href="https://gonilai.app/" target="_blank" rel="noreferrer">Coba Sekarang <GoNilaiMessengerMark /></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label="Buka navigasi">
          <span /><span />
        </button>
      </header>

      <section className="hero section-pad" id="beranda">
        <div className="hero-panel">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy reveal">
            <p className="eyebrow"><i /> PEMBAYARAN DIGITAL UNTUK SEMUA</p>
            <h1>Pembayaran online makin <em>mudah</em> dan <em>murah.</em></h1>
            <p className="hero-body">Kirim pulsa, paket data, voucher, dan token PLN untuk orang tersayang—langsung dari Malaysia.</p>
            <div className="hero-actions">
              <a className="primary-button" href="https://gonilai.app/" target="_blank" rel="noreferrer">Mulai di GoNilai <GoNilaiMessengerMark /></a>
              <a className="secondary-button" href="#cara-beli">Lihat cara beli <span>↓</span></a>
            </div>
          </div>
          <div className="hero-visual reveal">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="phone-glow" />
            <img className="app-mockup" src="/gonilai/app-mockup.webp" alt="Mockup layanan GoNilai di ponsel" />
            <div className="float-card float-seven"><b>7-Eleven</b><span>Bayar tunai di seluruh Malaysia</span></div>
            <div className="float-card float-fast"><span>TRANSAKSI</span><b>Praktis</b><small>Murah · Mudah · Meriah</small></div>
          </div>
          <div className="hero-trust">
            <span>✓ Tanpa download aplikasi</span>
            <span>✓ Bayar online atau tunai</span>
            <span>✓ Untuk keluarga di Indonesia</span>
          </div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div>{["ISI PULSA", "PAKET DATA", "TOKEN PLN", "VOUCHER BELANJA", "ISI ULANG ANTARNEGARA", "ISI PULSA", "PAKET DATA", "TOKEN PLN"].map((item, index) => <span key={index}>{item}<i>✦</i></span>)}</div>
      </div>

      <section className="how section-pad" id="cara-beli">
        <div className="section-heading reveal">
          <p className="kicker">CARA MEMBELI DI GONILAI</p>
          <h2>Tiga langkah.<br /><em>Langsung beres.</em></h2>
          <p>Yuk simak 3 langkah mudah untuk bertransaksi di GoNilai.</p>
        </div>
        <div className="step-grid">
          {steps.map((step) => (
            <article className="step-card reveal" key={step.number}>
              <span>{step.number}</span>
              <div className="step-icon">{step.number === "01" ? "⌕" : step.number === "02" ? "✓" : "RM"}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about section-pad" id="tentang">
        <div className="about-panel">
          <div className="about-intro reveal">
            <p className="kicker light">TENTANG GONILAI</p>
            <h2>Dekat dengan keluarga, <em>meski beda negara.</em></h2>
          </div>
          <div className="about-body reveal">
            <p>GoNilai adalah layanan pembelian pulsa dan voucher elektrik paling menguntungkan buat Anda yang tinggal di Malaysia dan sayang sama keluarga Anda di Indonesia.</p>
            <p>Banyak sekali produk yang bisa dibeli di GoNilai, mulai dari isi pulsa, paket internet, voucher belanja (Indomaret, Alfamart, Carrefour), token PLN, sampai produk isi ulang berbagai negara seperti Malaysia, Bangladesh, Nepal, Myanmar, dan Philippines.</p>
            <p>Bagi kamu yang mengandalkan pembayaran secara tunai, GoNilai memberikan solusi dengan pembayaran di toko 7-Eleven terdekat di seluruh Malaysia. Cukup tunjukkan barcode pembayaran, produk akan segera dikirimkan ke nomor tujuan.</p>
          </div>
          <div className="about-slogan"><span>MURAH</span><i>·</i><span>MUDAH</span><i>·</i><span>MERIAH</span></div>
        </div>
      </section>

      <section className="products section-pad" id="produk">
        <div className="section-heading product-heading reveal">
          <p className="kicker">LIST PRODUK</p>
          <h2>Satu tujuan.<br /><em>Banyak kebutuhan.</em></h2>
          <p>Pilih kebutuhanmu dan kirim manfaatnya langsung kepada keluarga atau sahabat.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className={`product-card reveal ${index === 0 ? "featured" : ""}`} key={product.title}>
              <span>{product.number}</span>
              <div className={`product-brands ${product.brands.length === 1 ? "single" : ""}`} aria-label={`Operator dan merek untuk ${product.title}`}>
                {product.brands.map((brand) => (
                  <div className={`brand-chip ${brand.wide ? "wide" : ""}`} key={brand.name} title={`${brand.name} · ${brand.country}`}>
                    <small>{brand.country}</small>
                    {brand.logo
                      ? <img src={brand.logo} alt={brand.name} loading="lazy" />
                      : <strong className={`brand-wordmark ${brand.tone}`}>{brand.wordmark}</strong>}
                  </div>
                ))}
              </div>
              <h3>{product.title}</h3>
              <p>{product.body}</p>
              <a href="https://gonilai.app/" target="_blank" rel="noreferrer" aria-label={`Beli ${product.title}`}>Pilih produk <GoNilaiMessengerMark /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="seven section-pad" id="711">
        <div className="seven-panel reveal">
          <div className="seven-copy">
            <p className="kicker">BAYAR TUNAI DI 7-ELEVEN</p>
            <h2>Tak punya rekening? <em>Tetap bisa.</em></h2>
            <p>Pilih pembayaran 7-Eleven di GoNilai, tunjukkan barcode di kasir toko terdekat di seluruh Malaysia, lalu produk akan segera dikirimkan ke nomor tujuan.</p>
            <a className="dark-button" href="https://gonilai.app/" target="_blank" rel="noreferrer">Buat barcode <GoNilaiMessengerMark /></a>
          </div>
          <div className="seven-visual" aria-hidden="true">
            <div className="barcode"><span>GONILAI</span><div>{Array.from({ length: 31 }, (_, i) => <i key={i} style={{ width: i % 4 === 0 ? 5 : i % 3 === 0 ? 3 : 2 }} />)}</div><b>7 1103 0061 450</b></div>
            <div className="seven-badge">7<span>ELEVEN</span></div>
          </div>
        </div>
      </section>

      <section className="testimonials section-pad">
        <div className="testimonial-head reveal">
          <div><p className="kicker light">APA YANG MEREKA KATAKAN</p><h2>Dipakai. Disukai.<br /><em>Diceritakan.</em></h2></div>
          <div className="slider-buttons"><button onClick={() => moveTestimonial(-1)} aria-label="Testimoni sebelumnya">←</button><button onClick={() => moveTestimonial(1)} aria-label="Testimoni berikutnya">→</button></div>
        </div>
        <div className="testimonial-stage reveal">
          <blockquote key={activeTestimonial}>
            <span>“</span>
            <p>{testimonials[activeTestimonial].quote}</p>
            <footer><img src={testimonials[activeTestimonial].image} alt={testimonials[activeTestimonial].name} /><div><b>{testimonials[activeTestimonial].name}</b><small>Pengguna GoNilai</small></div></footer>
          </blockquote>
          <div className="testimonial-index"><b>0{activeTestimonial + 1}</b><span>/ 0{testimonials.length}</span></div>
        </div>
      </section>

      <section className="news section-pad" id="berita">
        <div className="section-heading reveal"><p className="kicker">BLOG DAN BERITA</p><h2>Kabar terkini<br /><em>dari GoNilai.</em></h2></div>
        <div className="news-grid">
          {news.map((item, index) => <a className="news-card reveal" href={item.href} target="_blank" rel="noreferrer" key={item.title}>
            <div className={`news-art art-${index + 1}`}><span>{item.label}</span><b>{index === 0 ? "RAMADHAN" : index === 1 ? "GO!" : "⚡"}</b></div>
            <small>{item.label}</small><h3>{item.title}</h3><p>{item.body}</p><i>Baca berita ↗</i>
          </a>)}
        </div>
      </section>

      <section className="policies section-pad" id="kebijakan">
        <div className="policy-heading reveal"><p className="kicker">KEBIJAKAN GONILAI</p><h2>Jelas sejak awal.</h2><p>Informasi penting untuk transaksi dan penggunaan layanan GoNilai.</p></div>
        <div className="policy-list">
          {policies.map((policy) => <details className="policy-item reveal" key={policy.title}>
            <summary><span>{policy.number}</span><h3>{policy.title}</h3><i>+</i></summary>
            <div><p>{policy.body}</p>{policy.href && <a href={policy.href} target="_blank" rel="noreferrer">Selengkapnya ↗</a>}</div>
          </details>)}
        </div>
      </section>

      <section className="faq section-pad" id="faq">
        <div className="faq-heading reveal"><p className="kicker">FAQ GONILAI</p><h2>Yang sering<br /><em>ditanyakan.</em></h2><p>Masih butuh bantuan? Hubungi GoNilai Caroline melalui Messenger.</p><a href="https://www.facebook.com/gonilaics.my" target="_blank" rel="noreferrer"><GoNilaiMessengerMark /> Chat dengan Caroline</a></div>
        <div className="faq-list">
          {faqs.map((faq, index) => <details className="reveal" key={faq[0]}>
            <summary><span>{String(index + 1).padStart(2, "0")}</span>{faq[0]}<i>+</i></summary><p>{faq[1]}</p>
          </details>)}
        </div>
      </section>

      <section className="contact section-pad" id="kontak">
        <div className="contact-panel reveal">
          <p className="kicker light">HUBUNGI GONILAI</p>
          <h2>Siap kirim sesuatu yang berarti?</h2>
          <a className="contact-cta" href="https://gonilai.app/" target="_blank" rel="noreferrer">Coba GoNilai <GoNilaiMessengerMark /></a>
          <div className="contact-info">
            <p>Suite 13-08, Level 13, Menara Q Sentral<br />Jalan Stesen Sentral 2, 50470<br />Kuala Lumpur, Malaysia</p>
            <p>Company registration number: 1052400-A<br /><a href="mailto:rpg@telin.my">rpg@telin.my</a><br /><a href="tel:+60330036145">+603 30036145</a> (office hour only)</p>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <img src="/gonilai/logo.png" alt="GoNilai" />
        <p>Pembayaran online makin mudah dan murah dengan GoNilai.</p>
        <div><a href="#produk">Produk</a><a href="#kebijakan">Kebijakan</a><a href="#faq">FAQ</a><a href="#kontak">Kontak</a></div>
        <small>2020 © GoNilai. All Rights Reserved · Developed by GoNilai Team</small>
      </footer>
    </main>
  );
}
