import { Coffee } from 'lucide-react'

function Footer() {
  return (
    <footer className="bg-coffee-900 text-white py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Coffee className="w-8 h-8 text-coffee-500" />
            <span className="font-bold text-xl">Coffee Ecosystem</span>
          </div>
          <p className="text-white/70">
            Инновационная платформа для любителей кофе
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-4">Навигация</h4>
          <ul className="space-y-2">
            {['Главная', 'Функции', 'О нас', 'Контакт'].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-4">Контакты</h4>
          <p>Email: support@coffeeecosystem.com</p>
          <p>Telegram: @CoffeeEcosystem</p>
        </div>
      </div>
      <div className="text-center mt-8 text-white/50">
        © 2024 Coffee Ecosystem. Все права защищены.
      </div>
    </footer>
  )
}

export default Footer