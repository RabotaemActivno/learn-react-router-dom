import { Routes, Route, Navigate } from 'react-router-dom'
import { About } from './pages/Aboutpage';
import { Home } from './pages/Homepage';
import { Blog } from './pages/Blogpage';
import { Editpost } from './pages/Editpost';
import { Createpost } from './pages/Createpost';
import { Notfound } from './pages/Notfoundpage';
import { Layout } from './components/layout';
import { Singlepage } from './pages/Singlepage';
import { LoginPage } from './pages/Loginpage';

import { RequireAuth } from './hoc/RequireAuth'
import { AuthProvider } from './hoc/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='posts' element={<Blog />} />
            <Route path='posts/:id' element={<Singlepage />} />
            <Route path='posts/:id/edit' element={<Editpost />} />
            <Route path='posts/new' element={
              <RequireAuth>
                <Createpost />
              </RequireAuth>
            } />
            <Route path='login' element={<LoginPage/>}/>
            <Route path='*' element={<Notfound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
