import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './components/Home';
import { Topics } from './components/Topics';
import { Article } from './components/Article';

type View = 'home' | 'topics' | 'article';

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);

  const handleNavigate = (view: View) => {
    setCurrentView(view);
    if (view !== 'article') {
      setSelectedArticleId(null);
    }
  };

  const handleSelectArticle = (articleId: number) => {
    setSelectedArticleId(articleId);
    setCurrentView('article');
  };

  const handleBackToTopics = () => {
    setCurrentView('topics');
    setSelectedArticleId(null);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentView={currentView} onNavigate={handleNavigate} />

      {currentView === 'home' && <Home onNavigate={handleNavigate} />}

      {currentView === 'topics' && (
        <Topics onSelectArticle={handleSelectArticle} />
      )}

      {currentView === 'article' && selectedArticleId && (
        <Article articleId={selectedArticleId} onBack={handleBackToTopics} />
      )}

      <Footer />
    </div>
  );
}

export default App;
