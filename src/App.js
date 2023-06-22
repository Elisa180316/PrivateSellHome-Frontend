
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
import NavBar from './components/NavBar'
import Hero from './components/Hero';
import Main from './components/Main';
import LatestProperties from './components/LatestProperties';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';
import Signup from './components/Signup';
import Signin from './components/Signin';





function App() {
  const { user } = useSelector((state) => state.auth)
  return (
    <>
    <Routes>
      <Route path='/' element={
      <>
      <NavBar />
       <Hero/> 
       <Main/> 
       <LatestProperties/>
        <Newsletter/>
         <Footer/>
          </>
        } /> 
         <Route path='/signup' element={!user ? <Signup /> : <Navigate to='/' />} />
        <Route path='/signin' element={!user ? <Signin /> : <Navigate to='/' />} />
    </Routes>
    </>
  );

}

export default App;

