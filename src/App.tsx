import { Routes, Route, Link } from 'react-router-dom'
import { About } from './pages/Aboutpage';
import { Home } from './pages/Homepage';
import { Blog } from './pages/Blogpage';
import { Notfound } from './pages/Notfoundpage';
import { Layout } from './components/layout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='posts' element={<Blog />} />
          <Route path='*' element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
