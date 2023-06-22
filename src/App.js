
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero';
import Main from './components/Main';




function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<><NavBar /> <Hero/> <Main/> </>} /> 
    </Routes>
    </>
  );

}

export default App;

