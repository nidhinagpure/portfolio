import Navbar from './component/Navbar/Navbar';
import Herosection from './component/Herosection/Herosection';
import About from './component/about/About';
import Services  from './component/services/Services';


const App = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <About/>
      <Services />
    </div>
  )
}

export default App;
