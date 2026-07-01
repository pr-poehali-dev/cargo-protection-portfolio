import { products, fullSet, advantages, specs, contacts } from '@/lib/exportPptx';

const HERO = 'https://cdn.poehali.dev/projects/7d6ba88e-8b0d-489a-9d53-8ca97efd3b5f/bucket/329e3a44-9cef-4659-a8ad-377081553f51.png';

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
};

// Общий фоновый слой для страниц 1, 2, 3
const PageBg = ({ opacity = 0.12 }: { opacity?: number }) => (
  <>
    <img
      src={HERO}
      alt=""
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', opacity, zIndex: 0 }}
    />
    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, ${C.dark}ee 0%, ${C.dark}bb 100%)`, zIndex: 1 }} />
  </>
);

const Label = ({ children }: { children: React.ReactNode }) => (
  <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.3em', textTransform: 'uppercase', color: C.amber, margin: '0 0 4px' }}>
    {children}
  </p>
);

const Num = ({ n }: { n: string }) => (
  <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 44, fontWeight: 700, color: C.border, lineHeight: 1, marginRight: 10, flexShrink: 0 }}>
    {n}
  </span>
);

const SectionHead = ({ num, label, title, mb = 10 }: { num: string; label: string; title: string; mb?: number }) => (
  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, marginBottom: mb }}>
    <Num n={num} />
    <div>
      <Label>{label}</Label>
      <h2 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 20, fontWeight: 700, color: C.light, margin: 0, lineHeight: 1.1 }}>{title}</h2>
    </div>
  </div>
);

// ─── PAGE 1: ОБЛОЖКА ─────────────────────────────────────────────────────────
const PageCover = () => (
  <div style={{ ...page, padding: 0 }}>
    {/* фон отдалён (объект более мелкий), более видимый opacity */}
    <img
      src={HERO}
      alt=""
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: '70% center', opacity: 0.65, zIndex: 0 }}
    />
    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${C.dark} 50%, ${C.dark}55 100%)`, zIndex: 1 }} />
    <div style={{ position: 'absolute', left: 0, top: 0, width: 5, height: '100%', background: C.amber, zIndex: 2 }} />

    <div style={{ position: 'relative', zIndex: 2, padding: '20mm 16mm 16mm 20mm', height: '100%', display: 'flex', flexDirection: 'column', boxSizing: 'border-box' }}>
      <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: '0.3em', color: C.amber }}>
        ИТЦ СИБИРЬ
      </span>

      <div style={{ marginTop: 'auto', paddingBottom: '35mm' }}>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, letterSpacing: '0.35em', textTransform: 'uppercase', color: C.amber, marginBottom: 12 }}>
          Коммерческое предложение
        </p>
        <h1 style={{ fontFamily: "'Oswald', sans-serif", fontSize: 54, fontWeight: 700, lineHeight: 0.95, color: C.light, margin: '0 0 18px' }}>
          ЗАЩИТА ДЛЯ<br />ГРУЗОВОЙ ТЕХНИКИ
        </h1>
        {/* растянут по горизонтали — убран maxWidth, добавлен maxWidth побольше */}
        <p style={{ fontSize: 13, color: C.muted, maxWidth: '72mm', lineHeight: 1.6 }}>
          Производим защиту картера, топливного бака, воздушного фильтра и датчиков для грузовиков Shacman X3000 и спецтехники.
        </p>
        <div style={{ marginTop: 22, display: 'flex', gap: 28 }}>
          <div>
            <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: 3 }}>Телефон</p>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, color: C.amber, margin: 0 }}>{contacts.phone}</p>
          </div>
          <div>
            <p style={{ fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', color: C.muted, marginBottom: 3 }}>Сайт</p>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, color: C.light, margin: 0 }}>{contacts.site}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// ─── PAGE 2: ПРОДУКЦИЯ + ПРЕИМУЩЕСТВА ────────────────────────────────────────
const PageProductsAdv = () => (
  <div style={{ ...page, padding: 0 }}>
    <PageBg opacity={0.18} />
    <div style={{ position: 'relative', zIndex: 2, padding: '13mm 12mm', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column' }}>

      {/* ПРОДУКЦИЯ */}
      <div style={{ marginBottom: 18 }}>
        <SectionHead num="01" label="Продукция" title="Что мы производим" mb={10} />
        <p style={{ fontSize: 10.5, color: C.muted, lineHeight: 1.55, marginBottom: 12 }}>
          Изготавливаем из <strong style={{ color: C.light }}>стали 3 и 09Г2С</strong> толщиной <strong style={{ color: C.light }}>до 8 мм</strong>. Каждая защита проектируется под конкретный узел техники.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 9 }}>
          {products.map((p) => (
            <div key={p.name} style={{ background: `${C.card}ee`, border: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column' }}>
              <div style={{ height: 105, background: C.card2, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0 }}>
                <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div style={{ padding: '9px 9px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 12, fontWeight: 600, color: C.light, margin: '0 0 4px', lineHeight: 1.2 }}>{p.name}</p>
                <p style={{ fontSize: 9, color: C.muted, margin: '0 0 6px', lineHeight: 1.4, flex: 1 }}>{p.desc}</p>
                <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 700, color: C.amber, margin: 0 }}>{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ПРЕИМУЩЕСТВА — flex: 1 чтобы занять оставшееся место */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <SectionHead num="02" label="Преимущества" title="Почему стоит установить защиту" mb={10} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2, flex: 1 }}>
          {advantages.map(([t, d]) => (
            <div key={t} style={{ background: `${C.card}ee`, padding: '14px 13px', borderLeft: `3px solid ${C.amber}`, display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, fontWeight: 600, color: C.light, margin: '0 0 6px' }}>{t}</p>
              <p style={{ fontSize: 9.5, color: C.muted, lineHeight: 1.45, margin: 0, flex: 1 }}>{d}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);

// ─── PAGE 3: ХАРАКТЕРИСТИКИ + ЦЕНЫ + ПОРТФОЛИО ───────────────────────────────
const PageSpecsPricingPortfolio = () => (
  <div style={{ ...page, padding: 0 }}>
    <PageBg opacity={0.18} />
    <div style={{ position: 'relative', zIndex: 2, padding: '13mm 12mm', height: '100%', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', gap: 16 }}>

      {/* ХАРАКТЕРИСТИКИ + ЦЕНЫ рядом */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>

        {/* Характеристики */}
        <div>
          <SectionHead num="03" label="Характеристики" title="Материалы и параметры" mb={10} />
          <div style={{ border: `1px solid ${C.border}`, overflow: 'hidden' }}>
            {specs.map(([k, v], i) => (
              <div key={k} style={{ display: 'grid', gridTemplateColumns: '44% 56%', background: i % 2 ? `${C.card}ee` : `${C.card2}ee`, borderBottom: i < specs.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                <div style={{ padding: '8px 11px', borderRight: `1px solid ${C.border}` }}>
                  <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.04em', color: C.amber }}>{k}</span>
                </div>
                <div style={{ padding: '8px 11px' }}>
                  <span style={{ fontSize: 10, color: C.light }}>{v}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Цены */}
        <div>
          <SectionHead num="04" label="Цены" title="Стоимость защит" mb={10} />
          <div style={{ border: `1px solid ${C.border}`, marginBottom: 9 }}>
            {products.map((p, i) => (
              <div key={p.name} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '9px 12px', background: i % 2 ? `${C.card}ee` : `${C.card2}ee`, borderBottom: i < products.length - 1 ? `1px solid ${C.border}` : 'none' }}>
                <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11.5, fontWeight: 600, color: C.light }}>{p.name}</span>
                <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 13, fontWeight: 700, color: C.amber, flexShrink: 0, marginLeft: 8 }}>{p.price}</span>
              </div>
            ))}
          </div>
          {/* Комплект */}
          <div style={{ background: `${C.card}ee`, border: `2px solid ${C.amber}`, padding: '12px 14px', marginBottom: 9 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 9, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', background: C.amber, color: C.dark, padding: '2px 8px' }}>
                Полный комплект
              </span>
              <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 26, fontWeight: 700, color: C.amber }}>{fullSet.price}</span>
            </div>
            <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10, color: C.amber, margin: '0 0 8px', opacity: 0.85 }}>{fullSet.save}</p>
            {fullSet.items.map((it) => (
              <div key={it} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                <span style={{ color: C.amber, fontSize: 10, flexShrink: 0 }}>✓</span>
                <span style={{ fontSize: 10, color: C.muted }}>{it}</span>
              </div>
            ))}
          </div>
          {/* 3D-скан */}
          <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start', background: `${C.card}ee`, border: `1px solid ${C.border}`, padding: '10px 12px' }}>
            <span style={{ fontSize: 17, flexShrink: 0 }}>🔍</span>
            <div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 12, fontWeight: 600, color: C.light, margin: '0 0 3px' }}>Нет вашей модели?</p>
              <p style={{ fontSize: 9.5, color: C.muted, margin: 0, lineHeight: 1.4 }}>Сделаем 3D-сканирование и спроектируем защиту индивидуально под вас.</p>
            </div>
          </div>
        </div>
      </div>

      {/* ПОРТФОЛИО — увеличенные картинки, flex: 1 занимает остаток */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <SectionHead num="05" label="Портфолио" title="Примеры установленных защит" mb={10} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 9, flex: 1 }}>
          {products.map((p) => (
            <div key={p.name} style={{ background: `${C.card}ee`, border: `1px solid ${C.border}`, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1, overflow: 'hidden', minHeight: 90 }}>
                <img src={p.example} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
              <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 10.5, fontWeight: 600, color: C.light, padding: '8px 9px', margin: 0, lineHeight: 1.2, flexShrink: 0, background: C.card }}>{p.name}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  </div>
);

// ─── PAGE 4: КОНТАКТЫ ─────────────────────────────────────────────────────────
const PageContacts = () => (
  <div style={{ ...page, padding: 0, pageBreakAfter: 'auto', breakAfter: 'auto' }}>
    <img src={HERO} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3, zIndex: 0 }} />
    <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(135deg, ${C.amber} 0%, #c97d00 100%)`, opacity: 0.93, zIndex: 1 }} />
    <div style={{ position: 'absolute', left: 0, top: 0, width: 5, height: '100%', background: C.dark, zIndex: 2 }} />

    <div style={{ position: 'relative', zIndex: 2, padding: '20mm 16mm 16mm 20mm', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxSizing: 'border-box' }}>
      <span style={{ fontFamily: "'Oswald', sans-serif", fontSize: 14, fontWeight: 600, letterSpacing: '0.3em', color: C.dark }}>
        ИТЦ СИБИРЬ
      </span>
      <div>
        <p style={{ fontFamily: "'Oswald', sans-serif", fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase', color: C.dark, opacity: 0.55, marginBottom: 10 }}>
          Свяжитесь с нами
        </p>
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
    <PageCover />
    <PageProductsAdv />
    <PageSpecsPricingPortfolio />
    <PageContacts />
  </div>
);

export default Brochure;
