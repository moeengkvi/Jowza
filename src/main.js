import React, { useMemo, useState } from "https://esm.sh/react@18.3.1";
import { createRoot } from "https://esm.sh/react-dom@18.3.1/client";
import htm from "https://esm.sh/htm@3.1.1";
const html = htm.bind(React.createElement);

const photos = {
  hero: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1600&q=85",
  saffron: "https://images.unsplash.com/photo-1615485500704-8e990f9900f8?auto=format&fit=crop&w=900&q=82",
  turmeric: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=900&q=82",
  pepper: "https://images.unsplash.com/photo-1599909533730-f9d5f8e7b8a4?auto=format&fit=crop&w=900&q=82",
  cinnamon: "https://images.unsplash.com/photo-1603905179139-3b5a3d3c9b9d?auto=format&fit=crop&w=900&q=82",
  herbs: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1000&q=82",
  cooking: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=82",
  kitchen: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=82"
};
const products = [
  {id:1,name:"زعفران سرگل",category:"تکی",desc:"رنگ و عطر دلنشین برای برنج، دسر و نوشیدنی",image:photos.saffron,tag:"محبوب"},
  {id:2,name:"زردچوبه آسیاب‌شده",category:"تکی",desc:"همراه همیشگی غذاهای اصیل ایرانی",image:photos.turmeric,tag:"پرکاربرد"},
  {id:3,name:"فلفل سیاه",category:"تکی",desc:"چاشنی گرم و خوش‌عطر برای انواع غذا",image:photos.pepper,tag:"کلاسیک"},
  {id:4,name:"چوب دارچین",category:"تکی",desc:"عطری گرم برای دمنوش، شیرینی و خوراک",image:photos.cinnamon,tag:"معطر"},
  {id:5,name:"ادویه پلویی",category:"ترکیبی",desc:"ترکیبی برای عطرآگین‌کردن پلوهای خانگی",image:photos.hero,tag:"ویژه"},
  {id:6,name:"چاشنی سبزیجات",category:"ترکیبی",desc:"برای مزه‌دارکردن سبزیجات و غذاهای سبک",image:photos.herbs,tag:"متنوع"}
];
const nav = [["خانه","home"],["محصولات","products"],["داستان ما","about"],["مجله طعم","journal"],["تماس با ما","contact"]];
function App(){
  const [filter,setFilter]=useState("همه");
  const [cart,setCart]=useState([]);
  const [menuOpen,setMenuOpen]=useState(false);
  const visible=useMemo(()=>filter==="همه"?products:products.filter(p=>p.category===filter),[filter]);
  const orderText=encodeURIComponent("سلام جوزا اسپایس، برای سفارش این محصولات راهنمایی می‌خواهم:\n"+cart.map(p=>p.name).join("، "));
  const whatsapp="https://wa.me/989037822307?text="+orderText;
  return html`
    <div className="announcement">از عطر ادویه تا خاطره‌ی یک غذای به‌یادماندنی <span>✦</span> همراه سفره‌های ایرانی</div>
    <header className="header">
      <a className="brand" href="#home" aria-label="جوزا اسپایس"><span className="brand-mark">ج</span><span>جوزا<span className="brand-light"> اسپایس</span><small>JOWZA SPICE</small></span></a>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="باز کردن منو">☰</button>
      <nav className={menuOpen?"nav-links open":"nav-links"}>{nav.map(([label,id])=>html`<a href=${"#"+id} onClick={()=>setMenuOpen(false)}>${label}</a>`)}</nav>
      <a className="header-cta" href="#products">دیدن محصولات <span>←</span></a>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><i></i> قصه‌ای از دل عطرها</div>
          <h1>یک ذره ادویه،<br/><em>یک دنیا</em> تفاوت.</h1>
          <p>به دنیای رنگارنگ جوزا اسپایس خوش آمدید؛ جایی که عطر ادویه‌های خوش‌طعم، حال‌وهوای آشپزی ایرانی را دلنشین‌تر می‌کند.</p>
          <div className="hero-actions"><a className="button button-dark" href="#products">کشف محصولات <span>←</span></a><a className="text-link" href="#about">داستان جوزا را بخوانید</a></div>
          <div className="hero-note"><span className="note-icon">✳</span><span><b>از آشپزخانه تا سفره</b><small>برای لحظه‌هایی که طعمشان می‌ماند</small></span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo"><img src={photos.hero} alt="انواع ادویه‌های رنگارنگ و معطر" /></div>
          <div className="photo-stamp"><span>طعم</span><b>اصیل</b><small>از دل طبیعت</small></div>
          <div className="hero-caption">رنگ، عطر و طعم در کنار هم</div>
          <div className="decor decor-one">✳</div><div className="decor decor-two">✺</div>
        </div>
      </section>

      <section className="intro-strip"><div><span>✦</span> انتخابی برای ذائقه‌های خوش‌سلیقه</div><div><span>✦</span> الهام‌گرفته از آشپزی ایرانی</div><div><span>✦</span> عطرهایی برای هر روز</div></section>

      <section className="section products-section" id="products">
        <div className="section-heading"><div><div className="eyebrow">قفسه‌ی خوش‌عطر ما</div><h2>طعم دلخواهت را <em>پیدا کن</em></h2><p>از ادویه‌های پرکاربرد تا ترکیب‌های خوش‌طعم؛ انتخاب با شماست.</p></div><span className="section-number">۰۱ / محصولات</span></div>
        <div className="filters">{["همه","تکی","ترکیبی"].map(f=>html`<button className=${filter===f?"filter active":"filter"} onClick={()=>setFilter(f)}>${f}</button>`)}</div>
        <div className="product-grid">{visible.map(p=>html`
          <article className="product-card">
            <div className="product-image"><img src=${p.image} alt=${p.name} loading="lazy"/><span className="product-tag">${p.tag}</span><button className="quick-add" onClick={()=>setCart(old=>[...old,p])} aria-label=${"افزودن "+p.name}>+</button></div>
            <div className="product-info"><div className="product-category">${p.category}</div><h3>${p.name}</h3><p>${p.desc}</p><div className="product-bottom"><b>استعلام قیمت</b><button onClick={()=>setCart(old=>[...old,p])}>افزودن به لیست سفارش <span>←</span></button></div></div>
          </article>`)}</div>
        <div className="order-bar"><div><b>برای سفارش یا اطلاع از قیمت آماده‌ای؟</b><span>${cart.length?cart.length+" محصول به لیست سفارش اضافه شده":"محصولات موردنظرت را انتخاب کن و با ما در ارتباط باش."}</span></div><a className="button button-light" href=${cart.length?whatsapp:"https://wa.me/989037822307"} target="_blank" rel="noreferrer">ارتباط در واتساپ ↗</a></div>
      </section>

      <section className="story-section" id="about"><div className="story-image"><img src={photos.kitchen} alt="فضای گرم و صمیمی آشپزی" loading="lazy"/><div className="story-seal">با عشق<br/>به طعم</div></div><div className="story-copy"><div className="eyebrow">درباره‌ی جوزا اسپایس</div><h2>طعم خوب،<br/><em>از جزئیات شروع می‌شود.</em></h2><p>برای ما ادویه فقط یک چاشنی نیست؛ بخشی از خاطره‌ی دورهمی‌ها، عطر غذای خانه و لذت کشف مزه‌های تازه است. جوزا اسپایس با همین نگاه شکل گرفته تا انتخاب ادویه و چاشنی، ساده‌تر و لذت‌بخش‌تر باشد.</p><a className="text-link" href="#contact">با جوزا آشنا شوید <span>←</span></a></div></section>

      <section className="values-section"><div className="section-heading"><div><div className="eyebrow">قول جوزا به شما</div><h2>ساده، خوش‌عطر، <em>خوش‌سلیقه</em></h2></div><span className="section-number">۰۲ / تجربه جوزا</span></div><div className="values-grid"><div className="value"><span>✳</span><h3>انتخاب با سلیقه</h3><p>تنوعی از ادویه‌ها و چاشنی‌ها برای ذائقه‌ها و دستورهای غذایی متفاوت.</p></div><div className="value"><span>❋</span><h3>الهام از سفره ایرانی</h3><p>توجه به طعم‌هایی که با غذاهای آشنا و دوست‌داشتنی ما همراه‌اند.</p></div><div className="value"><span>✺</span><h3>ارتباط بی‌واسطه</h3><p>برای پرسش درباره محصولات، قیمت و سفارش، مستقیم با ما گفتگو کنید.</p></div></div></section>

      <section className="journal-section" id="journal"><div className="section-heading"><div><div className="eyebrow">مجله‌ی جوزا</div><h2>کمی بیشتر درباره‌ی <em>طعم‌ها</em></h2><p>الهام‌هایی کوچک برای آشپزی خوش‌عطرتر.</p></div><span className="section-number">۰۳ / مجله</span></div><div className="journal-grid"><article className="journal-card"><img src={photos.cooking} alt="غذای خانگی و ادویه" loading="lazy"/><div><small>آشپزی ایرانی</small><h3>چطور ادویه‌ها را با غذایمان هماهنگ کنیم؟</h3><p>با شناخت عطرها و شروع از مقدار کم، ترکیب‌های دلخواه خودتان را پیدا کنید.</p></div></article><article className="journal-card"><img src={photos.herbs} alt="گیاهان معطر" loading="lazy"/><div><small>نگهداری ادویه</small><h3>راز حفظ عطر ادویه‌ها در خانه</h3><p>ظرف دربسته، محیط خشک و دوری از نور مستقیم به نگهداری بهتر کمک می‌کند.</p></div></article></div></section>

      <section className="contact-section" id="contact"><div><div className="eyebrow">در ارتباط باشیم</div><h2>عطر خوب، با یک سلام شروع می‌شود.</h2><p>برای پرسیدن قیمت، راهنمایی انتخاب یا ثبت سفارش، خوشحال می‌شویم صدایتان را بشنویم.</p></div><div className="contact-actions"><a className="button button-cream" href="https://wa.me/989037822307" target="_blank" rel="noreferrer">گفتگو در واتساپ ↗</a><a className="contact-phone" href="tel:09037822307" dir="ltr">0903 782 2307</a><span>شیراز، ایران</span></div></section>
    </main>
    <footer className="footer"><div className="footer-main"><a className="brand brand-footer" href="#home"><span className="brand-mark">ج</span><span>جوزا<span className="brand-light"> اسپایس</span><small>JOWZA SPICE</small></span></a><p>عطر ادویه، طعم خاطره‌انگیز.<br/>همراه لحظه‌های خوش‌طعم شما.</p><div className="footer-nav">{nav.map(([label,id])=>html`<a href=${"#"+id}>${label}</a>`)}</div><div className="social-links"><a href="https://instagram.com/jowza_spice" target="_blank" rel="noreferrer">اینستاگرام ↗</a><a href="https://wa.me/989037822307" target="_blank" rel="noreferrer">واتساپ ↗</a></div></div><div className="footer-bottom"><span>© جوزا اسپایس — تمامی حقوق محفوظ است.</span><span>ساخته‌شده با عشق به طعم‌های ایرانی ♥</span></div></footer>
  `;
}
createRoot(document.getElementById("root")).render(html`<${App}/>`);
