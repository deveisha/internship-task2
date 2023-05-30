import './App.css';
import About from './components/About';
import Customer from './components/Customer';
import Footer from './components/Footer';
import Herosec from './components/Herosec';
import Navbar from './components/Navbar';
import Pricing from './components/Pricing';
import Projects from './components/Projects';
import Reviews from './components/Reviews';
import Services from './components/Services';
import Stuffs from './components/Stuffs';

function App() {
  return (
    <div className="App">
   <Navbar/>
   <Customer/>
   <Services/>
   <About/>
   <Pricing/>
   <Projects/>
   <Stuffs/>
   <Reviews/>
   <Herosec/>
   <Footer/>
    </div>
  );
}

export default App;
