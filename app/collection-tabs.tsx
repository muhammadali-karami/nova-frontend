'use client';

import { ArrowUpLeft } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const instagram = 'https://www.instagram.com/nova_flower_garden/';

const collections = {
  jars: [
    { image: '6c076527ed7429d3', title: 'سفید و سبزِ جاودانه', post: 'DcJWyAxt3Ba' },
    { image: 'e857c30d687c4d6a', title: 'بنفش برای یک عصر خاص', post: 'Dbqq1Aijbm_' },
  ],
  bouquets: [
    { image: 'ffd98d3e161e8057', title: 'صورتی، به لطافت یک لبخند', post: 'Db8fEkeNuFo' },
    { image: 'e1497a6e04d9c195', title: 'طیفِ بنفشِ دلنشین', post: 'DbYlN-nDdVE' },
  ],
  boxes: [
    { image: '14f74092b1079cca', title: 'رنگ‌هایی برای حالِ خوب', post: 'DbLZBw3jaMI' },
    { image: '2e398e0bb123d05c', title: 'یک هدیه، هزار احساس', post: 'DbDxBP6DT2n' },
  ],
};

type Collection = keyof typeof collections;

function Gallery({ collection, label }: { collection: Collection; label: string }) {
  return <div className="gallery">{collections[collection].map((work, index) => <a className="work" href={`${instagram}p/${work.post}/`} target="_blank" rel="noreferrer" key={work.post}><div className="work-photo"><img src={`/images/${work.image}.jpg`} width="480" height="640" alt={`${work.title}؛ نمونه‌کار واقعی ${label} باغ گل نوا`} loading="lazy"/><span className="work-open" aria-label="مشاهده در اینستاگرام"><ArrowUpLeft size={23}/></span></div><div className="work-title"><h3>{work.title}</h3><span dir="ltr">0{index + 1}</span></div><p>{label}</p></a>)}</div>;
}

export function CollectionTabs() {
  return <Tabs defaultValue="jars" className="collection-tabs">
    <TabsList variant="line" aria-label="دسته‌بندی نمونه‌کارها">
      <TabsTrigger value="jars">جار گل</TabsTrigger>
      <TabsTrigger value="bouquets">دسته گل</TabsTrigger>
      <TabsTrigger value="boxes">باکس گل</TabsTrigger>
    </TabsList>
    <TabsContent value="jars"><Gallery collection="jars" label="جار گل" /></TabsContent>
    <TabsContent value="bouquets"><Gallery collection="bouquets" label="دسته گل" /></TabsContent>
    <TabsContent value="boxes"><Gallery collection="boxes" label="باکس گل" /></TabsContent>
  </Tabs>;
}
