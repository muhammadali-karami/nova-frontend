'use client';

import { ArrowUpLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const instagram = 'https://www.instagram.com/nova_flower_garden/';

const collections = {
  jars: [
    { image: '6c076527ed7429d3', title: 'سفید و سبزِ جاودانه', post: 'DcJWyAxt3Ba' },
    { image: 'e857c30d687c4d6a', title: 'بنفش برای یک عصر خاص', post: 'Dbqq1Aijbm_' },
    { image: 'e1497a6e04d9c195', title: 'ترکیبِ لطیف یاسی', post: 'DbYlN-nDdVE' },
    { image: '935d9585d37bf778', title: 'رنگ‌هایی برای حال خوب', post: 'DbLZBw3jaMI' },
  ],
  bouquets: [
    { image: 'b95e4d087a935dfa', title: 'دسته گلِ بنفش و سفید', post: 'DZVUHhQtlpB' },
    { image: '27e3162e3a9c3117', title: 'رزهای صورتی و روبان', post: 'Db8fEkeNuFo' },
    { image: '237a1b8537e2a818', title: 'هدیه‌ای به رنگ رز', post: 'Db8fEkeNuFo' },
    { image: '96e69a2bb4aa5d39', title: 'گل‌های سرخِ خاص', post: 'DbLZBw3jaMI' },
  ],
  boxes: [
    { image: 'ffd98d3e161e8057', title: 'باکس رزهای صورتی', post: 'Db8fEkeNuFo' },
    { image: 'e1497a6e04d9c195', title: 'باکسِ گلِ بنفش', post: 'DbYlN-nDdVE' },
    { image: '14f74092b1079cca', title: 'باکس گلِ آبی و سفید', post: 'DbLZBw3jaMI' },
    { image: '2e398e0bb123d05c', title: 'باکسی برای یک خاطره', post: 'DbDxBP6DT2n' },
  ],
};

type Collection = keyof typeof collections;

function Slider({ collection, label }: { collection: Collection; label: string }) {
  return <Carousel opts={{ align: 'start', direction: 'rtl' }} className="work-carousel" aria-label={`نمونه‌کارهای ${label}`}>
    <CarouselContent className="-ml-3">
      {collections[collection].map((work, index) => <CarouselItem className="pl-3 basis-[82%] sm:basis-[47%] lg:basis-[30%]" key={`${work.image}-${index}`}>
        <a className="work" href={`${instagram}p/${work.post}/`} target="_blank" rel="noreferrer"><div className="work-photo"><img src={`/images/${work.image}.jpg`} width="720" height="960" alt={`${work.title}؛ نمونه‌کار واقعی ${label} باغ گل نوا`} loading="lazy"/><span className="work-open" aria-label="مشاهده در اینستاگرام"><ArrowUpLeft size={21}/></span></div><div className="work-title"><h3>{work.title}</h3><span dir="ltr">0{index + 1}</span></div><p>{label}</p></a>
      </CarouselItem>)}
    </CarouselContent>
    <div className="slider-controls"><CarouselPrevious aria-label="نمونه قبلی" /><CarouselNext aria-label="نمونه بعدی" /></div>
  </Carousel>;
}

export function CollectionTabs() {
  return <Tabs defaultValue="jars" className="collection-tabs">
    <TabsList variant="line" aria-label="دسته‌بندی نمونه‌کارها">
      <TabsTrigger value="jars">جار گل</TabsTrigger>
      <TabsTrigger value="bouquets">دسته گل</TabsTrigger>
      <TabsTrigger value="boxes">باکس گل</TabsTrigger>
    </TabsList>
    <TabsContent value="jars"><Slider collection="jars" label="جار گل" /></TabsContent>
    <TabsContent value="bouquets"><Slider collection="bouquets" label="دسته گل" /></TabsContent>
    <TabsContent value="boxes"><Slider collection="boxes" label="باکس گل" /></TabsContent>
  </Tabs>;
}
