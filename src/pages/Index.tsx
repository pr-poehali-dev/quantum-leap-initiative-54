import { FloatingNavbar } from "@/components/FloatingNavbar"
import { ShinyButton } from "@/components/ui/shiny-button"
import { Feature } from "@/components/ui/feature-with-advantages"
import { BentoPricing } from "@/components/ui/bento-pricing"
import { ContactCard } from "@/components/ui/contact-card"
import { AboutQuote } from "@/components/ui/about-quote"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPinIcon, CalendarIcon, UsersIcon } from "lucide-react"
import { cn } from "@/lib/utils"

const HERO_IMAGE = "https://cdn.poehali.dev/projects/443edf92-cfbc-430a-9ebe-103da1b0a2f6/bucket/ee12d7ad-6636-42a2-ae0e-d0c61a6d918d.jpg"

export default function Index() {
  return (
    <main className="relative min-h-screen overflow-y-auto overflow-x-hidden">
      <FloatingNavbar />

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center px-4 py-20"
      >
        <img
          src={HERO_IMAGE}
          alt="IT Квартирник"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-400/40 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-300 backdrop-blur-sm font-open-sans-custom">
            <span>📍</span> Нижний Новгород · Ошарская · 25 апреля, 16:00
          </div>

          <h1 className="mb-8 text-balance text-5xl tracking-tight text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] md:text-6xl lg:text-8xl">
            <span className="font-open-sans-custom not-italic">IT</span>{" "}
            <span className="font-serif italic">Квартирник</span>
          </h1>

          <p className="mb-8 mx-auto max-w-2xl text-pretty leading-relaxed text-gray-300 [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)] font-thin font-open-sans-custom tracking-wide text-xl">
            спикеры, нетворкинг,{" "}
            <span className="font-serif italic">IT-мафия</span>,{" "}
            кофе и пицца — для айтишников и тех, кто только хочет в IT
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8 text-sm text-gray-300 font-open-sans-custom">
            <span className="flex items-center gap-1.5 rounded-full border border-green-400/30 bg-green-500/10 px-3 py-1 text-green-300">🎤 Спикеры</span>
            <span className="flex items-center gap-1.5 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-orange-300">🃏 IT-мафия</span>
            <span className="flex items-center gap-1.5 rounded-full border border-gray-400/30 bg-gray-500/10 px-3 py-1 text-gray-300">🤝 Нетворкинг</span>
            <span className="flex items-center gap-1.5 rounded-full border border-orange-400/30 bg-orange-500/10 px-3 py-1 text-orange-300">🍕 Пицца & кофе</span>
          </div>

          <div className="flex justify-center">
            <ShinyButton
              className="px-8 py-3 text-base"
              onClick={() => {
                const el = document.getElementById("contact")
                if (el) el.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Зарегистрироваться
            </ShinyButton>
          </div>
        </div>

        {/* scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 text-xs font-open-sans-custom animate-bounce">
          <span>↓</span>
          <span>Листай вниз</span>
        </div>
      </section>

      {/* ПРОГРАММА */}
      <section
        id="features"
        className="relative bg-gray-950 px-4 py-24"
      >
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 z-0 size-full pointer-events-none",
            "bg-[radial-gradient(rgba(74,222,128,0.06)_1px,transparent_1px)]",
            "bg-[size:12px_12px]",
          )}
        />
        <div className="relative z-10 mx-auto max-w-7xl w-full">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="inline-block mb-3 rounded-full bg-green-500/15 border border-green-500/30 px-3 py-1 text-xs text-green-400 font-open-sans-custom uppercase tracking-widest">
              Программа
            </div>
          </div>
          <Feature />
        </div>
      </section>

      {/* СПИКЕРЫ */}
      <section
        id="pricing"
        className="relative bg-gray-900 px-4 py-24"
      >
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 z-0 size-full pointer-events-none",
            "bg-[radial-gradient(rgba(251,146,60,0.06)_1px,transparent_1px)]",
            "bg-[size:12px_12px]",
          )}
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="inline-block mb-3 rounded-full bg-orange-500/15 border border-orange-500/30 px-3 py-1 text-xs text-orange-400 font-open-sans-custom uppercase tracking-widest">
              Спикеры
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-white font-open-sans-custom">
              Живые истории
            </h2>
            <p className="text-gray-400 mt-4 text-sm md:text-base font-open-sans-custom">
              Реальный опыт — без корпоративных слайдов и скучных презентаций.
            </p>
          </div>
          <BentoPricing />
        </div>
      </section>

      {/* FAQ */}
      <section
        id="about"
        className="relative bg-gray-950 px-4 py-24"
      >
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 z-0 size-full pointer-events-none",
            "bg-[radial-gradient(rgba(156,163,175,0.06)_1px,transparent_1px)]",
            "bg-[size:12px_12px]",
          )}
        />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="inline-block mb-3 rounded-full bg-gray-500/15 border border-gray-500/30 px-3 py-1 text-xs text-gray-400 font-open-sans-custom uppercase tracking-widest">
              FAQ
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight lg:text-5xl text-white font-open-sans-custom">
              Вопросы и ответы
            </h2>
            <p className="text-gray-400 mt-4 text-sm md:text-base font-open-sans-custom">
              Всё, что хотел спросить, но не решался.
            </p>
          </div>
          <AboutQuote />
        </div>
      </section>

      {/* РЕГИСТРАЦИЯ */}
      <section
        id="contact"
        className="relative bg-gray-900 px-4 py-24"
      >
        <div
          aria-hidden="true"
          className={cn(
            "absolute inset-0 z-0 size-full pointer-events-none",
            "bg-[radial-gradient(rgba(74,222,128,0.07)_1px,transparent_1px)]",
            "bg-[size:12px_12px]",
          )}
        />
        <div className="relative z-10 mx-auto w-full max-w-5xl">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <div className="inline-block mb-3 rounded-full bg-green-500/15 border border-green-500/30 px-3 py-1 text-xs text-green-400 font-open-sans-custom uppercase tracking-widest">
              Регистрация
            </div>
          </div>
          <ContactCard
            title="Записаться на квартирник"
            description="Места ограничены — до 70 человек. Заполни форму и мы пришлём точный адрес и напоминание накануне."
            contactInfo={[
              {
                icon: CalendarIcon,
                label: "Дата и время",
                value: "25 апреля, 16:00",
              },
              {
                icon: MapPinIcon,
                label: "Место",
                value: "Нижний Новгород, Ошарская",
              },
              {
                icon: UsersIcon,
                label: "Формат",
                value: "До 70 человек · Бесплатно",
              },
            ]}
          >
            <form className="w-full space-y-4">
              <div className="flex flex-col gap-2">
                <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                  Имя
                </Label>
                <Input
                  type="text"
                  placeholder="Как тебя зовут?"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                  Контакт (Telegram / телефон)
                </Label>
                <Input
                  type="text"
                  placeholder="@username или +7..."
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label className="text-white [text-shadow:_0_2px_6px_rgb(0_0_0_/_40%)] font-open-sans-custom">
                  IT-опыт
                </Label>
                <Select>
                  <SelectTrigger className="bg-white/10 border-white/20 text-white font-open-sans-custom">
                    <SelectValue placeholder="Выбери свой уровень" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/20 text-white">
                    <SelectItem value="none" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Нет опыта — только интересуюсь</SelectItem>
                    <SelectItem value="student" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Учусь / прохожу курсы</SelectItem>
                    <SelectItem value="junior" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Junior (до 1 года)</SelectItem>
                    <SelectItem value="middle" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Middle (1–4 года)</SelectItem>
                    <SelectItem value="senior" className="text-white hover:bg-white/10 focus:bg-white/10 focus:text-white">Senior / Lead (4+ лет)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button
                className="w-full bg-green-500 text-white hover:bg-green-400 font-open-sans-custom font-semibold border-0"
                type="button"
              >
                Зарегистрироваться 🚀
              </Button>
            </form>
          </ContactCard>
        </div>
      </section>
    </main>
  )
}