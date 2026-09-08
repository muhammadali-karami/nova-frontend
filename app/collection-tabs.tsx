'use client';

import { ArrowUpLeft } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const instagram = 'https://www.instagram.com/nova_flower_garden/';

const works = [
  { image: 'nova-DcJWyAxt3Ba', title: 'جار گل سفید و سبز', post: 'DcJWyAxt3Ba' },
  { image: 'nova-Db8fEkeNuFo', title: 'سبد رز صورتی با مروارید', post: 'Db8fEkeNuFo' },
  { image: 'nova-Dbqq1Aijbm_', title: 'جار گل بنفش و سفید', post: 'Dbqq1Aijbm_' },
  { image: 'nova-DbYlN-nDdVE', title: 'گل‌های بنفش در گلدان طلایی', post: 'DbYlN-nDdVE' },
  { image: 'nova-DbLZBw3jaMI', title: 'چیدمان سرخ و صورتی', post: 'DbLZBw3jaMI' },
  { image: 'nova-DbDxBP6DT2n', title: 'باکس گل آبی و سفید', post: 'DbDxBP6DT2n' },
  { image: 'nova-Da-np_RDcl2', title: 'سبد گل آبی و کرم', post: 'Da-np_RDcl2' },
  { image: 'nova-Da41AkPDYWm', title: 'جار ارکیده و گل‌های صورتی', post: 'Da41AkPDYWm' },
  { image: 'nova-Dax8Y3atg3L', title: 'پرنده بهشتی در گلدان آبی', post: 'Dax8Y3atg3L' },
  { image: 'nova-DanqpSMt8KW', title: 'جار ارکیده و رز هلویی', post: 'DanqpSMt8KW' },
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
