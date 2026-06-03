import { Camera, Eye, Archive, Heart, ShoppingBag, BookOpen, Plus, Minus, Mail } from "lucide-react"
import Icon from "@/components/ui/icon"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Что такое Кульсохран и зачем он нужен?",
      answer:
        "Кульсохран — это проект визуальной документации заброшенных исторических и промышленных объектов. Мы убеждены: даже руины несут в себе живую память. Наша задача — зафиксировать эти места прежде, чем они исчезнут навсегда, и сохранить их истории для будущих поколений.",
    },
    {
      question: "Как вы выбираете объекты для съёмки?",
      answer:
        "Мы исследуем архивы, работаем с местными историками и получаем наводки от сообщества. Приоритет — объекты с богатой историей, которые находятся под угрозой сноса или окончательного разрушения. Каждый объект проходит предварительное изучение: архивные документы, старые карты, свидетельства очевидцев.",
    },
    {
      question: "Можно ли принять участие в экспедиции?",
      answer:
        "Да! Мы периодически набираем участников в наши экспедиции — фотографов, историков, видеографов и просто неравнодушных людей. Следите за анонсами в нашем сообществе или оставьте заявку через форму — мы свяжемся при открытии следующего набора.",
    },
    {
      question: "Как купить мерч и поддержать проект?",
      answer:
        "Весь мерч доступен в разделе «Мерч» на сайте. Каждая покупка напрямую поддерживает новые экспедиции и архивную работу. Мы выпускаем ограниченные тиражи, приуроченные к конкретным объектам — это не просто вещи, а часть истории.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#0B0F12] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Camera" size={20} />
            <span className="font-medium text-balance">Кульсохран</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["О нас", "Наши проекты", "Мерч", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full hover:bg-black/50 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <Button className="bg-white text-black hover:bg-white/90 rounded-full px-6">Поддержать</Button>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium">Визуальная документация исторического наследия</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Они ещё хранят память.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Кульсохран документирует заброшенные заводы, усадьбы и промышленные объекты — прежде чем они исчезнут навсегда. Мы сохраняем не руины, а истории.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8 py-4 text-lg">
              Наши проекты
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-black/40 ring-1 ring-white/20 backdrop-blur border-0 text-white hover:bg-black/50 rounded-full px-8 py-4 text-lg"
            >
              О нас
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-black/40 ring-1 ring-white/20 backdrop-blur rounded-full">
            <Icon name="Heart" size={16} />
            <span className="text-sm font-medium">Память не должна исчезать вместе со стенами</span>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            {/* Документация */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Camera" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Визуальная документация</h3>
              <p className="text-white/80 leading-relaxed">Фото и видеосъёмка объектов в высоком качестве, пока это ещё возможно.</p>
            </div>

            {/* Архив */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Archive" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Исторический архив</h3>
              <p className="text-white/80 leading-relaxed">Работа с архивными документами, картами и свидетельствами очевидцев.</p>
            </div>

            {/* Истории */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="BookOpen" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Живые истории</h3>
              <p className="text-white/80 leading-relaxed">Каждый объект получает свою историю — не сухую справку, а настоящий нарратив.</p>
            </div>

            {/* Сообщество */}
            <div className="rounded-2xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                <Icon name="Heart" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Сообщество</h3>
              <p className="text-white/80 leading-relaxed">Объединяем историков, фотографов и всех, кому не всё равно.</p>
            </div>
          </div>
        </div>
      </section>

      {/* О нас Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">О нас</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Зачем документировать то, что умирает?
              </p>
            </div>

            {/* About Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-12">
              <div className="space-y-6">
                <p className="text-white/90 leading-relaxed text-lg text-pretty">
                  Мы верим: даже разрушение — это часть истории. Облупившаяся краска на стенах старого цеха, ржавые механизмы, которые когда-то кормили целый город, граффити поверх дореволюционной кладки — всё это слои времени, которые нельзя стереть, не потеряв часть себя.
                </p>
                <p className="text-white/90 leading-relaxed text-lg text-pretty">
                  Кульсохран — это не романтизация упадка. Это честный разговор с прошлым через объектив камеры, через архивные документы, через голоса тех, кто помнит эти места живыми. Мы приходим туда, куда другие не заходят, и рассказываем истории, которые иначе замолчали бы навсегда.
                </p>
                <p className="text-white/90 leading-relaxed text-lg text-pretty">
                  Архитектурное наследие не измеряется состоянием фасада. Оно измеряется тем, сколько судеб за ним стоит.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Journey Cards */}
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Исследование</h3>
                  <p className="text-white/80 leading-relaxed text-sm">Изучаем архивы и историю объекта до первого визита.</p>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Экспедиция</h3>
                  <p className="text-white/80 leading-relaxed text-sm">Выезжаем на объект и проводим детальную фотосъёмку.</p>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">История</h3>
                  <p className="text-white/80 leading-relaxed text-sm">Создаём нарратив на основе архивов и свидетельств.</p>
                </div>
                <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Публикация</h3>
                  <p className="text-white/80 leading-relaxed text-sm">Объект становится частью открытого архива Кульсохрана.</p>
                </div>
              </div>
            </div>

            {/* Slogan Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
                <p className="text-white/90 font-medium italic text-lg">"Руины помнят — мы записываем."</p>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
                <p className="text-white/90 font-medium italic text-lg">"Забытое не значит ненужное."</p>
              </div>
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 text-center">
                <p className="text-white/90 font-medium italic text-lg">"Сохрани сейчас — пока не поздно."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Наши проекты Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Наши проекты</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Каждый объект — это не просто адрес на карте. Это история людей, эпохи и времени.
              </p>
            </div>

            {/* Project Card */}
            <div className="rounded-2xl bg-black/30 ring-1 ring-white/15 overflow-hidden mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Project Image Placeholder */}
                <div
                  className="h-80 lg:h-auto bg-cover bg-center relative"
                  style={{
                    backgroundImage: "url(https://images.unsplash.com/photo-1577415124269-fc1140a69e91?w=800&q=80)",
                  }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/60 ring-1 ring-white/20 rounded-full text-sm">
                    Нижний Новгород · 2024
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-10 flex flex-col justify-center space-y-6">
                  <div>
                    <p className="text-white/50 text-sm uppercase tracking-wider mb-2">Промышленный объект</p>
                    <h3 className="text-3xl font-bold mb-4">Завод «Красная Этна»</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed text-pretty">
                    Когда-то здесь гудели станки, и смены сменяли друг друга сутками напролёт. Завод работал с 1897 года — пережил революцию, войну, перестройку. Сегодня его цеха стоят в тишине, но стены ещё хранят запах масла и металла.
                  </p>
                  <p className="text-white/80 leading-relaxed text-pretty">
                    Мы провели три дня внутри, изучили архивные фотографии 1930-х и записали воспоминания бывшего технолога — и сложили из этого историю, которую иначе некому было бы рассказать.
                  </p>
                  <div className="flex gap-4 flex-wrap">
                    <div className="px-3 py-1 bg-white/10 ring-1 ring-white/20 rounded-full text-sm">Фотосерия</div>
                    <div className="px-3 py-1 bg-white/10 ring-1 ring-white/20 rounded-full text-sm">Архивные документы</div>
                    <div className="px-3 py-1 bg-white/10 ring-1 ring-white/20 rounded-full text-sm">Интервью</div>
                  </div>
                  <Button className="bg-white text-black hover:bg-white/90 rounded-full px-8 self-start">
                    Смотреть проект
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/5 ring-1 ring-white/20 border-0 text-white hover:bg-white/10 rounded-full px-12 py-4 text-lg font-semibold"
              >
                Все проекты
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Мерч Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Мерч</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Не просто вещи — артефакты. Каждый предмет связан с конкретным объектом и его историей.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: "Image",
                  title: "Открытки с архивными фото",
                  desc: "Оригинальные снимки объектов, напечатанные на крафт-бумаге с кратким историческим текстом на обороте.",
                },
                {
                  icon: "ShoppingBag",
                  title: "Шопперы с контурами зданий",
                  desc: "Минималистичные контурные иллюстрации заброшенных объектов — стильно, узнаваемо, со смыслом.",
                },
                {
                  icon: "BookOpen",
                  title: "Фотокнига",
                  desc: "Лимитированный альбом с материалами экспедиций: фото, архивные документы и тексты на 120 страницах.",
                },
                {
                  icon: "Printer",
                  title: "Принты для интерьера",
                  desc: "Крупноформатные фотографии объектов в авторской обработке — для тех, кто хочет вешать на стену историю.",
                },
                {
                  icon: "Shirt",
                  title: "Мерч с типографикой",
                  desc: "Футболки и худи с цитатами и координатами реальных объектов. Тихий манифест тех, кто помнит.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/30 ring-1 ring-white/20 mb-6">
                    <Icon name={item.icon} fallback="ShoppingBag" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">{item.desc}</p>
                </div>
              ))}
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 flex flex-col items-center justify-center text-center">
                <Icon name="ShoppingBag" size={32} className="mb-4 text-white/40" />
                <h3 className="text-xl font-semibold mb-3">Магазин скоро</h3>
                <p className="text-white/60 leading-relaxed text-sm">Подпишитесь на рассылку, чтобы узнать первыми о старте.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Title and Description */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что важно знать о Кульсохране: от нашей миссии до участия в экспедициях.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Свяжитесь с нами</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Написать нам</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Сообщение
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-gray-800 focus:border-transparent resize-none"
                      placeholder="Хочу участвовать в экспедиции / сотрудничество / вопрос об объекте..."
                    />
                  </div>
                  <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg py-3 font-normal text-base">
                    Отправить
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-8">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Хотите присоединиться к экспедиции, предложить объект для документации или обсудить сотрудничество? Напишите нам — отвечаем в течение суток.
                  </p>
                </div>

                {/* Info Cards */}
                <div className="space-y-4">
                  <div className="rounded-2xl bg-white/95 text-black p-6 shadow-2xl">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                        <Icon name="Mail" size={18} />
                      </div>
                      <div>
                        <h4 className="font-semibold">Команда Кульсохрана</h4>
                        <p className="text-gray-500 text-sm">Документация и экспедиции</p>
                      </div>
                    </div>
                    <Button className="w-full bg-black text-white hover:bg-gray-800 rounded-lg gap-2">
                      <Mail className="w-4 h-4" />
                      Написать письмо
                    </Button>
                  </div>

                  <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 space-y-2">
                    <p className="text-white/60 text-sm">Следите за нами</p>
                    <p className="text-white font-medium">Telegram · VK · Instagram</p>
                    <p className="text-white/60 text-sm">Новые объекты, анонсы экспедиций, архивные находки</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Camera" size={24} />
                  <span className="text-xl font-semibold">Кульсохран</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty">
                  Проект визуальной документации заброшенных исторических и промышленных объектов. Сохраняем истории прежде, чем они исчезнут навсегда.
                </p>
              </div>

              {/* Projects Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">ПРОЕКТЫ</h3>
                <ul className="space-y-3">
                  {["Все объекты", "Промышленные", "Исторические", "Архив"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О НАС</h3>
                <ul className="space-y-3">
                  {["Наша миссия", "Команда", "Мерч", "Участие"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">КОНТАКТЫ</h3>
                <ul className="space-y-3">
                  {["Написать нам", "Telegram", "VK", "Сотрудничество"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-2">Новые объекты и анонсы экспедиций</h3>
                <p className="text-white/60 text-sm mb-4">Подпишитесь — рассказываем только самое важное.</p>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Введите ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-white text-black hover:bg-white/90 rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Кульсохран — Память не должна исчезать вместе со стенами</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index
