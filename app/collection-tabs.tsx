'use client';

import { ArrowUpLeft } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const instagram = 'https://www.instagram.com/nova_flower_garden/';

const works = [
  { image: '6c076527ed7429d3', title: 'سفید و سبزِ جاودانه', post: 'DcJWyAxt3Ba' },
  { image: 'e857c30d687c4d6a', title: 'بنفش برای یک عصر خاص', post: 'Dbqq1Aijbm_' },
  { image: '935d9585d37bf778', title: 'رنگ‌هایی برای حال خوب', post: 'DbLZBw3jaMI' },
  { image: 'b95e4d087a935dfa', title: 'دسته گلِ بنفش و سفید', post: 'DZVUHhQtlpB' },
  { image: '27e3162e3a9c3117', title: 'رزهای صورتی و روبان', post: 'Db8fEkeNuFo' },
  { image: '96e69a2bb4aa5d39', title: 'گل‌های سرخِ خاص', post: 'DbLZBw3jaMI' },
  { image: 'ffd98d3e161e8057', title: ' گل های زیبای پرنده بهشتی', post: 'Dax8Y3atg3L' },
  { image: 'e1497a6e04d9c195', title: 'ترکیبِ لطیف یاسی', post: 'DbYlN-nDdVE' },
  { image: '14f74092b1079cca', title: 'باکس گلِ آبی و سفید', post: 'DbLZBw3jaMI' },
  { image: '2e398e0bb123d05c', title: 'باکسی برای یک خاطره', post: 'DbDxBP6DT2n' },
];

export function CollectionTabs() {
  return <Carousel opts={{ align: 'start', direction: 'rtl' }} className="work-carousel" aria-label="نمونه‌کارهای باغ گل نوا" dir="rtl">
    <CarouselContent className="-mr-3">
      {works.map((work, index) => <CarouselItem className="pr-3 basis-[82%] sm:basis-[47%] lg:basis-[30%]" key={work.image}>
        <a className="work" href={`${instagram}p/${work.post}/`} target="_blank" rel="noreferrer" dir="rtl"><div className="work-photo"><img src={`/images/${work.image}.jpg`} width="720" height="960" alt={`${work.title}؛ نمونه‌کار واقعی باغ گل نوا`} loading={index < 3 ? 'eager' : 'lazy'}/><span className="work-open" aria-label="مشاهده در اینستاگرام"><ArrowUpLeft size={21}/></span></div><div className="work-title"><h3>{work.title}</h3><span dir="ltr">{String(index + 1).padStart(2, '0')}</span></div><p>گل‌آرایی اختصاصی نُوا</p></a>
      </CarouselItem>)}
    </CarouselContent>
    <CarouselPrevious className="carousel-go-left" aria-label="حرکت اسلایدر به چپ" />
    <CarouselNext className="carousel-go-right" aria-label="حرکت اسلایدر به راست" />
  </Carousel>;
}
