import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
  title: 'باغ گل نُوا | هر گل، یک شروع تازه',
  description: 'طراحی اختصاصی سبد و باکس گل، دسته گل و جار گل با گل‌های تازه. مشاهده نمونه‌کارهای باغ گل نُوا و سفارش با ارسال در تهران.',
  icons: { icon: '/images/2108972699cdc2f4.jpg' },
};
export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return <html lang="fa" dir="rtl"><body>{children}</body></html>;
}
