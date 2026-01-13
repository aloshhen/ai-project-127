import { motion } from 'framer-motion'

function About() {
  return (
    <section id="about" className="section bg-coffee-100">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto flex items-center space-x-12"
      >
        <div className="w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&q=80" 
            alt="Coffee Technology" 
            className="rounded-xl shadow-lg"
          />
        </div>
        <div className="w-1/2">
          <h2 className="text-4xl font-bold mb-6 text-coffee-900">
            О <span className="text-coffee-500">Нашей Экосистеме</span>
          </h2>
          <p className="text-lg text-coffee-900/80 mb-4">
            Мы создали уникальную платформу, которая трансформирует традиционное потребление кофе.
          </p>
          <ul className="space-y-3 text-coffee-900/70">
            <li>✓ Инновационные технологии</li>
            <li>✓ Персонализированный опыт</li>
            <li>✓ Высокое качество продукта</li>
          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default About