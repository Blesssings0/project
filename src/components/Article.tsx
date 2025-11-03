import { ArrowLeft, ArrowUp, ChevronDown, ChevronUp } from 'lucide-react';
import { articles, topics } from '../data/content';
import { useState, useEffect } from 'react';

interface ArticleProps {
  articleId: number;
  onBack: () => void;
}

export function Article({ articleId, onBack }: ArticleProps) {
  const article = articles.find(a => a.id === articleId);
  const topic = article ? topics.find(t => t.id === article.topicId) : null;
  const [expandedSections, setExpandedSections] = useState<Set<number>>(new Set());
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [articleId]);

  if (!article || !topic) {
    return (
      <main className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">
            Artículo no encontrado
          </p>
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            Volver a temas
          </button>
        </div>
      </main>
    );
  }

  const toggleSection = (index: number) => {
    setExpandedSections(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav aria-label="Breadcrumb" className="mb-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
            aria-label="Volver a la lista de temas"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" />
            <span>Volver a temas</span>
          </button>
        </nav>

        <header className="mb-8">
          <div className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-full mb-4">
            Tema {topic.id}: {topic.title}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {article.title}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
            {article.content}
          </p>
        </header>

        {article.subsections && article.subsections.length > 0 && (
          <section className="space-y-4" aria-label="Subsecciones del artículo">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Contenido detallado
            </h2>
            {article.subsections.map((subsection, index) => {
              const isExpanded = expandedSections.has(index);
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
                >
                  <button
                    onClick={() => toggleSection(index)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                    aria-expanded={isExpanded}
                    aria-controls={`subsection-${index}`}
                  >
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white pr-4">
                      {subsection.title}
                    </h3>
                    {isExpanded ? (
                      <ChevronUp
                        className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0"
                        aria-hidden="true"
                      />
                    ) : (
                      <ChevronDown
                        className="w-5 h-5 text-gray-500 dark:text-gray-400 flex-shrink-0"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                  {isExpanded && (
                    <div
                      id={`subsection-${index}`}
                      className="px-6 pb-6 border-t border-gray-200 dark:border-gray-700 pt-4 animate-fade-in"
                    >
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {subsection.content}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </section>
        )}

        <nav className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
            aria-label="Volver a la lista de temas"
          >
            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
            Explorar más temas
          </button>
        </nav>
      </article>

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 z-40"
          aria-label="Volver al inicio del artículo"
        >
          <ArrowUp className="w-6 h-6" aria-hidden="true" />
        </button>
      )}
    </main>
  );
}
