import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { exportKpToPptx, products, fullSet, advantages, specs, contacts } from '@/lib/exportPptx';

const HERO = 'https://cdn.poehali.dev/projects/7d6ba88e-8b0d-489a-9d53-8ca97efd3b5f/bucket/329e3a44-9cef-4659-a8ad-377081553f51.png';

const advIcons = ['ShieldCheck', 'PiggyBank', 'Layers', 'ScanLine', 'Droplets', 'Crosshair'];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky bar */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground">
              <Icon name="Shield" size={20} />
            </div>
            <span className="font-display text-lg font-600 tracking-wide">ИТЦ СИБИРЬ</span>
          </div>
          <Button onClick={exportKpToPptx} className="gap-2 font-500">
            <Icon name="Download" size={16} />
            <span className="hidden sm:inline">Скачать в PowerPoint</span>
            <span className="sm:hidden">Скачать КП</span>
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden diagonal-clip">
        <img src={HERO} alt="Комплект защиты Shacman X3000" className="absolute inset-0 h-full w-full object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40" />
        <div className="steel-grid absolute inset-0 opacity-30" />
        <div className="container relative py-28 md:py-40">
          <p className="animate-fade-up font-display text-sm font-600 uppercase tracking-[0.35em] text-primary">
            Коммерческое предложение · ИТЦ Сибирь
          </p>
          <h1 className="animate-fade-up mt-6 font-display text-5xl font-700 leading-[0.95] md:text-8xl" style={{ animationDelay: '0.1s' }}>
            ЗАЩИТА ДЛЯ<br />ГРУЗОВОЙ ТЕХНИКИ
          </h1>
          <p className="animate-fade-up mt-8 max-w-xl text-lg text-muted-foreground" style={{ animationDelay: '0.2s' }}>
            Производим защиту картера, топливного бака, воздушного фильтра и датчиков для грузовиков Shacman X3000 и спецтехники. Сталь 3 и 09Г2С толщиной до 8 мм.
          </p>
          <div className="animate-fade-up mt-10 flex flex-wrap gap-4" style={{ animationDelay: '0.3s' }}>
            <Button onClick={exportKpToPptx} size="lg" className="gap-2 font-500 amber-glow">
              <Icon name="FileDown" size={18} />
              Скачать презентацию
            </Button>
            <Button size="lg" variant="outline" className="gap-2 border-border font-500">
              <Icon name="Phone" size={18} />
              Получить расчёт
            </Button>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <Section num="01" label="Продукция" title="Что мы производим">
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          ИТЦ Сибирь — производитель защит для грузовиков и спецтехники. Изготавливаем из <span className="text-foreground">стали 3 и 09Г2С</span> толщиной <span className="text-foreground">до 8 мм</span>. Каждая защита проектируется под конкретный узел.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {products.map((p) => (
            <div key={p.name} className="group flex gap-5 overflow-hidden border border-border bg-card transition-colors hover:border-primary">
              <div className="relative h-auto w-32 shrink-0 overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105" />
              </div>
              <div className="flex flex-col justify-center py-5 pr-5">
                <div className="flex items-center gap-2 text-primary">
                  <Icon name={p.icon} size={20} />
                  <h3 className="font-display text-xl font-600 text-foreground">{p.name}</h3>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <p className="mt-3 font-display text-lg font-700 text-primary">{p.price}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ADVANTAGES */}
      <Section num="02" label="Преимущества" title="Почему стоит установить защиту" dark>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {advantages.map(([t, d], i) => (
            <div key={t} className="group bg-card p-8 transition-colors hover:bg-secondary">
              <div className="flex h-11 w-11 items-center justify-center bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon name={advIcons[i]} size={22} />
              </div>
              <h3 className="mt-5 font-display text-xl font-600">{t}</h3>
              <p className="mt-2 text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* SPECS */}
      <Section num="03" label="Характеристики" title="Технические характеристики и материалы">
        <div className="overflow-hidden border border-border">
          {specs.map(([k, v], i) => (
            <div key={k} className={`grid grid-cols-1 gap-1 px-6 py-5 md:grid-cols-[260px_1fr] ${i % 2 ? 'bg-card' : 'bg-secondary/40'}`}>
              <span className="font-display font-600 uppercase tracking-wide text-primary">{k}</span>
              <span className="text-foreground">{v}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* PRICING */}
      <Section num="04" label="Цены" title="Варианты защит с ценами" dark>
        <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
          {/* individual list */}
          <div className="flex flex-col divide-y divide-border border border-border bg-card">
            {products.map((p) => (
              <div key={p.name} className="flex items-center justify-between gap-4 p-6 transition-colors hover:bg-secondary/50">
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                    <Icon name={p.icon} size={20} />
                  </div>
                  <span className="font-display text-lg font-600">{p.name}</span>
                </div>
                <span className="font-display text-xl font-700 text-primary">{p.price}</span>
              </div>
            ))}
          </div>
          {/* full set */}
          <div className="relative flex flex-col justify-center border border-primary bg-secondary p-8 amber-glow">
            <span className="self-start bg-primary px-3 py-1 font-display text-xs font-600 uppercase tracking-[0.2em] text-primary-foreground">
              Полный комплект
            </span>
            <p className="mt-6 font-display text-5xl font-700 text-primary">{fullSet.price}</p>
            <p className="mt-2 font-display text-sm font-600 uppercase tracking-wide text-primary/80">{fullSet.save}</p>
            <ul className="mt-6 space-y-3">
              {fullSet.items.map((it) => (
                <li key={it} className="flex items-start gap-3 text-muted-foreground">
                  <Icon name="Check" size={18} className="mt-0.5 shrink-0 text-primary" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
            <Button className="mt-8 w-full font-500">Заказать комплект</Button>
          </div>
        </div>
        <div className="mt-6 flex items-start gap-4 border border-border bg-card p-6">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary/10 text-primary">
            <Icon name="ScanLine" size={22} />
          </div>
          <div>
            <h3 className="font-display text-lg font-600">Нет вашей модели?</h3>
            <p className="mt-1 text-muted-foreground">Сделаем 3D-сканирование техники и спроектируем защиту индивидуально под вас.</p>
          </div>
        </div>
      </Section>

      {/* EXAMPLES */}
      <Section num="05" label="Портфолио" title="Примеры установленных защит">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <div key={p.name} className="group overflow-hidden border border-border bg-card">
              <div className="relative h-56 overflow-hidden">
                <img src={p.example} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
              <p className="p-5 font-display text-base font-600">{p.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACTS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-24">
          <p className="font-display text-sm font-600 uppercase tracking-[0.35em] opacity-70">Контакты · ИТЦ Сибирь</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-700 leading-tight md:text-6xl">
            Готовы защитить вашу технику
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ['Phone', 'Телефон', contacts.phone],
              ['Mail', 'Email', contacts.email1],
              ['Mail', 'Email', contacts.email2],
              ['Globe', 'Сайт', contacts.site],
            ].map(([ic, l, v], i) => (
              <div key={i}>
                <Icon name={ic} size={24} className="opacity-80" />
                <p className="mt-3 font-display text-sm font-600 uppercase tracking-wide opacity-70">{l}</p>
                <p className="mt-1 text-lg font-500 break-all">{v}</p>
              </div>
            ))}
          </div>
          <Button onClick={exportKpToPptx} size="lg" variant="secondary" className="mt-12 gap-2 font-500">
            <Icon name="Download" size={18} />
            Скачать КП в PowerPoint
          </Button>
        </div>
      </section>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground">
        © 2026 ИТЦ Сибирь · Защита для грузовой техники
      </footer>
    </div>
  );
};

const Section = ({ num, label, title, children, dark }: { num: string; label: string; title: string; children: React.ReactNode; dark?: boolean }) => (
  <section className={dark ? 'bg-secondary/20' : 'bg-background'}>
    <div className="container py-20 md:py-28">
      <div className="mb-12 flex items-end gap-6">
        <span className="font-display text-6xl font-700 leading-none text-border">{num}</span>
        <div>
          <p className="font-display text-sm font-600 uppercase tracking-[0.3em] text-primary">{label}</p>
          <h2 className="mt-1 font-display text-3xl font-700 md:text-4xl">{title}</h2>
        </div>
      </div>
      {children}
    </div>
  </section>
);

export default Index;
