import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArticleListPage from './pages/ArticleList';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>My Blog Spot</h1>
        <div id='page__body'>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/articles' element={<ArticleListPage />} />
            <Route path='/articles/:articlesId' element={<ArticlePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
