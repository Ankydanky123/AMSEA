import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Info_one from './Components/Info_one';
import About from './Components/About';
import Instructors from './Components/Instructors';
import Footer from './Components/Footer';
import Courses from './Components/Courses';
import Contact from './Components/Contact';
import Achievement from './Components/Achivement'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <BrowserRouter>
      <Navbar />
        <Routes>
       
          <Route path='/' element={
           <>
            <Carousel />
          <Info_one />
          <About />
          <Instructors />
          <Courses />
          <Contact />
           </>
          } />
          
         <Route path='/achievements' element={
          <Achievement />
         } />
          
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>


  );
}

export default App;
