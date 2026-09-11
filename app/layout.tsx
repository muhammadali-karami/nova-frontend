import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  metadataBase: new URL('https://nova-flower-garden.muhammadali-karami.chatgpt.site'),
  title: {
    default: 'باغ گل نُوا | سفارش گل و گل‌آرایی اختصاصی در تهران',
    template: '%s | باغ گل نُوا',
  },
  description: 'طراحی اختصاصی سبد و باکس گل، دسته گل و جار گل با گل‌های تازه. مشاهده نمونه‌کارهای باغ گل نُوا و سفارش با ارسال در تهران.',
  keywords: ['سفارش گل در تهران', 'گل فروشی تهران', 'گل آرایی تهران', 'باکس گل', 'دسته گل', 'سبد گل', 'باغ گل نوا'],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'fa_IR',
    url: '/',
    siteName: 'باغ گل نُوا',
    title: 'باغ گل نُوا | سفارش گل و گل‌آرایی اختصاصی در تهران',
    description: 'طراحی اختصاصی سبد و باکس گل، دسته گل و جار گل با گل‌های تازه و ارسال در تهران.',
  },
  twitter: {
    card: 'summary',
    title: 'باغ گل نُوا | سفارش گل و گل‌آرایی اختصاصی در تهران',
    description: 'سبد و باکس گل، دسته گل و جار گل با طراحی اختصاصی و ارسال در تهران.',
  },
  robots: { index: true, follow: true },
  icons: { icon: '/images/2108972699cdc2f4.jpg' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Florist',
    name: 'باغ گل نُوا',
    url: 'https://nova-flower-garden.muhammadali-karami.chatgpt.site',
    image: 'https://nova-flower-garden.muhammadali-karami.chatgpt.site/images/ffd98d3e161e8057.jpg',
    description: 'طراحی اختصاصی سبد و باکس گل، دسته گل و جار گل با گل‌های تازه و ارسال در تهران.',
    telephone: '+989386063164',
    areaServed: { '@type': 'City', name: 'تهران' },
    sameAs: ['https://www.instagram.com/nova_flower_garden/'],
    contactPoint: [{ '@type': 'ContactPoint', telephone: '+989386063164', contactType: 'sales', availableLanguage: ['fa'] }],
  };
  return <html lang="fa" dir="rtl"><body>{children}<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /></body></html>;
}
