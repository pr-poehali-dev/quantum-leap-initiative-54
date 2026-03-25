import { cn } from "@/lib/utils"
import DotPattern from "@/components/ui/dot-pattern"

type SpeakerCardProps = {
  name: string
  role: string
  topic: string
  emoji: string
  photo?: string
  className?: string
  featured?: boolean
}

function SpeakerCard({ name, role, topic, emoji, photo, className, featured }: SpeakerCardProps) {
  return (
    <div
      className={cn(
        "bg-white/5 border-white/10 relative overflow-hidden rounded-md border-2",
        "backdrop-blur-sm",
        className,
      )}
    >
      <DotPattern width={5} height={5} />
      <div className="relative z-10 flex flex-col h-full p-4 gap-3">
        <div className="flex items-center gap-3">
          {photo ? (
            <img src={photo} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-white/20 shrink-0" />
          ) : (
            <div className="w-14 h-14 rounded-full bg-white/10 border-2 border-white/20 flex items-center justify-center text-2xl shrink-0">
              {emoji}
            </div>
          )}
          <div>
            <p className="text-white font-open-sans-custom font-semibold text-base leading-tight">{name}</p>
            <p className="text-gray-400 text-xs font-open-sans-custom mt-0.5">{role}</p>
          </div>
          {featured && (
            <span className="ml-auto text-xs bg-white/10 text-white border border-white/20 rounded-full px-2 py-0.5 font-open-sans-custom shrink-0">
              ⭐ Featured
            </span>
          )}
        </div>
        <div className="rounded-lg bg-white/5 border border-white/10 px-3 py-2">
          <p className="text-xs text-gray-400 font-open-sans-custom mb-1 uppercase tracking-wider">Тема</p>
          <p className="text-white text-sm font-open-sans-custom leading-snug">{topic}</p>
        </div>
      </div>
    </div>
  )
}

export function BentoPricing() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-8">
      <SpeakerCard
        name="Алексей Морозов"
        role="Senior Frontend Developer · Т-Банк"
        topic="Карьера в IT: с нуля до первого оффера за 8 месяцев"
        emoji="👨‍💻"
        featured
        photo="https://cdn.poehali.dev/projects/443edf92-cfbc-430a-9ebe-103da1b0a2f6/files/4e1d9574-8f8e-457a-b1e6-eadc4fb5563c.jpg"
        className="lg:col-span-4"
      />
      <SpeakerCard
        name="Мария Соколова"
        role="Product Manager · Яндекс"
        topic="Как перейти в IT без технического бэкграунда"
        emoji="👩‍💼"
        photo="https://cdn.poehali.dev/projects/443edf92-cfbc-430a-9ebe-103da1b0a2f6/files/3b0470e6-4831-4158-92b6-ac118fc1cf1b.jpg"
        className="lg:col-span-4"
      />
      <SpeakerCard
        name="Дмитрий Кузнецов"
        role="ML Engineer · Сбер"
        topic="AI в продакшене: что реально работает в 2025"
        emoji="🤖"
        photo="https://cdn.poehali.dev/projects/443edf92-cfbc-430a-9ebe-103da1b0a2f6/files/f12fb36c-6664-4364-ae2e-55f69ab0319f.jpg"
        className="lg:col-span-5"
      />
      <SpeakerCard
        name="Анна Волкова"
        role="Tech Lead · EPAM"
        topic="Нетворкинг для айтишников: как находить крутых людей"
        emoji="🌐"
        photo="https://cdn.poehali.dev/projects/443edf92-cfbc-430a-9ebe-103da1b0a2f6/files/49bc12a2-b687-41e9-b090-5ed65a369da4.jpg"
        className="lg:col-span-3"
      />
    </div>
  )
}