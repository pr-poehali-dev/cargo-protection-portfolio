import pptxgen from 'pptxgenjs';

const DARK = '141821';
const CARD = '1B1F29';
const AMBER = 'F5A623';
const LIGHT = 'F4F1EA';
const GREY = '9AA0AC';

export interface Tier {
  name: string;
  level: string;
  price: string;
  items: string[];
}

export const tiers: Tier[] = [
  {
    name: 'Базовая',
    level: 'Старт',
    price: 'от 28 000 ₽',
    items: ['Защита картера двигателя', 'Сталь 3 мм', 'Порошковая окраска', 'Монтаж 1 день', 'Гарантия 12 мес.'],
  },
  {
    name: 'Оптимальная',
    level: 'Рекомендуем',
    price: 'от 54 000 ₽',
    items: ['Защита двигателя и КПП', 'Защита радиатора', 'Сталь 4 мм', 'Антикор-покрытие', 'Монтаж 1–2 дня', 'Гарантия 24 мес.'],
  },
  {
    name: 'Максимальная',
    level: 'Off-road',
    price: 'от 92 000 ₽',
    items: ['Полный комплект защиты', 'Двигатель, КПП, картер, радиатор', 'Сталь 5 мм / композит', 'Усиленные кронштейны', 'Монтаж 2–3 дня', 'Гарантия 36 мес.'],
  },
];

export const advantages = [
  ['Защита от ударов', 'Броня выдерживает удары камней и препятствий на бездорожье'],
  ['Экономия на ремонте', 'Один ремонт двигателя дороже полного комплекта защиты'],
  ['Сталь до 5 мм', 'Прочные листовые стали и композиты собственного производства'],
  ['Точная посадка', 'Заводские крепления Shacman X3000, без сверления'],
  ['Антикоррозия', 'Порошковая окраска и антикор-обработка всех узлов'],
  ['Быстрый монтаж', 'Установка от 1 дня в сервисном центре 1500 м²'],
];

export const specs = [
  ['Материал', 'Сталь 3–5 мм, композитные панели'],
  ['Покрытие', 'Порошковая окраска + антикор'],
  ['Крепёж', 'Заводские точки, усиленные кронштейны'],
  ['Совместимость', 'Shacman X3000, FAW, Howo, Sitrak'],
  ['Узлы защиты', 'Двигатель, КПП, картер, радиатор'],
  ['Гарантия', 'До 36 месяцев'],
];

export function exportKpToPptx() {
  const pptx = new pptxgen();
  pptx.defineLayout({ name: 'WIDE', width: 13.33, height: 7.5 });
  pptx.layout = 'WIDE';
  pptx.author = 'Порт Восток';
  pptx.company = 'Порт Восток';
  pptx.title = 'КП — Защита для грузовиков Shacman';

  const bg = { color: DARK };

  // 1. Cover
  let s = pptx.addSlide();
  s.background = bg;
  s.addShape(pptx.ShapeType.rect, { x: 0, y: 0, w: 0.25, h: 7.5, fill: { color: AMBER } });
  s.addText('ПОРТ ВОСТОК', { x: 0.7, y: 0.5, w: 8, h: 0.4, color: AMBER, fontSize: 14, bold: true, charSpacing: 4, fontFace: 'Arial' });
  s.addText('ЗАЩИТА ДЛЯ\nГРУЗОВОЙ ТЕХНИКИ', { x: 0.7, y: 2.2, w: 11, h: 2, color: LIGHT, fontSize: 54, bold: true, fontFace: 'Arial', lineSpacingMultiple: 0.95 });
  s.addText('Коммерческое предложение · Shacman X3000 и спецтехника', { x: 0.7, y: 4.3, w: 11, h: 0.5, color: GREY, fontSize: 18, fontFace: 'Arial' });
  s.addText('Красноярск · +7 (800) 000-00-00 · port-vostok.ru', { x: 0.7, y: 6.7, w: 11, h: 0.4, color: GREY, fontSize: 12, fontFace: 'Arial' });

  // 2. Service
  s = pptx.addSlide();
  s.background = bg;
  s.addText('Услуга', { x: 0.7, y: 0.5, w: 8, h: 0.4, color: AMBER, fontSize: 14, bold: true, charSpacing: 3, fontFace: 'Arial' });
  s.addText('Установка защиты двигателя и узлов', { x: 0.7, y: 0.95, w: 12, h: 0.9, color: LIGHT, fontSize: 34, bold: true, fontFace: 'Arial' });
  s.addText(
    'Мы устанавливаем защиту двигателя, радиатора, картера и КПП на грузовики Shacman и спецтехнику. Собственный сервисный центр 1500 м², более 80 000 единиц запчастей в наличии. Работаем с Shacman, FAW, Shaanxi, Howo, Sitrak. Возможен выезд.',
    { x: 0.7, y: 2, w: 11.9, h: 2, color: GREY, fontSize: 18, fontFace: 'Arial', lineSpacingMultiple: 1.3 }
  );
  ['Двигатель', 'Радиатор', 'Картер', 'КПП'].forEach((t, i) => {
    s.addShape(pptx.ShapeType.rect, { x: 0.7 + i * 3, y: 4.4, w: 2.7, h: 1.6, fill: { color: CARD }, line: { color: AMBER, width: 1 } });
    s.addText(t, { x: 0.7 + i * 3, y: 4.4, w: 2.7, h: 1.6, color: LIGHT, fontSize: 22, bold: true, align: 'center', valign: 'middle', fontFace: 'Arial' });
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

  // 5. Tiers / pricing
  s = pptx.addSlide();
  s.background = bg;
  s.addText('Тарифы', { x: 0.7, y: 0.5, w: 8, h: 0.4, color: AMBER, fontSize: 14, bold: true, charSpacing: 3, fontFace: 'Arial' });
  s.addText('Варианты защиты с ценами', { x: 0.7, y: 0.95, w: 12, h: 0.9, color: LIGHT, fontSize: 34, bold: true, fontFace: 'Arial' });
  tiers.forEach((t, i) => {
    const x = 0.7 + i * 4.1;
    const featured = i === 1;
    s.addShape(pptx.ShapeType.rect, { x, y: 2.1, w: 3.85, h: 4.8, fill: { color: featured ? '242833' : CARD }, line: featured ? { color: AMBER, width: 2 } : { color: '2A2F3A', width: 1 } });
    s.addShape(pptx.ShapeType.rect, { x, y: 2.1, w: 3.85, h: 0.5, fill: { color: featured ? AMBER : '2A2F3A' } });
    s.addText(t.level.toUpperCase(), { x, y: 2.1, w: 3.85, h: 0.5, color: featured ? DARK : GREY, fontSize: 12, bold: true, align: 'center', valign: 'middle', charSpacing: 2, fontFace: 'Arial' });
    s.addText(t.name, { x: x + 0.3, y: 2.8, w: 3.3, h: 0.5, color: LIGHT, fontSize: 24, bold: true, fontFace: 'Arial' });
    s.addText(t.price, { x: x + 0.3, y: 3.35, w: 3.3, h: 0.6, color: AMBER, fontSize: 26, bold: true, fontFace: 'Arial' });
    s.addText(t.items.map((it) => `•  ${it}`).join('\n'), { x: x + 0.3, y: 4.1, w: 3.3, h: 2.6, color: GREY, fontSize: 13, fontFace: 'Arial', lineSpacingMultiple: 1.35 });
  });

  // 6. Examples
  s = pptx.addSlide();
  s.background = bg;
  s.addText('Портфолио', { x: 0.7, y: 0.5, w: 8, h: 0.4, color: AMBER, fontSize: 14, bold: true, charSpacing: 3, fontFace: 'Arial' });
  s.addText('Примеры установленной защиты', { x: 0.7, y: 0.95, w: 12, h: 0.9, color: LIGHT, fontSize: 34, bold: true, fontFace: 'Arial' });
  ['Shacman X3000 · картер', 'Howo · двигатель + КПП', 'Sitrak · полный комплект'].forEach((t, i) => {
    const x = 0.7 + i * 4.1;
    s.addShape(pptx.ShapeType.rect, { x, y: 2.2, w: 3.85, h: 3, fill: { color: CARD }, line: { color: '2A2F3A', width: 1 } });
    s.addText('IMG', { x, y: 2.2, w: 3.85, h: 3, color: '3A3F4A', fontSize: 20, bold: true, align: 'center', valign: 'middle', fontFace: 'Arial' });
    s.addText(t, { x, y: 5.35, w: 3.85, h: 0.5, color: LIGHT, fontSize: 15, bold: true, align: 'center', fontFace: 'Arial' });
  });

  // 7. Contacts
  s = pptx.addSlide();
  s.background = { color: AMBER };
  s.addText('СВЯЖИТЕСЬ С НАМИ', { x: 0.7, y: 1.5, w: 11, h: 0.5, color: DARK, fontSize: 16, bold: true, charSpacing: 4, fontFace: 'Arial' });
  s.addText('Готовы защитить вашу технику', { x: 0.7, y: 2.1, w: 11, h: 1, color: DARK, fontSize: 44, bold: true, fontFace: 'Arial' });
  s.addText([
    { text: 'Телефон:  +7 (800) 000-00-00\n', options: { bold: true } },
    { text: 'Email:  info@port-vostok.ru\n', options: {} },
    { text: 'Сайт:  port-vostok.ru\n', options: {} },
    { text: 'Адрес:  г. Красноярск, сервисный центр 1500 м²', options: {} },
  ], { x: 0.7, y: 3.6, w: 11, h: 2.5, color: DARK, fontSize: 22, fontFace: 'Arial', lineSpacingMultiple: 1.5 });

  pptx.writeFile({ fileName: 'КП_Защита_Shacman_ПортВосток.pptx' });
}