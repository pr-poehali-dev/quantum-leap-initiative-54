import DotPattern from "@/components/ui/dot-pattern"
import { useState } from "react"

const faqs = [
  {
    q: "Где проходит квартирник?",
    a: "Нижний Новгород, ул. Ошарская. Точный адрес пришлём после регистрации. 25 апреля, начало в 16:00.",
  },
  {
    q: "Нужен ли опыт в IT?",
    a: "Нет! Квартирник открыт для всех — опытных разработчиков, новичков и тех, кто только думает о входе в IT.",
  },
  {
    q: "Что такое IT-мафия?",
    a: "Классическая игра в мафию, но все роли — айтишные: разработчики, менеджеры, дизайнеры и «баги». Весело и полезно для нетворкинга.",
  },
  {
    q: "Сколько стоит участие?",
    a: "Мероприятие бесплатное. Кофе и пицца за счёт организаторов — просто приходи и общайся.",
  },
  {
    q: "Сколько человек будет?",
    a: "Формат камерный — до 30 человек. Это позволяет пообщаться с каждым, а не просто посмотреть выступления.",
  },
  {
    q: "Можно ли прийти с другом?",
    a: "Конечно! Регистрируйтесь отдельно — каждый заполняет свою форму. Места ограничены.",
  },
]

export function AboutQuote() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="mx-auto mb-10 max-w-7xl px-6 md:mb-20 xl:px-0">
      <div className="relative flex flex-col items-center border-2 border-white/20 rounded-lg backdrop-blur-sm bg-white/5">
        <DotPattern width={5} height={5} />

        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-white/80" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-white/80" />

        <div className="relative z-20 mx-auto w-full max-w-3xl rounded-[40px] py-6 md:p-10 xl:py-12">
          <h2 className="text-2xl md:text-3xl font-open-sans-custom text-white [text-shadow:_0_4px_20px_rgb(0_0_0_/_60%)] mb-6">
            Вопросы и ответы
          </h2>
          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl overflow-hidden bg-white/5 cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center justify-between px-4 py-3 gap-3">
                  <p className="text-white font-open-sans-custom text-sm font-medium">{faq.q}</p>
                  <span className="text-gray-400 text-lg shrink-0">{open === i ? "−" : "+"}</span>
                </div>
                {open === i && (
                  <div className="px-4 pb-4">
                    <p className="text-gray-300 font-open-sans-custom text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
