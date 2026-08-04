const products = [
  { icon: "↗", name: "Reload", note: "Malaysia & antarabangsa" },
  { icon: "▣", name: "Bayaran bil", note: "Urus bil dengan mudah" },
  { icon: "◈", name: "E-Wallet", note: "Tambah nilai dompet digital" },
  { icon: "✦", name: "Voucher", note: "Shopping & gaming" },
];

const benefits = [
  ["01", "Percuma untuk bermula", "Tiada yuran pendaftaran. Buka akaun dan mula bina perniagaan digital anda."],
  ["02", "Transaksi masa nyata", "Semak pembelian dan sejarah transaksi dengan jelas, pada bila-bila masa."],
  ["03", "Lebih banyak cara top up", "Tambah nilai wallet melalui FPX, JomPAY atau pindahan bank."],
  ["04", "Ganjaran untuk setiap jualan", "Kumpul mata myKedai dan tebus untuk menikmati lebih banyak keuntungan."],
];

const steps = [
  ["1", "Muat turun aplikasi", "Dapatkan myKedai di Google Play atau App Store."],
  ["2", "Daftar & sahkan akaun", "Lengkapkan pendaftaran dan proses pengesahan KYC."],
  ["3", "Tambah nilai wallet", "Pilih kaedah pembayaran yang paling mudah untuk anda."],
  ["4", "Mula menjual", "Jual reload, bil dan voucher kepada pelanggan anda."],
];

const faqs = [
  ["Adakah pendaftaran myKedai percuma?", "Ya. Tiada yuran pendaftaran untuk membuka akaun myKedai."],
  ["Apakah yang boleh saya jual?", "Anda boleh menawarkan reload prabayar, pembayaran bil, tambah nilai e-wallet, data dan pelbagai voucher digital."],
  ["Bagaimana saya menambah nilai wallet?", "Wallet boleh ditambah nilai melalui FPX, JomPAY atau pindahan bank. Kaedah yang tersedia mungkin berbeza mengikut jumlah."],
  ["Mengapa saya perlu melengkapkan KYC?", "KYC membantu mengesahkan identiti pengguna serta melindungi akaun dan dana daripada penyalahgunaan."],
];

function StoreButton({ store, href }: { store: string; href: string }) {
  return (
    <a className="store-button" href={href} target="_blank" rel="noreferrer" aria-label={"Muat turun myKedai di " + store}>
      <span className="store-icon" aria-hidden="true">{store === "Google Play" ? "▶" : "●"}</span>
      <span><small>Muat turun di</small><strong>{store}</strong></span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="myKedai halaman utama">
          <span className="brand-mark" aria-hidden="true">K</span>
          <span>myKedai</span>
        </a>
        <nav aria-label="Navigasi utama">
          <a href="#produk">Produk</a>
          <a href="#cara">Cara bermula</a>
          <a href="#kelebihan">Kelebihan</a>
          <a href="#faq">Bantuan</a>
        </nav>
        <a className="header-cta" href="#mula">Mula percuma <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Platform untuk peniaga Malaysia</div>
          <h1>Kedai digital anda,<br /><em>dalam satu aplikasi.</em></h1>
          <p>Jual reload, bayar bil dan tawarkan voucher digital kepada pelanggan—di mana sahaja anda berada.</p>
          <div className="hero-actions" id="mula">
            <StoreButton store="Google Play" href="https://play.google.com/store/apps/details?id=hash.myriatek.telinmy.dealer" />
            <StoreButton store="App Store" href="https://apps.apple.com/id/app/mykedai/id1396978009" />
          </div>
          <div className="trust-line"><span>✓ Tiada yuran pendaftaran</span><span>✓ Transaksi masa nyata</span></div>
        </div>

        <div className="hero-visual" aria-label="Pratinjau aplikasi myKedai">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="profit-card"><small>Potensi keuntungan</small><strong>Sehingga 10%</strong><span>pada produk terpilih</span></div>
          <div className="phone">
            <div className="speaker" />
            <div className="phone-screen">
              <div className="app-top"><span className="mini-mark">K</span><strong>myKedai</strong><span>•••</span></div>
              <p className="hello">Selamat datang 👋</p>
              <div className="wallet"><span>Baki wallet</span><strong>RM 478.15</strong><button type="button">+ Top up</button></div>
              <div className="app-grid">
                {products.map((product) => <div key={product.name}><span>{product.icon}</span><small>{product.name}</small></div>)}
              </div>
              <div className="recent"><span>Transaksi terkini</span><strong>Lihat semua</strong></div>
              <div className="transaction"><i>↗</i><span><strong>Reload Mobile</strong><small>Berjaya • Hari ini</small></span><b>RM 30.00</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="proof" aria-label="Pencapaian myKedai">
        <p>Dipilih oleh komuniti peniaga digital</p>
        <div><strong>104k+</strong><span>Muat turun</span></div>
        <div><strong>10</strong><span>Negara disokong</span></div>
        <div><strong>RM3.9M</strong><span>Nilai transaksi</span></div>
        <small>Angka berdasarkan laman myKedai semasa; sahkan sebelum penerbitan.</small>
      </section>

      <section className="products section" id="produk">
        <div className="section-heading">
          <span className="kicker">APA YANG BOLEH DIJUAL</span>
          <h2>Lebih banyak produk.<br />Lebih banyak peluang.</h2>
          <p>Satu wallet untuk mengurus produk digital yang pelanggan anda perlukan setiap hari.</p>
        </div>
        <div className="product-grid">
          {products.map((product, index) => (
            <article className={index === 0 ? "featured" : ""} key={product.name}>
              <span className="product-icon" aria-hidden="true">{product.icon}</span>
              <div><h3>{product.name}</h3><p>{product.note}</p></div>
              <span className="arrow" aria-hidden="true">↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className="steps section" id="cara">
        <div className="section-heading light">
          <span className="kicker">MUDAH UNTUK BERMULA</span>
          <h2>Dari daftar hingga jualan pertama.</h2>
          <p>Empat langkah ringkas untuk membuka kedai digital anda.</p>
        </div>
        <div className="step-grid">
          {steps.map((step) => <article key={step[0]}><span>{step[0]}</span><h3>{step[1]}</h3><p>{step[2]}</p></article>)}
        </div>
      </section>

      <section className="benefits section" id="kelebihan">
        <div className="benefit-intro">
          <span className="kicker">DIBINA UNTUK PENIAGA</span>
          <h2>Berniaga dengan lebih mudah dan yakin.</h2>
          <p>Alat yang ringkas untuk membantu anda melayan pelanggan, menjejak transaksi dan mengembangkan pendapatan.</p>
          <a href="#mula">Buka kedai digital anda <span aria-hidden="true">→</span></a>
        </div>
        <div className="benefit-list">
          {benefits.map((benefit) => <article key={benefit[0]}><span>{benefit[0]}</span><div><h3>{benefit[1]}</h3><p>{benefit[2]}</p></div></article>)}
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="section-heading">
          <span className="kicker">SOALAN LAZIM</span>
          <h2>Ada soalan?<br />Kami ada jawapan.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => <details key={faq[0]}><summary>{faq[0]}<span aria-hidden="true">+</span></summary><p>{faq[1]}</p></details>)}
        </div>
      </section>

      <section className="final-cta">
        <span className="kicker">BERNIAGA DARI MANA SAHAJA</span>
        <h2>Sedia membuka kedai digital anda?</h2>
        <p>Muat turun myKedai dan mulakan secara percuma hari ini.</p>
        <div className="hero-actions">
          <StoreButton store="Google Play" href="https://play.google.com/store/apps/details?id=hash.myriatek.telinmy.dealer" />
          <StoreButton store="App Store" href="https://apps.apple.com/id/app/mykedai/id1396978009" />
        </div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#top"><span className="brand-mark">K</span><span>myKedai</span></a>
        <p>Rakan perniagaan digital anda untuk reload, bayaran bil dan voucher.</p>
        <div><a href="#produk">Produk</a><a href="#cara">Cara bermula</a><a href="#faq">Bantuan</a></div>
        <small>© 2026 myKedai. Hak cipta terpelihara.</small>
      </footer>
      <a className="mobile-cta" href="#mula">Mula percuma <span>↗</span></a>
    </main>
  );
}
