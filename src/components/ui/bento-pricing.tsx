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
        name="Наталья Гордеева"
        role="Выпускница курса · Смена профессии"
        topic="Легко ли сменить профессию из гуманитария в IT: личный опыт"
        emoji="🎓"
        className="lg:col-span-4"
      />
      <SpeakerCard
        name="Алексей Солодовников"
        role="IT-специалист"
        topic="Как не выгореть айтишнику: практика выживания в индустрии"
        emoji="🔥"
        className="lg:col-span-4"
      />
      <SpeakerCard
        name="Оксана Иванова"
        role="HR-специалист"
        topic="Подвохи на собеседовании и как отвечать на странные вопросы"
        emoji="💼"
        className="lg:col-span-5"
      />
      <SpeakerCard
        name="Василий"
        role="IT-эксперт"
        topic="Как ИИ меняет рынок IT: что происходит прямо сейчас"
        emoji="🤖"
        className="lg:col-span-3"
      />
    </div>
  )
}