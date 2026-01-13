import { ArrowRight } from 'lucide-react'

function CTA() {
  return (
    <section id="cta" className="section bg-coffee-gradient text-white">
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          Присоединяйтесь к <span className="text-amber-300">Революции</span>
        </h2>
        <p className="text-xl mb-8 text-white/80">
          Станьте частью инновационной кофейной экосистемы прямо сейчас
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-coffee-900 px-8 py-4 rounded-full flex items-center hover:bg-amber-50 transition">
            Начать Сейчас <ArrowRight className="ml-2" />
          </button>
          <button className="border border-white/50 text-white px-8 py-4 rounded-full hover:bg-white/10 transition">
            Демо-версия
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA