import './App.css';
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import About from './pages/About';
function App() {
  return (
    
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='about' element={<About/>}/>
      </Route>
    </Routes>
  );
}

export default App;
