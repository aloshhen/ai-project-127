import { motion } from 'framer-motion'
import { Coffee, ArrowRight } from 'lucide-react'

function Hero() {
  return (
    <section id="hero" className="section bg-coffee-gradient text-white">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-5xl font-bold mb-6">
          Революция <span className="text-amber-300">Кофейной</span> Экосистемы
        </h1>
        <p className="text-xl mb-8 text-white/80">
          Инновационная платформа, которая объединяет технологии, качество и удовольствие
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-white text-coffee-900 px-6 py-3 rounded-full flex items-center hover:bg-amber-50 transition">
            Начать <ArrowRight className="ml-2" />
          </button>
          <button className="border border-white/50 text-white px-6 py-3 rounded-full hover:bg-white/10 transition">
            Узнать больше
          </button>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero