import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <div id='page-body'>
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
