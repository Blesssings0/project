import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-8 mt-auto"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>Proyecto parcial – Blog sobre IHC</span>
            <span className="hidden sm:inline" aria-hidden="true">•</span>
            <span className="flex items-center gap-1">
              Hecho con
              <Heart
                className="w-4 h-4 text-red-500 inline-block"
                aria-label="amor"
                fill="currentColor"
              />
              para aprender
            </span>
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
            {currentYear} - Diseñado con UI, UX y Accesibilidad en mente
          </p>
        </div>
      </div>
    </footer>
  );
}
