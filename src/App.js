import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import Social from "./components/Social";

function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
       <Social/>
      <About/>
      <Portfolio/>
      <Contact/>
    </div>
    
  );
}

export default App;
