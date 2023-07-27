import "./App.css";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Properties from "./components/Properties";
import PropertyDetail from "./components/PropertyDetail";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Home from "./pages/Home";
import AboutUs from "./components/AboutUs";
import Articles from "./components/Articles";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import WorkWithUs from "./components/WorkWithUs";
import PrivacyPolicy from "./components/PrivacyPolicy";
import GeneralTerms from "./components/GeneralTerms";
import WhyUs from "./components/WhyUs";
import Team from "./components/Team"
import Innovation from "./components/Innovation";
import Experience from "./components/Experience";
import Evaluation from "./components/Evaluation";
import ModifyMyProperty from './components/ModifyMyProperty'
import MyProfile from "./components/MyProfile";
import DeleteMyProperty from './components/DeleteMyProperty'
import ErrorPage from "./components/ErrorPage";
import { useSelector } from 'react-redux'
import ProtectedRoutes from "./middleware/ProtectedRoutes" 


function App() {
  const { user } = useSelector((state) => state.auth)
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/services" element={<Services />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/propertyDetail/:id" element={<PropertyDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/workwithus" element={<WorkWithUs />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/generalTerms" element={<GeneralTerms />} />
        <Route path="/whyUs" element={<WhyUs />} />
        <Route path="/team" element={<Team />} />
        <Route path="/innovation" element={<Innovation />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/evaluation" element={<Evaluation />} />
        <Route path="*" element={<ErrorPage />} />

        <Route element={<ProtectedRoutes />}/>
        <Route path="/editproperty/:id" element={user ? <ModifyMyProperty />  : <Navigate to='/' />} />
        <Route path="/my-profile" element={user ? <MyProfile />  : <Navigate to='/' />} />
        <Route path="/deleteproperty/:id" element={user ? <DeleteMyProperty />  : <Navigate to='/' />} />

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;