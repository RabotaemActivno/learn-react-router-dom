import { Routes, Route, Link } from 'react-router-dom'
import { About } from './pages/Aboutpage';
import { Home } from './pages/Homepage';
import { Blog } from './pages/Blogpage';
import { Editpost } from './pages/Editpost';
import { Createpost } from './pages/Createpost';
import { Notfound } from './pages/Notfoundpage';
import { Layout } from './components/layout';
import { Singlepage } from './pages/Singlepage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='posts' element={<Blog/>} />
          <Route path='posts/:id' element={<Singlepage/>} />
          <Route path='posts/:id/edit' element={<Editpost/>} />
          <Route path='posts/new' element={<Createpost/>} />
          <Route path='*' element={<Notfound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
