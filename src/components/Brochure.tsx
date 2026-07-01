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
  minHeight: '297mm',
  background: C.dark,
  color: C.light,
  fontFamily: "'Golos Text', sans-serif",
  position: 'relative',
  overflow: 'hidden',
  pageBreakAfter: 'always',
  breakAfter: 'page',
  boxSizing: 'border-box',
};

const Label = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: C.amber, marginBottom: 6 }}>
    {children}
  </p>
);

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 28, fontWeight: 700, color: C.light, margin: '0 0 20px', lineHeight: 1.1 }}>
    {children}
  </h2>
);

const Num = ({ n }: { n: string }) => (
  <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 56, fontWeight: 700, color: C.border, lineHeight: 1, marginRight: 14 }}>
    {n}
  </span>
);

// ─── PAGE 1: ОБЛОЖКА ─────────────────────────────────────────────────────────
const PageCover = () => (
  <div style={{ ...page, padding: 0 }}>
    {/* фоновое фото */}
    <img src={HERO} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.45 }} />
    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${C.dark} 55%, transparent)` }} />
    {/* янтарная полоска слева */}
    <div style={{ position: 'absolute', left: 0, top: 0, width: 5, height: '100%', background: C.amber }} />

    <div style={{ position: 'relative', padding: '20mm 16mm 16mm 20mm', height: '100%', display: 'flex', flexDirection: 'column' }}>
      {/* лого + название */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <img src={LOGO} alt="ИТЦ" style={{ width: 44, height: 44, objectFit: 'contain', mixBlendMode: 'multiply' }} />
        </div>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: '0.3em', color: C.amber }}>ИТЦ СИБИРЬ</span>
      </div>

      {/* заголовок */}
      <div style={{ marginTop: 'auto', paddingBottom: '40mm' }}>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase', color: C.amber, marginBottom: 12 }}>
          Коммерческое предложение
        </p>
        <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 52, fontWeight: 700, lineHeight: 0.95, color: C.light, margin: '0 0 16px' }}>
          ЗАЩИТА ДЛЯ<br />ГРУЗОВОЙ ТЕХНИКИ
        </h1>
        <p style={{ fontSize: 13, color: C.muted, maxWidth: 110, lineHeight: 1.5 }}>
          Производим защиту картера, топливного бака, воздушного фильтра и датчиков для грузовиков Shacman X3000 и спецтехники.
        </p>
        <div style={{ marginTop: 20, display: 'flex', gap: 24 }}>
          <div>
            <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: 3 }}>Телефон</p>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, color: C.amber }}>{contacts.phone}</p>
          </div>
          <div>
            <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: 3 }}>Сайт</p>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, color: C.light }}>{contacts.site}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── PAGE 2: ПРОДУКЦИЯ ────────────────────────────────────────────────────────
const PageProducts = () => (
  <div style={{ ...page, padding: '16mm 14mm' }}>
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, marginBottom: 16 }}>
      <Num n="01" />
      <div>
        <Label>Продукция</Label>
        <H2>Что мы производим</H2>
      </div>
    </div>
    <p style={{ fontSize: 11, color: C.muted, lineHeight: 1.55, marginBottom: 18, maxWidth: '85%' }}>
      ИТЦ Сибирь — производит защиты для грузовиков и спецтехники. Изготавливаем из <strong style={{ color: C.light }}>стали 3 и 09Г2С</strong> толщиной <strong style={{ color: C.light }}>до 8 мм</strong>. Каждая защита проектируется под конкретный узел.
    </p>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
      {products.map((p) => (
        <div key={p.name} style={{ background: C.card, border: `1px solid ${C.border}` }}>
          <div style={{ height: 110, overflow: 'hidden', background: C.card2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
          </div>
          <div style={{ padding: '10px 12px' }}>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 600, color: C.light, margin: '0 0 4px' }}>{p.name}</p>
            <p style={{ fontSize: 10, color: C.muted, margin: '0 0 6px', lineHeight: 1.4 }}>{p.desc}</p>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 15, fontWeight: 700, color: C.amber, margin: 0 }}>{p.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── PAGE 3: ПРЕИМУЩЕСТВА + ХАРАКТЕРИСТИКИ ────────────────────────────────────
const PageAdvSpecs = () => (
  <div style={{ ...page, padding: '16mm 14mm' }}>
    {/* Преимущества */}
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, marginBottom: 14 }}>
      <Num n="02" />
      <div>
        <Label>Преимущества</Label>
        <H2>Почему стоит установить защиту</H2>
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, marginBottom: 20 }}>
      {advantages.map(([t, d]) => (
        <div key={t} style={{ background: C.card, padding: '12px 12px', borderLeft: `3px solid ${C.amber}` }}>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, fontWeight: 600, color: C.light, margin: '0 0 4px' }}>{t}</p>
          <p style={{ fontSize: 9.5, color: C.muted, lineHeight: 1.4, margin: 0 }}>{d}</p>
        </div>
      ))}
    </div>

    {/* Характеристики */}
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, marginBottom: 14 }}>
      <Num n="03" />
      <div>
        <Label>Характеристики</Label>
        <H2>Технические характеристики</H2>
      </div>
    </div>
    <div style={{ border: `1px solid ${C.border}`, overflow: 'hidden' }}>
      {specs.map(([k, v], i) => (
        <div key={k} style={{ display: 'grid', gridTemplateColumns: '90mm 1fr', background: i % 2 ? C.card : C.card2 }}>
          <div style={{ padding: '8px 12px', borderRight: `1px solid ${C.border}` }}>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: C.amber }}>{k}</span>
          </div>
          <div style={{ padding: '8px 12px' }}>
            <span style={{ fontSize: 11, color: C.light }}>{v}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// ─── PAGE 4: ЦЕНЫ + ПОРТФОЛИО ─────────────────────────────────────────────────
const PagePricing = () => (
  <div style={{ ...page, padding: '16mm 14mm' }}>
    {/* Цены */}
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, marginBottom: 14 }}>
      <Num n="04" />
      <div>
        <Label>Цены</Label>
        <H2>Варианты защит с ценами</H2>
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 72mm', gap: 12, marginBottom: 16 }}>
      {/* список */}
      <div style={{ border: `1px solid ${C.border}` }}>
        {products.map((p, i) => (
          <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: i % 2 ? C.card : C.card2, borderBottom: i < products.length - 1 ? `1px solid ${C.border}` : 'none' }}>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, fontWeight: 600, color: C.light }}>{p.name}</span>
            <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 15, fontWeight: 700, color: C.amber }}>{p.price}</span>
          </div>
        ))}
      </div>
      {/* комплект */}
      <div style={{ background: C.card, border: `2px solid ${C.amber}`, padding: '14px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', background: C.amber, color: C.dark, padding: '3px 7px', alignSelf: 'flex-start' }}>
          Полный комплект
        </span>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 30, fontWeight: 700, color: C.amber, margin: '8px 0 2px' }}>{fullSet.price}</p>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, color: C.amber, margin: '0 0 10px', opacity: 0.8 }}>{fullSet.save}</p>
        {fullSet.items.map((it) => (
          <div key={it} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
            <span style={{ color: C.amber, fontSize: 10 }}>✓</span>
            <span style={{ fontSize: 10, color: C.muted }}>{it}</span>
          </div>
        ))}
      </div>
    </div>
    {/* 3D-скан */}
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: C.card, border: `1px solid ${C.border}`, padding: '12px 14px', marginBottom: 20 }}>
      <span style={{ fontSize: 20, flexShrink: 0 }}>🔍</span>
      <div>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, fontWeight: 600, color: C.light, margin: '0 0 3px' }}>Нет вашей модели?</p>
        <p style={{ fontSize: 11, color: C.muted, margin: 0 }}>Сделаем 3D-сканирование техники и спроектируем защиту индивидуально под вас.</p>
      </div>
    </div>

    {/* Портфолио */}
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 12, marginBottom: 14 }}>
      <Num n="05" />
      <div>
        <Label>Портфолио</Label>
        <H2>Примеры установленных защит</H2>
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 8 }}>
      {products.map((p) => (
        <div key={p.name} style={{ background: C.card, border: `1px solid ${C.border}`, overflow: 'hidden' }}>
          <div style={{ height: 70, overflow: 'hidden' }}>
            <img src={p.example} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, fontWeight: 600, color: C.light, padding: '6px 8px', margin: 0 }}>{p.name}</p>
        </div>
      ))}
    </div>
  </div>
);

// ─── PAGE 5: КОНТАКТЫ (с фоном) ───────────────────────────────────────────────
const PageContacts = () => (
  <div style={{ ...page, padding: 0, pageBreakAfter: 'auto', breakAfter: 'auto' }}>
    <img src={HERO} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }} />
    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${C.amber} 0%, #c97d00 100%)`, opacity: 0.92 }} />
    <div style={{ position: 'absolute', left: 0, top: 0, width: 5, height: '100%', background: C.dark }} />

    <div style={{ position: 'relative', padding: '20mm 16mm 16mm 20mm', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ width: 44, height: 44, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={LOGO} alt="ИТЦ" style={{ width: 40, height: 40, objectFit: 'contain', mixBlendMode: 'multiply' }} />
        </div>
        <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.3em', color: C.dark }}>ИТЦ СИБИРЬ</span>
      </div>

      <div>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: C.dark, opacity: 0.6, marginBottom: 10 }}>Свяжитесь с нами</p>
        <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 38, fontWeight: 700, color: C.dark, lineHeight: 1.05, margin: '0 0 24px' }}>
          Готовы защитить<br />вашу технику
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>
          {[['📞 Телефон', contacts.phone], ['✉️ Email', contacts.email], ['🌐 Сайт', contacts.site]].map(([l, v]) => (
            <div key={l as string}>
              <p style={{ fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', color: C.dark, opacity: 0.6, margin: '0 0 4px' }}>{l}</p>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 600, color: C.dark, margin: 0 }}>{v}</p>
            </div>
          ))}
        </div>
      </div>

      <p style={{ fontSize: 9, color: C.dark, opacity: 0.5 }}>© 2026 ИТЦ Сибирь · Защита для грузовой техники</p>
    </div>
  </div>
);

// ─── ГЛАВНЫЙ КОМПОНЕНТ ────────────────────────────────────────────────────────
const Brochure = () => (
  <div id="brochure" style={{ background: '#0a0a0a' }}>
    <PageCover />
    <PageProducts />
    <PageAdvSpecs />
    <PagePricing />
    <PageContacts />
  </div>
);

export default Brochure;
