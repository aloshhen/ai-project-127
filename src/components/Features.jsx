import { BentoGrid, BentoGridItem } from '@/components/aceternity/bento-grid'
import { Coffee, Wallet, Trophy, BarChart3 } from 'lucide-react'

function Features() {
  return (
    <section id="features" className="section bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-coffee-900">
          Наши <span className="text-coffee-500">Преимущества</span>
        </h2>
        <BentoGrid className="max-w-5xl mx-auto">
          <BentoGridItem
            title="Умный Заказ"
            description="Предзаказ кофе с персонализацией"
            icon={<Coffee className="h-8 w-8 text-coffee-500" />}
            className="md:col-span-2"
          />
          <BentoGridItem
            title="Криптооплата"
            description="Оплата через TON и Stars"
            icon={<Wallet className="h-8 w-8 text-coffee-500" />}
            className="md:col-span-1"
          />
          <BentoGridItem
            title="Loyalty Program"
            description="Накопление и использование бонусов"
            icon={<Trophy className="h-8 w-8 text-coffee-500" />}
            className="md:col-span-1"
          />
          <BentoGridItem
            title="Аналитика"
            description="Статистика потребления и рекомендации"
            icon={<BarChart3 className="h-8 w-8 text-coffee-500" />}
            className="md:col-span-2"
          />
        </BentoGrid>
      </div>
    </section>
  )
}

export default Features