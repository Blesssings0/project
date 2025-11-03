import { ArrowRight, BookOpen, Brain, Layers, Palette } from 'lucide-react';
import { topics } from '../data/content';

interface HomeProps {
  onNavigate: (view: 'topics') => void;
}

const iconMap: Record<string, React.ElementType> = {
  BookOpen,
  Brain,
  Layers,
  Palette
};

export function Home({ onNavigate }: HomeProps) {
  return (
    <main className="pt-16">
      <section
        className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 py-20"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in"
            >
              Interacción Humano-Computadora
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Explora los fundamentos, principios y mejores prácticas del diseño de interfaces.
              Un recurso educativo completo sobre IHC, UI, UX y accesibilidad web.
            </p>
            <button
              onClick={() => onNavigate('topics')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              aria-label="Explorar todos los temas de IHC"
            >
              Explorar temas
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-white dark:bg-gray-900"
        aria-labelledby="topics-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="topics-heading"
            className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
          >
            Temas principales
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic, index) => {
              const Icon = iconMap[topic.icon];
              return (
                <article
                  key={topic.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 dark:border-gray-700 p-6"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                    <Icon
                      className="w-6 h-6 text-blue-600 dark:text-blue-400"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {topic.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {topic.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-gray-50 dark:bg-gray-800"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              id="about-heading"
              className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center"
            >
              Sobre este blog
            </h2>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 border border-gray-200 dark:border-gray-700">
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Este blog educativo está diseñado para estudiantes y profesionales interesados
                en comprender los principios fundamentales de la Interacción Humano-Computadora.
              </p>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Aquí encontrarás contenido organizado en cuatro temas principales que cubren
                desde los fundamentos históricos hasta las herramientas modernas de diseño de
                interfaces.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                El sitio aplica las mejores prácticas de UI, UX y accesibilidad web, sirviendo
                como ejemplo práctico de los conceptos presentados.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
