 import './App.css';
 import About from './Components/About';
 import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
 import Navbar from './Components/Navbar';
 import Projects from './Components/Projects/Projects';
 import Skills from './Components/Skills/Skills';


function App() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
