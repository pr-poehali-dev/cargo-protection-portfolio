import pptxgen from 'pptxgenjs';

const DARK = '141821';
const CARD = '1B1F29';
const AMBER = 'F5A623';
const LIGHT = 'F4F1EA';
const GREY = '9AA0AC';

export interface Product {
  name: string;
  price: string;
  priceNum: number;
  desc: string;
  icon: string;
  img: string;
  example: string;
}

export const products: Product[] = [
  {
    name: 'Защита картера',
    price: '35 000 ₽',
    priceNum: 35000,
    desc: 'Закрывает картер двигателя от ударов камней и препятствий на бездорожье.',
    icon: 'Shield',
    img: 'https://cdn.poehali.dev/projects/7d6ba88e-8b0d-489a-9d53-8ca97efd3b5f/bucket/52b2b4ed-c577-4bc7-b445-b1c56993dbab.jpg',
    example: 'https://cdn.poehali.dev/projects/7d6ba88e-8b0d-489a-9d53-8ca97efd3b5f/bucket/d58f8904-e9cf-4129-b892-281458099dd6.jpg',
  },
  {
    name: 'Защита топливного бака',
    price: '25 000 ₽',
    priceNum: 25000,
    desc: 'Оберегает бак от пробоя и деформации, сохраняет топливную систему.',
    icon: 'Fuel',
    img: 'https://cdn.poehali.dev/projects/7d6ba88e-8b0d-489a-9d53-8ca97efd3b5f/bucket/a8b63c77-d757-4ec3-b126-3815e80722d7.jpg',
    example: 'https://cdn.poehali.dev/projects/7d6ba88e-8b0d-489a-9d53-8ca97efd3b5f/bucket/d6b3960b-b60c-4580-88ab-41c996fe91f7.jpg',
  },
  {
    name: 'Защита воздушного фильтра',
    price: '20 000 ₽',
    priceNum: 20000,
    desc: 'Защищает воздушный фильтр от грязи, воды и механических повреждений.',
    icon: 'Wind',
    img: 'https://cdn.poehali.dev/projects/7d6ba88e-8b0d-489a-9d53-8ca97efd3b5f/bucket/8990b69a-6bc3-4db3-ada4-f0150e4e1ac7.jpg',
    example: 'https://cdn.poehali.dev/projects/7d6ba88e-8b0d-489a-9d53-8ca97efd3b5f/bucket/9307ba13-3c8e-40b1-b6d6-3ac1ed57b78c.jpg',
  },
  {
    name: 'Защита датчиков',
    price: '15 000 ₽',
    priceNum: 15000,
    desc: 'Броня для датчиков блокировки и электроники ходовой части.',
    icon: 'Cpu',
    img: 'https://cdn.poehali.dev/projects/7d6ba88e-8b0d-489a-9d53-8ca97efd3b5f/bucket/41946543-4b24-4a84-9df1-56a01d547183.jpg',
    example: 'https://cdn.poehali.dev/projects/7d6ba88e-8b0d-489a-9d53-8ca97efd3b5f/bucket/5854e476-a48e-4f66-aa89-950e34805a9a.jpg',
  },
];

export const fullSet = {
  name: 'Полный комплект защит',
  price: '90 000 ₽',
  priceNum: 90000,
  save: 'Выгода 20 000 ₽',
  items: ['Защита картера', 'Защита топливного бака', 'Защита воздушного фильтра', 'Защита датчиков'],
};

export const advantages = [
  ['Защита от ударов', 'Броня выдерживает удары камней и препятствий на бездорожье'],
  ['Экономия на ремонте', 'Один ремонт узла дороже комплекта защит от ИТЦ Сибирь'],
  ['Сталь до 8 мм', 'Конструкционная сталь 3 и низколегированная 09Г2С собственного производства'],
  ['3D-проектирование', 'Нет вашей модели? Сделаем 3D-сканирование и спроектируем защиту под вас'],
  ['Антикоррозия', 'Порошковая окраска и антикор-обработка всех узлов'],
  ['Точная посадка', 'Заводские точки крепления, без лишнего сверления'],
];

export const specs = [
  ['Материал', 'Сталь 3 и 09Г2С, толщина до 8 мм'],
  ['Покрытие', 'Порошковая окраска + антикор'],
  ['Крепёж', 'Заводские точки, усиленные кронштейны'],
  ['Совместимость', 'Shacman X3000, FAW, Howo, Sitrak и др.'],
  ['Нет вашей модели?', '3D-сканирование и проектирование под ваш авто'],
  ['Узлы защиты', 'Картер, топливный бак, воздушный фильтр, датчики'],
];

export const contacts = {
  phone: '8-905-975-58-88',
  email: 'itc2555888@mail.ru',
  site: 'itc-siberia.ru',
};

export function exportKpToPptx() {
  const pptx = new pptxgen();
  pptx.defineLayout({ name: 'WIDE', width: 13.33, height: 7.5 });
  pptx.layout = 'WIDE';
  pptx.author = 'ИТЦ Сибирь';
  pptx.company = 'ИТЦ Сибирь';
  pptx.title = 'КП — Защита для грузовой техники';

  const bg = { color: DARK };

  // 1. Cover
  let s = pptx.addSlide();
  s.background = bg;
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.25, h: 7.5, fill: { color: AMBER } });
  s.addText('ИТЦ СИБИРЬ', { x: 0.7, y: 0.5, w: 8, h: 0.4, color: AMBER, fontSize: 14, bold: true, charSpacing: 4, fontFace: 'Arial' });
  s.addText('ЗАЩИТА ДЛЯ\nГРУЗОВОЙ ТЕХНИКИ', { x: 0.7, y: 2.2, w: 11, h: 2, color: LIGHT, fontSize: 54, bold: true, fontFace: 'Arial', lineSpacingMultiple: 0.95 });
  s.addText('Коммерческое предложение · Shacman X3000 и спецтехника', { x: 0.7, y: 4.3, w: 11, h: 0.5, color: GREY, fontSize: 18, fontFace: 'Arial' });
  s.addText(`${contacts.phone} · ${contacts.site}`, { x: 0.7, y: 6.7, w: 11, h: 0.4, color: GREY, fontSize: 12, fontFace: 'Arial' });

  // 2. Service / products intro
  s = pptx.addSlide();
  s.background = bg;
  s.addText('Продукция', { x: 0.7, y: 0.5, w: 8, h: 0.4, color: AMBER, fontSize: 14, bold: true, charSpacing: 3, fontFace: 'Arial' });
  s.addText('Что мы производим', { x: 0.7, y: 0.95, w: 12, h: 0.9, color: LIGHT, fontSize: 34, bold: true, fontFace: 'Arial' });
  s.addText(
    'ИТЦ Сибирь — производит защиты для грузовиков и спецтехники. Изготавливаем из стали 3 и 09Г2С толщиной до 8 мм. Работаем с Shacman, FAW, Howo, Sitrak. Нет вашей модели — сделаем 3D-сканирование и спроектируем защиту под вас.',
    { x: 0.7, y: 2, w: 11.9, h: 1.5, color: GREY, fontSize: 18, fontFace: 'Arial', lineSpacingMultiple: 1.3 }
  );
  products.forEach((p, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 0.7 + i * 3, y: 4.2, w: 2.7, h: 1.9, fill: { color: CARD }, line: { color: AMBER, width: 1 } });
    s.addText(p.name, { x: 0.75 + i * 3, y: 4.35, w: 2.6, h: 1, color: LIGHT, fontSize: 16, bold: true, align: 'center', valign: 'middle', fontFace: 'Arial' });
    s.addText(p.price, { x: 0.75 + i * 3, y: 5.5, w: 2.6, h: 0.5, color: AMBER, fontSize: 18, bold: true, align: 'center', fontFace: 'Arial' });
  });

  // 3. Advantages
  s = pptx.addSlide();
  s.background = bg;
  s.addText('Преимущества', { x: 0.7, y: 0.5, w: 8, h: 0.4, color: AMBER, fontSize: 14, bold: true, charSpacing: 3, fontFace: 'Arial' });
  s.addText('Почему стоит установить защиту', { x: 0.7, y: 0.95, w: 12, h: 0.9, color: LIGHT, fontSize: 34, bold: true, fontFace: 'Arial' });
  advantages.forEach((a, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.7 + col * 4.05;
    const y = 2.1 + row * 2.3;
    s.addShape(pptx.ShapeType.rect, { x, y, w: 3.8, h: 2, fill: { color: CARD } });
    s.addShape(pptx.ShapeType.rect, { x, y, w: 0.1, h: 2, fill: { color: AMBER } });
    s.addText(a[0], { x: x + 0.25, y: y + 0.2, w: 3.4, h: 0.5, color: LIGHT, fontSize: 18, bold: true, fontFace: 'Arial' });
    s.addText(a[1], { x: x + 0.25, y: y + 0.75, w: 3.4, h: 1.1, color: GREY, fontSize: 13, fontFace: 'Arial', lineSpacingMultiple: 1.2 });
  });

  // 4. Specs
  s = pptx.addSlide();
  s.background = bg;
  s.addText('Характеристики', { x: 0.7, y: 0.5, w: 8, h: 0.4, color: AMBER, fontSize: 14, bold: true, charSpacing: 3, fontFace: 'Arial' });
  s.addText('Технические характеристики и материалы', { x: 0.7, y: 0.95, w: 12, h: 0.9, color: LIGHT, fontSize: 32, bold: true, fontFace: 'Arial' });
  const rows: pptxgen.TableRow[] = specs.map((r, i) => [
    { text: r[0], options: { color: AMBER, bold: true, fontSize: 16, fill: { color: i % 2 ? CARD : '20242F' }, valign: 'middle', margin: 8 } },
    { text: r[1], options: { color: LIGHT, fontSize: 16, fill: { color: i % 2 ? CARD : '20242F' }, valign: 'middle', margin: 8 } },
  ]);
  s.addTable(rows, { x: 0.7, y: 2.1, w: 11.9, colW: [3.5, 8.4], rowH: 0.65, border: { type: 'solid', color: DARK, pt: 2 }, fontFace: 'Arial' });

  // 5. Pricing
  s = pptx.addSlide();
  s.background = bg;
  s.addText('Цены', { x: 0.7, y: 0.5, w: 8, h: 0.4, color: AMBER, fontSize: 14, bold: true, charSpacing: 3, fontFace: 'Arial' });
  s.addText('Варианты защит с ценами', { x: 0.7, y: 0.95, w: 12, h: 0.9, color: LIGHT, fontSize: 34, bold: true, fontFace: 'Arial' });
  products.forEach((p, i) => {
    const y = 2.1 + i * 0.75;
    s.addShape(pptx.ShapeType.rect, { x: 0.7, y, w: 7.6, h: 0.65, fill: { color: i % 2 ? CARD : '20242F' } });
    s.addText(p.name, { x: 0.9, y, w: 5.5, h: 0.65, color: LIGHT, fontSize: 17, bold: true, valign: 'middle', fontFace: 'Arial' });
    s.addText(p.price, { x: 6.4, y, w: 1.7, h: 0.65, color: AMBER, fontSize: 18, bold: true, align: 'right', valign: 'middle', fontFace: 'Arial' });
  });
  // full set card
  s.addShape(pptx.ShapeType.rect, { x: 8.6, y: 2.1, w: 4, h: 3.65, fill: { color: '242833' }, line: { color: AMBER, width: 2 } });
  s.addText('ПОЛНЫЙ КОМПЛЕКТ', { x: 8.6, y: 2.35, w: 4, h: 0.4, color: AMBER, fontSize: 13, bold: true, align: 'center', charSpacing: 2, fontFace: 'Arial' });
  s.addText(fullSet.price, { x: 8.6, y: 2.9, w: 4, h: 0.9, color: LIGHT, fontSize: 40, bold: true, align: 'center', fontFace: 'Arial' });
  s.addText(fullSet.save, { x: 8.6, y: 3.85, w: 4, h: 0.4, color: AMBER, fontSize: 15, bold: true, align: 'center', fontFace: 'Arial' });
  s.addText('Все 4 защиты в едином комплекте по выгодной цене', { x: 8.9, y: 4.4, w: 3.4, h: 1.1, color: GREY, fontSize: 14, align: 'center', fontFace: 'Arial', lineSpacingMultiple: 1.2 });

  // 6. Examples
  s = pptx.addSlide();
  s.background = bg;
  s.addText('Портфолио', { x: 0.7, y: 0.5, w: 8, h: 0.4, color: AMBER, fontSize: 14, bold: true, charSpacing: 3, fontFace: 'Arial' });
  s.addText('Примеры установленных защит', { x: 0.7, y: 0.95, w: 12, h: 0.9, color: LIGHT, fontSize: 34, bold: true, fontFace: 'Arial' });
  products.forEach((p, i) => {
    const x = 0.7 + i * 3;
    s.addShape(pptx.ShapeType.rect, { x, y: 2.3, w: 2.75, h: 2.6, fill: { color: CARD }, line: { color: AMBER, width: 1 } });
    s.addText(p.name, { x, y: 3.2, w: 2.75, h: 0.8, color: LIGHT, fontSize: 14, bold: true, align: 'center', valign: 'middle', fontFace: 'Arial' });
    s.addText(p.price, { x, y: 4.1, w: 2.75, h: 0.5, color: AMBER, fontSize: 16, bold: true, align: 'center', fontFace: 'Arial' });
  });

  // 7. Contacts
  s = pptx.addSlide();
  s.background = { color: AMBER };
  s.addText('СВЯЖИТЕСЬ С НАМИ', { x: 0.7, y: 1.3, w: 11, h: 0.5, color: DARK, fontSize: 16, bold: true, charSpacing: 4, fontFace: 'Arial' });
  s.addText('ИТЦ Сибирь — защитим вашу технику', { x: 0.7, y: 1.9, w: 12, h: 1, color: DARK, fontSize: 40, bold: true, fontFace: 'Arial' });
  s.addText([
    { text: `Телефон:  ${contacts.phone}\n`, options: { bold: true } },
    { text: `Email:  ${contacts.email}\n`, options: {} },
    { text: `Сайт:  ${contacts.site}`, options: {} },
  ], { x: 0.7, y: 3.4, w: 11, h: 2.5, color: DARK, fontSize: 22, fontFace: 'Arial', lineSpacingMultiple: 1.5 });

  pptx.writeFile({ fileName: 'КП_Защита_ИТЦ_Сибирь.pptx' });
}