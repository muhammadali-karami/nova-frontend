import { ArrowUpLeft, ArrowDown, Camera, MessageCircle, MapPin, Phone } from 'lucide-react';
import { CollectionTabs } from './collection-tabs';
const instagram = 'https://www.instagram.com/nova_flower_garden/';
const whatsapp = 'https://wa.me/message/FEEB5UGSMPNGA1';
const phone = 'tel:+989386063164';
export default function Home() {
 return <>
  <a className="skip" href="#main">رفتن به محتوای اصلی</a>
  <header className="header wrap">
   <a className="brand" href="#" aria-label="باغ گل نوا، خانه"><img src="/images/2108972699cdc2f4.jpg" width="60" height="60" alt="لوگوی باغ گل نوا"/><span>باغ گل نُوا<small dir="ltr">NOVA FLOWER GARDEN</small></span></a>
   <nav aria-label="منوی اصلی"><a href="#collection">نمونه‌کارها</a><a href="#about">درباره نوا</a><a href="#contact">ارتباط با ما</a></nav>
   <a className="header-order" href={whatsapp} target="_blank" rel="noreferrer">سفارش گل <ArrowUpLeft size={18}/></a>
  </header>
  <main id="main">
   <section className="hero wrap" aria-labelledby="hero-title">
    <div className="hero-copy"><p className="eyebrow"><span/> استودیوی گل‌آرایی نُوا</p><h1 id="hero-title">هر گل،<br/>یک <em>شروع تازه</em>‌ست.</h1><p className="hero-description">برای دوست داشتن، برای قدردانی، برای یک روز معمولی.<br/>حسِ تو را با گل‌ها روایت می‌کنیم.</p><div className="hero-actions"><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer">برای من گل بساز <ArrowUpLeft size={20}/></a><a className="text-link" href="#collection">تماشای گل‌ها <ArrowDown size={17}/></a></div><div className="hero-foot"><MapPin size={16}/><span>ارسال در تهران</span><span className="separator"/><span>گل‌های تازه، طراحی اختصاصی</span></div></div>
    <div className="hero-art"><div className="photo-frame"><img src="/images/ffd98d3e161e8057.jpg" width="480" height="640" alt="سبد گل نوا با رزهای صورتی، گل‌های سفید و روبان روشن" fetchPriority="high"/><span className="photo-label" dir="ltr">MADE WITH LOVE, BY NOVA</span></div><div className="art-caption"><span dir="ltr">01 / FLORAL STORIES</span><span>کمی گل، کمی زندگی.</span></div><span className="vertical-label" dir="ltr">NATURALLY BEAUTIFUL. UNIQUELY YOURS.</span></div>
   </section>
   <div className="ribbon" aria-label="انواع گل‌آرایی"><span>سبد و باکس گل</span><i>✳</i><span>دسته گل</span><i>✳</i><span>جار گل</span><i>✳</i><span>طراحی اختصاصی</span><i>✳</i><span dir="ltr">A LITTLE BLOOM. A LOT OF LOVE.</span></div>
   <section id="collection" className="collection wrap"><div className="section-top"><div><p className="eyebrow">منتخبی از گل‌های نُوا</p><h2>هر چیدمان،<br className="mobile-break"/> یک قصه‌ی تازه.</h2></div><a className="text-link" href={instagram} target="_blank" rel="noreferrer">همه‌ی نمونه‌کارها <ArrowUpLeft size={19}/></a></div><CollectionTabs /></section>
   <section id="about" className="about"><div className="wrap about-inner"><p className="eyebrow">فلسفه‌ی نُوا <span dir="ltr">/ OUR STORY</span></p><h2>زیبایی، در کنار هم<br/>قرار گرفتنِ <em>جزئیات</em> است.</h2><div className="about-copy"><p>یک رنگ دلخواه، یک مناسبت خاص، یا فقط میل به خوشحال کردن یک نفر. در نُوا، از همین حس‌های کوچک شروع می‌کنیم و با گل‌های تازه به آن‌ها شکل می‌دهیم.</p><p>سبد و باکس گل، دسته گل یا یک جار کوچک؛ با چیدمانی اختصاصی برای احساسی که می‌خواهی بگویی.</p><a className="text-link" href={whatsapp} target="_blank" rel="noreferrer">از ایده‌ات برای ما بگو <ArrowUpLeft size={19}/></a></div></div></section>
   <section id="contact" className="contact wrap"><p className="eyebrow">یک گفت‌وگو تا یک دسته گل</p><h2>چه حسی را<br/>می‌خواهی <em>هدیه بدهی؟</em></h2><p>رنگ، مناسبت و سلیقه‌ات را برایمان بگو.<br/>برای انتخاب گل‌ها کنارت هستیم.</p><div className="contact-actions"><a className="button primary" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={20}/> سفارش در واتس‌اپ <ArrowUpLeft size={20}/></a><a className="button outline" href={phone}><Phone size={19}/> تماس برای سفارش</a><a className="button outline" href={instagram} target="_blank" rel="noreferrer"><Camera size={19}/> اینستاگرام نُوا</a></div><a className="order-phone" href={phone} dir="ltr"><Phone size={16}/> 0938 606 3164</a><span className="delivery"><MapPin size={15}/> ارسال در تهران</span></section>
  </main>
  <footer className="footer wrap"><a className="brand" href="#"><img src="/images/2108972699cdc2f4.jpg" alt="" width="48" height="48"/><span>باغ گل نُوا<small dir="ltr">NOVA FLOWER GARDEN</small></span></a><p>هر گل، یک شروع تازه‌ست.</p><a href={instagram} target="_blank" rel="noreferrer" dir="ltr">@nova_flower_garden <ArrowUpLeft size={16}/></a></footer>
 </>;
}
