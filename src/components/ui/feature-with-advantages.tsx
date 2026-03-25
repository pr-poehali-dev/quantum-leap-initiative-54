import { Badge } from "@/components/ui/badge"

const schedule = [
  { time: "16:00", emoji: "🚪", title: "Сбор гостей", desc: "Знакомимся, берём кофе, заходим" },
  { time: "16:30", emoji: "🎤", title: "Спикер #1", desc: "Карьера в IT: с нуля до первого оффера" },
  { time: "17:10", emoji: "🎤", title: "Спикер #2", desc: "Как AI меняет рынок разработки" },
  { time: "17:50", emoji: "🍕", title: "Пицца & нетворкинг", desc: "Неформальные разговоры, новые знакомства" },
  { time: "18:30", emoji: "🃏", title: "IT-мафия", desc: "Весёлая игра — айтишники против новичков" },
  { time: "19:30", emoji: "🌙", title: "Свободное общение", desc: "Продолжаем говорить, пить кофе и дружить" },
]

function Feature() {
  return (
    <div className="w-full py-20 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 py-20 flex-col items-start lg:py-0">
          <div>
            <Badge className="bg-white/10 text-white border-white/20 backdrop-blur-sm">25 апреля · Нижний Новгород</Badge>
          </div>
          <div className="flex gap-2 flex-col">
            <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)]">
              Программа вечера
            </h2>
            <p className="text-lg max-w-xl leading-relaxed tracking-tight text-gray-300 font-open-sans-custom [text-shadow:_0_2px_10px_rgb(0_0_0_/_50%)]">
              Неформально, по-живому, без корпоративщины — просто айтишники и те, кто хочет ими стать.
            </p>
          </div>
          <div className="flex flex-col gap-3 pt-6 w-full max-w-xl">
            {schedule.map((item, i) => (
              <div key={i} className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 py-3">
                <span className="text-gray-400 font-mono text-sm mt-0.5 w-12 shrink-0">{item.time}</span>
                <span className="text-xl shrink-0">{item.emoji}</span>
                <div>
                  <p className="text-white font-open-sans-custom font-medium text-sm">{item.title}</p>
                  <p className="text-gray-400 text-xs font-open-sans-custom mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Feature }
