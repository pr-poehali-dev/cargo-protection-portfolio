import { products, fullSet, advantages, specs, contacts } from '@/lib/exportPptx';

const HERO = 'https://cdn.poehali.dev/projects/7d6ba88e-8b0d-489a-9d53-8ca97efd3b5f/bucket/329e3a44-9cef-4659-a8ad-377081553f51.png';
const LOGO = 'https://cdn.poehali.dev/projects/7d6ba88e-8b0d-489a-9d53-8ca97efd3b5f/bucket/de647896-1f60-4e98-8ce2-6fe07d11fbe4.png';

const C = {
  dark: '#141821',
  card: '#1B1F29',
  card2: '#20242F',
  amber: '#F5A623',
  light: '#F4F1EA',
  muted: '#9AA0AC',
  border: '#2A2F3A',
};

const page: React.CSSProperties = {
  width: '210mm',
  height: '297mm',
  background: C.dark,
  color: C.light,
  fontFamily: "'Golos Text', sans-serif",
  position: 'relative',
  overflow: 'hidden',
  pageBreakAfter: 'always',
  breakAfter: 'page',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
};

const Label = ({ children, dark }: { children: React.ReactNode; dark?: boolean }) => (
  <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: dark ? C.dark : C.amber, opacity: dark ? 0.6 : 1, marginBottom: 4 }}>
    {children}
  </p>
);

const SectionHead = ({ num, label, title, dark }: { num: string; label: string; title: string; dark?: boolean }) => (
  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, marginBottom: 12 }}>
    <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 44, fontWeight: 700, color: C.border, lineHeight: 1, marginRight: 6, flexShrink: 0 }}>{num}</span>
    <div>
      <Label dark={dark}>{label}</Label>
      <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 22, fontWeight: 700, color: dark ? C.dark : C.light, margin: 0, lineHeight: 1.1 }}>{title}</h2>
    </div>
  </div>
);

// Логотип без белого фона — через screen blend на тёмном
const LogoDark = ({ size = 48 }: { size?: number }) => (
  <img src={LOGO} alt="ИТЦ" style={{ width: size, height: size, objectFit: 'contain', mixBlendMode: 'screen' }} />
);

// Логотип на светлом (янтарном) фоне — через multiply
const LogoLight = ({ size = 48 }: { size?: number }) => (
  <img src={LOGO} alt="ИТЦ" style={{ width: size, height: size, objectFit: 'contain', mixBlendMode: 'multiply' }} />
);

// ─── PAGE 1: ОБЛОЖКА (левая половина) + ПРОДУКЦИЯ (правая) ───────────────────
const PageCoverProducts = () => (
  <div style={{ ...page, flexDirection: 'row' }}>

    {/* ЛЕВАЯ — обложка */}
    <div style={{ width: '48%', position: 'relative', flexShrink: 0, display: 'flex', flexDirection: 'column' }}>
      <img src={HERO} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, ${C.dark} 40%, transparent)` }} />
      <div style={{ position: 'absolute', left: 0, top: 0, width: 4, height: '100%', background: C.amber }} />

      <div style={{ position: 'relative', padding: '14mm 10mm 10mm 12mm', height: '100%', display: 'flex', flexDirection: 'column' }}>
        {/* лого */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <LogoDark size={40} />
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.25em', color: C.amber }}>ИТЦ СИБИРЬ</span>
        </div>

        {/* заголовок */}
        <div style={{ marginTop: 'auto', paddingBottom: '18mm' }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: C.amber, marginBottom: 10 }}>
            Коммерческое предложение
          </p>
          <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 38, fontWeight: 700, lineHeight: 0.95, color: C.light, margin: '0 0 12px' }}>
            ЗАЩИТА ДЛЯ<br />ГРУЗОВОЙ<br />ТЕХНИКИ
          </h1>
          <p style={{ fontSize: 10, color: C.muted, lineHeight: 1.5, margin: '0 0 14px' }}>
            Защита картера, топливного бака, воздушного фильтра и датчиков для Shacman X3000 и спецтехники.
          </p>
          <div>
            <p style={{ fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.muted, marginBottom: 2 }}>Телефон</p>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, color: C.amber, margin: '0 0 8px' }}>{contacts.phone}</p>
            <p style={{ fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.muted, marginBottom: 2 }}>Сайт</p>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, color: C.light, margin: 0 }}>{contacts.site}</p>
          </div>
        </div>
      </div>
    </div>

    {/* разделитель */}
    <div style={{ width: 1, background: C.border, flexShrink: 0 }} />

    {/* ПРАВАЯ — продукция */}
    <div style={{ flex: 1, padding: '14mm 10mm 10mm 12mm', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <SectionHead num="01" label="Продукция" title="Что мы производим" />
      <p style={{ fontSize: 10, color: C.muted, lineHeight: 1.5, marginBottom: 12 }}>
        Изготавливаем из <strong style={{ color: C.light }}>стали 3 и 09Г2С</strong> толщиной <strong style={{ color: C.light }}>до 8 мм</strong>. Каждая защита проектируется под конкретный узел.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, flex: 1 }}>
        {products.map((p) => (
          <div key={p.name} style={{ background: C.card, border: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: 88, overflow: 'hidden', background: C.card2, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            </div>
            <div style={{ padding: '8px 10px', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 12, fontWeight: 600, color: C.light, margin: '0 0 3px', lineHeight: 1.2 }}>{p.name}</p>
              <p style={{ fontSize: 9, color: C.muted, margin: '0 0 5px', lineHeight: 1.35, flex: 1 }}>{p.desc}</p>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 700, color: C.amber, margin: 0 }}>{p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── PAGE 2: ПРЕИМУЩЕСТВА + ХАРАКТЕРИСТИКИ + ЦЕНЫ + ПОРТФОЛИО ────────────────
const PageAdvSpecsPricing = () => (
  <div style={{ ...page, padding: '12mm 12mm 10mm', gap: 14 }}>

    {/* ПРЕИМУЩЕСТВА */}
    <div>
      <SectionHead num="02" label="Преимущества" title="Почему стоит установить защиту" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 1 }}>
        {advantages.map(([t, d]) => (
          <div key={t} style={{ background: C.card, padding: '9px 10px', borderLeft: `3px solid ${C.amber}` }}>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, fontWeight: 600, color: C.light, margin: '0 0 3px' }}>{t}</p>
            <p style={{ fontSize: 8.5, color: C.muted, lineHeight: 1.35, margin: 0 }}>{d}</p>
          </div>
        ))}
      </div>
    </div>

    {/* ХАРАКТЕРИСТИКИ + ЦЕНЫ рядом */}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>

      {/* Характеристики */}
      <div>
        <SectionHead num="03" label="Характеристики" title="Материалы и параметры" />
        <div style={{ border: `1px solid ${C.border}`, overflow: 'hidden' }}>
          {specs.map(([k, v], i) => (
            <div key={k} style={{ display: 'grid', gridTemplateColumns: '42% 58%', background: i % 2 ? C.card : C.card2, borderBottom: i < specs.length - 1 ? `1px solid ${C.border}` : 'none' }}>
              <div style={{ padding: '6px 9px', borderRight: `1px solid ${C.border}` }}>
                <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9.5, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: C.amber }}>{k}</span>
              </div>
              <div style={{ padding: '6px 9px' }}>
                <span style={{ fontSize: 9.5, color: C.light }}>{v}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Цены */}
      <div>
        <SectionHead num="04" label="Цены" title="Стоимость защит" />
        <div style={{ border: `1px solid ${C.border}`, marginBottom: 8 }}>
          {products.map((p, i) => (
            <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 10px', background: i % 2 ? C.card : C.card2, borderBottom: i < products.length - 1 ? `1px solid ${C.border}` : 'none' }}>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10.5, fontWeight: 600, color: C.light }}>{p.name}</span>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 12, fontWeight: 700, color: C.amber, flexShrink: 0, marginLeft: 8 }}>{p.price}</span>
            </div>
          ))}
        </div>
        {/* Комплект */}
        <div style={{ background: C.card, border: `2px solid ${C.amber}`, padding: '10px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', background: C.amber, color: C.dark, padding: '2px 6px' }}>Полный комплект</span>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, color: C.amber, margin: '4px 0 0', opacity: 0.85 }}>{fullSet.save}</p>
          </div>
          <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 26, fontWeight: 700, color: C.amber }}>{fullSet.price}</span>
        </div>
      </div>
    </div>

    {/* ПОРТФОЛИО */}
    <div>
      <SectionHead num="05" label="Портфолио" title="Примеры установленных защит" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
        {products.map((p) => (
          <div key={p.name} style={{ background: C.card, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
            <div style={{ height: 65, overflow: 'hidden' }}>
              <img src={p.example} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9.5, fontWeight: 600, color: C.light, padding: '5px 7px', margin: 0, lineHeight: 1.2 }}>{p.name}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// ─── PAGE 3: КОНТАКТЫ ─────────────────────────────────────────────────────────
const PageContacts = () => (
  <div style={{ ...page, padding: 0, pageBreakAfter: 'auto', breakAfter: 'auto' }}>
    <img src={HERO} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.25 }} />
    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${C.amber} 0%, #c97d00 100%)`, opacity: 0.93 }} />
    <div style={{ position: 'absolute', left: 0, top: 0, width: 5, height: '100%', background: C.dark }} />

    <div style={{ position: 'relative', padding: '18mm 14mm 14mm 18mm', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <LogoLight size={48} />
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: '0.3em', color: C.dark }}>ИТЦ СИБИРЬ</span>
      </div>

      <div>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: C.dark, opacity: 0.55, marginBottom: 10 }}>Свяжитесь с нами</p>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 42, fontWeight: 700, color: C.dark, lineHeight: 1.0, margin: '0 0 28px' }}>
          Готовы защитить<br />вашу технику
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24 }}>
          {[['Телефон', contacts.phone], ['Email', contacts.email], ['Сайт', contacts.site]].map(([l, v]) => (
            <div key={l}>
              <p style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.dark, opacity: 0.55, margin: '0 0 4px' }}>{l}</p>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 15, fontWeight: 600, color: C.dark, margin: 0 }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      <p style={{ fontSize: 9, color: C.dark, opacity: 0.4 }}>© 2026 ИТЦ Сибирь · Защита для грузовой техники</p>
    </div>
  </div>
);

// ─── ГЛАВНЫЙ КОМПОНЕНТ ────────────────────────────────────────────────────────
const Brochure = () => (
  <div id="brochure" style={{ background: '#0a0a0a' }}>
    <PageCoverProducts />
    <PageAdvSpecsPricing />
    <PageContacts />
  </div>
);

export default Brochure;
