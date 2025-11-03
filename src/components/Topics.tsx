import { BookOpen, Brain, Layers, Palette, ChevronRight } from 'lucide-react';
import { topics, articles } from '../data/content';

interface TopicsProps {
  onSelectArticle: (articleId: number) => void;
}

const iconMap: Record<string, any> = {
  BookOpen,
  Brain,
  Layers,
  Palette
};

export function Topics({ onSelectArticle }: TopicsProps) {
  return (
    <main className="pt-16 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Temas de IHC
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Selecciona un tema para explorar su contenido detallado
          </p>
        </header>

        <div className="space-y-8">
          {topics.map((topic, index) => {
            const Icon = iconMap[topic.icon];
            const topicArticles = articles.filter(a => a.topicId === topic.id);

            return (
              <section
                key={topic.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden"
                aria-labelledby={`topic-${topic.id}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-700 dark:to-gray-800 p-6 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-blue-600 dark:bg-blue-500 rounded-lg flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h2
                        id={`topic-${topic.id}`}
                        className="text-2xl font-bold text-gray-900 dark:text-white mb-2"
                      >
                        Tema {topic.id}: {topic.title}
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300">
                        {topic.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    Artículos disponibles:
                  </h3>
                  <div className="space-y-3">
                    {topicArticles.map(article => (
                      <button
                        key={article.id}
                        onClick={() => onSelectArticle(article.id)}
                        className="w-full text-left group flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-lg transition-all hover:shadow-md border border-transparent hover:border-blue-200 dark:hover:border-blue-800"
                        aria-label={`Leer artículo: ${article.title}`}
                      >
                        <span className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {article.title}
                        </span>
                        <ChevronRight
                          className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                          aria-hidden="true"
                        />
                      </button>
                    ))}
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
