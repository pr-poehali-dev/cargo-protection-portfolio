import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { exportKpToPptx, tiers, advantages, specs } from '@/lib/exportPptx';

const HERO = 'https://cdn.poehali.dev/projects/7d6ba88e-8b0d-489a-9d53-8ca97efd3b5f/files/3111c981-b441-4eb0-b659-923906d767c7.jpg';

const advIcons = ['ShieldCheck', 'PiggyBank', 'Layers', 'Crosshair', 'Droplets', 'Timer'];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Sticky bar */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center bg-primary text-primary-foreground">
              <Icon name="Truck" size={20} />
            </div>
            <span className="font-display text-lg font-600 tracking-wide">ПОРТ ВОСТОК</span>
          </div>
          <Button onClick={exportKpToPptx} className="gap-2 font-500">
            <Icon name="Download" size={16} />
            Скачать в PowerPoint
          </Button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden diagonal-clip">
        <img src={HERO} alt="Shacman X3000" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="steel-grid absolute inset-0 opacity-40" />
        <div className="container relative py-28 md:py-40">
          <p className="animate-fade-up font-display text-sm font-600 uppercase tracking-[0.35em] text-primary">
            Коммерческое предложение
          </p>
          <h1 className="animate-fade-up mt-6 font-display text-5xl font-700 leading-[0.95] md:text-8xl" style={{ animationDelay: '0.1s' }}>
            ЗАЩИТА ДЛЯ<br />ГРУЗОВОЙ ТЕХНИКИ
          </h1>
          <p className="animate-fade-up mt-8 max-w-xl text-lg text-muted-foreground" style={{ animationDelay: '0.2s' }}>
            Броня для двигателя, радиатора, картера и КПП грузовиков Shacman X3000 и спецтехники. Сохраните узлы от ударов и дорогого ремонта.
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

      {/* SERVICE */}
      <Section num="01" label="Услуга" title="Установка защиты двигателя и узлов">
        <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
          Устанавливаем защиту двигателя, радиатора, картера и КПП на грузовики и спецтехнику. Собственный сервисный центр <span className="text-foreground">1500 м²</span>, более <span className="text-foreground">80 000</span> единиц запчастей в наличии. Работаем с Shacman, FAW, Shaanxi, Howo, Sitrak. Возможен выезд.
        </p>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[['Cog', 'Двигатель'], ['Fan', 'Радиатор'], ['Shield', 'Картер'], ['Settings2', 'КПП']].map(([ic, t]) => (
            <div key={t} className="group border border-border bg-card p-6 transition-colors hover:border-primary">
              <Icon name={ic} size={28} className="text-primary" />
              <p className="mt-4 font-display text-xl font-600">{t}</p>
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
            <div key={k} className={`grid grid-cols-1 gap-1 px-6 py-5 md:grid-cols-[240px_1fr] ${i % 2 ? 'bg-card' : 'bg-secondary/40'}`}>
              <span className="font-display font-600 uppercase tracking-wide text-primary">{k}</span>
              <span className="text-foreground">{v}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* TIERS */}
      <Section num="04" label="Тарифы" title="Варианты защиты с ценами" dark>
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => {
            const featured = i === 1;
            return (
              <div key={t.name} className={`relative flex flex-col border p-8 ${featured ? 'border-primary bg-secondary amber-glow' : 'border-border bg-card'}`}>
                <span className={`self-start px-3 py-1 font-display text-xs font-600 uppercase tracking-[0.2em] ${featured ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
                  {t.level}
                </span>
                <h3 className="mt-6 font-display text-3xl font-700">{t.name}</h3>
                <p className="mt-2 font-display text-4xl font-700 text-primary">{t.price}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {t.items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-muted-foreground">
                      <Icon name="Check" size={18} className="mt-0.5 shrink-0 text-primary" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-8 w-full font-500" variant={featured ? 'default' : 'outline'}>
                  Выбрать
                </Button>
              </div>
            );
          })}
        </div>
      </Section>

      {/* EXAMPLES */}
      <Section num="05" label="Портфолио" title="Примеры установленной защиты">
        <div className="grid gap-6 md:grid-cols-3">
          {['Shacman X3000 · картер', 'Howo · двигатель + КПП', 'Sitrak · полный комплект'].map((t) => (
            <div key={t} className="group overflow-hidden border border-border bg-card">
              <div className="relative h-56 overflow-hidden">
                <img src={HERO} alt={t} className="h-full w-full object-cover grayscale transition duration-500 group-hover:grayscale-0 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
              <p className="p-5 font-display text-lg font-600">{t}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACTS */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-24">
          <p className="font-display text-sm font-600 uppercase tracking-[0.35em] opacity-70">Контакты</p>
          <h2 className="mt-4 max-w-2xl font-display text-4xl font-700 leading-tight md:text-6xl">
            Готовы защитить вашу технику
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[['Phone', 'Телефон', '+7 (800) 000-00-00'], ['Mail', 'Email', 'info@port-vostok.ru'], ['Globe', 'Сайт', 'port-vostok.ru'], ['MapPin', 'Адрес', 'г. Красноярск']].map(([ic, l, v]) => (
              <div key={l}>
                <Icon name={ic} size={24} className="opacity-80" />
                <p className="mt-3 font-display text-sm font-600 uppercase tracking-wide opacity-70">{l}</p>
                <p className="mt-1 text-lg font-500">{v}</p>
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
        © 2026 Порт Восток · Защита для грузовой техники Shacman
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
