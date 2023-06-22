
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Hero from './components/Hero';
import Main from './components/Main';
import LatestProperties from './components/LatestProperties';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';





function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<><NavBar /> <Hero/> <Main/> <LatestProperties/> <Newsletter/> <Footer/> </>} /> 
    </Routes>
    </>
  );

}

export default App;

