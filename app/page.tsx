import {
  ArrowUpLeft,
  ArrowDown,
  Camera as Instagram,
  MessageCircle,
  MapPin,
  Phone,
  Flower2,
  MoveUpLeft,
} from 'lucide-react';
import { CollectionTabs } from './collection-tabs';
const instagram = 'https://www.instagram.com/nova_flower_garden/';
const whatsapp = `https://wa.me/989386063164?text=${encodeURIComponent('سلام، برای سفارش گل پیام می‌دهم.')}`;
const phone = 'tel:+989386063164';
export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        رفتن به محتوای اصلی
      </a>
      <div className="announcement">
        <span>سفارش از طریق واتس‌اپ و تماس</span>
        <span>
          <MapPin size={13} /> ارسال در تهران
        </span>
      </div>
      <header className="header wrap">
        <a className="brand" href="#" aria-label="باغ گل نوا، خانه">
          <img
            src="/images/2108972699cdc2f4.jpg"
            width="52"
            height="52"
            alt="لوگوی باغ گل نوا"
          />
          <span>
            باغ گل نُوا<small dir="ltr">NOVA FLOWER GARDEN</small>
          </span>
        </a>
        <nav aria-label="منوی اصلی">
          <a href="#collection">گل‌های نُوا</a>
          <a href="#about">درباره نُوا</a>
          <a href="#contact">ارتباط با ما</a>
        </nav>
        <a
          className="header-order"
          href={whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          سفارش گل <ArrowUpLeft size={18} />
        </a>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="short-line" /> استودیوی گل‌آرایی نُوا
            </p>
            <h1 id="hero-title">
              بعضی حس‌ها
              <br />
              با <em>گل</em> زیباترند.
            </h1>
            <p className="hero-description">
              سبد، باکس و جار گل با طراحی اختصاصی.
              <br />
              انتخاب رنگ و ترکیب گل‌ها با سلیقه‌ی شما.
            </p>
            <div className="hero-actions">
              <a
                className="button primary"
                href={whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                سفارش گل <ArrowUpLeft size={21} />
              </a>
              <a className="text-link" href="#collection">
                دیدن نمونه‌کارها <ArrowDown size={17} />
              </a>
            </div>
          </div>
          <div className="hero-art">
            <span className="hero-wordmark" aria-hidden="true">
              NOVA
            </span>
            <div className="photo-frame">
              <img
                src="/images/nova-DbLZBw3jaMI.jpg"
                width="480"
                height="640"
                alt="چیدمان سرخ و صورتی؛ نمونه‌کار باغ گل نوا"
                fetchPriority="high"
              />
            </div>
            <a className="floating-photo" href="#collection">
              <img
                src="/images/nova-DcJWyAxt3Ba.jpg"
                width="480"
                height="640"
                alt="چیدمان سفید و سبز ارکیده در جار نوا"
              />
              <span>
                جار سفید و سبز <ArrowUpLeft size={16} />
              </span>
            </a>
          </div>
        </section>
        <div className="ribbon" aria-label="انواع گل‌آرایی">
          <span>سبد و باکس گل</span>
          <Flower2 />
          <span>دسته گل</span>
          <Flower2 />
          <span>جار گل</span>
          <Flower2 />
          <span>طراحی اختصاصی</span>
        </div>
        <section id="collection" className="collection wrap">
          <div className="section-top">
            <div>
              <p className="eyebrow">گالری</p>
              <h2>
                نمونه‌کارهای <em>نُوا</em>
              </h2>
            </div>
            <a
              className="text-link"
              href={instagram}
              target="_blank"
              rel="noreferrer"
            >
              همه‌ی نمونه‌کارها <ArrowUpLeft size={19} />
            </a>
          </div>
          <CollectionTabs />
          <div className="collection-note">
            <Flower2 size={19} />
            <p>نوع گل‌ها بسته به فصل و موجودی تغییر می‌کند.</p>
          </div>
        </section>
        <section id="about" className="about wrap">
          <div className="about-image">
            <img
              src="/images/nova-DanqpSMt8KW.jpg"
              alt="ترکیب ارکیده و رز هلویی در چیدمان اختصاصی نوا"
              width="480"
              height="640"
              loading="lazy"
            />
          </div>
          <div className="about-content">
            <p className="eyebrow">درباره‌ی ما</p>
            <h2>
              گل‌آرایی
              <br />
              با <em>انتخاب شما</em>
            </h2>
            <div className="about-copy">
              <p>
                در نُوا، سبد و باکس گل، دسته گل و جار گل را متناسب با مناسبت، رنگ
                دلخواه و بودجه‌ی شما طراحی می‌کنیم.
              </p>
              <p>
                می‌توانید یکی از نمونه‌کارها را انتخاب کنید یا تصویر ترکیب
                موردنظرتان را برای ما بفرستید.
              </p>
            </div>
            <a
              className="text-link"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              مشاوره و انتخاب گل <ArrowUpLeft size={19} />
            </a>
          </div>
        </section>
        <section id="contact" className="contact wrap">
          <div className="contact-main">
            <p className="eyebrow">تماس با نُوا</p>
            <h2>
              ثبت <em>سفارش گل</em>
            </h2>
            <p>
              برای استعلام قیمت و سفارش، در واتس‌اپ پیام بدهید یا تماس بگیرید.
              <br />
              تاریخ تحویل، بودجه و نمونه‌ی دلخواهتان را مشخص کنید.
            </p>
            <a
              className="button light"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={21} /> سفارش در واتس‌اپ{' '}
              <ArrowUpLeft size={21} />
            </a>
          </div>
          <div className="contact-side">
            <Flower2 className="contact-flower" size={64} strokeWidth={0.8} />
            <a className="contact-link" href={phone}>
              <span>
                <small>تلفن سفارش</small>
                <span dir="ltr">0938 606 3164</span>
              </span>
              <Phone size={23} strokeWidth={1.4} />
            </a>
            <a
              className="contact-link"
              href={instagram}
              target="_blank"
              rel="noreferrer"
            >
              <span>
                <small>اینستاگرام نُوا</small>
                <span dir="ltr">@nova_flower_garden</span>
              </span>
              <Instagram size={23} strokeWidth={1.4} />
            </a>
            <span className="delivery">
              <MapPin size={17} /> ارسال در تهران
            </span>
          </div>
        </section>
      </main>
      <footer className="footer wrap">
        <div className="footer-top">
          <a className="brand" href="#">
            <img
              src="/images/2108972699cdc2f4.jpg"
              alt=""
              width="48"
              height="48"
            />
            <span>
              باغ گل نُوا<small dir="ltr">NOVA FLOWER GARDEN</small>
            </span>
          </a>
          <a className="back-top" href="#" aria-label="بازگشت به بالای صفحه">
            <MoveUpLeft size={20} />
          </a>
        </div>
      </footer>
    </>
  );
}
