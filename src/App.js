
import './App.css';

import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import ArticleListPage from './pages/ArticleListPage'
import ArticlePage from './pages/ArticlePage';
import NotFoundPage from './pages/NotFoundPage'


import NavBar from './NavBar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h1>My Awesome Blog</h1>
      <div id ="page-body">
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/about' element={<AboutPage/>}></Route>
          <Route path='/articles' element={<ArticleListPage/>}></Route>
          
          <Route path='*' element={<NotFoundPage/>}></Route>
          <Route path='/articles/:articleId' element={<ArticlePage/>}></Route>
        </Routes>
      </div>

      <NavBar></NavBar>
    </div>
    </BrowserRouter>
  );
}

export default App;
