import Navbar from './component/Navbar/Navbar';
import Herosection from './component/Herosection/Herosection';
import About from './component/about/About';
import Services  from './component/services/Services';
import Skills from './component/skills/Skills';
import Project from './component/project/Project';
import Connect from './component/connectme/Connect';
import Footer from './component/Footer/Footer';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <About/>
      <Services />
      <Skills/>
      <Project/>
      <Connect/>
      <Footer/>
    </div>
  )
}

export default App;
