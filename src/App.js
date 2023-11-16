import './App.css';
import ArticleListPage from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">

      <h1>My Blog Spot</h1>
      <div id='page__body'>
        <h1>Welcome to my blog!</h1>
        <HomePage />
        <AboutPage />
        <ArticleListPage />
        <ArticlePage />
      </div>
    </div>
  );
}

export default App;
