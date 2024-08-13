import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreateBlog from './pages/CreateBlog';
import BlogPage from './pages/BlogPage';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/createblog' element={<CreateBlog />} />
        <Route path='/blog/:id' element={<BlogPage />} />

      </Routes>
    </div>
  );
}

export default App;
