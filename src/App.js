import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Header from "./Components/header/Header";
import About from "./Components/about/About";
import Experience from "./Components/experience/Experience";
import Services from "./Components/services/Services";
import Portfolio from "./Components/portfolio/Portfolio";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import TopNavbar from "./Components/topnavbar/TopNavbar";

function App() {
  return (
    <div className="App">
      {/* <TopNavbar/> */}
      <Header />
      <Navbar />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      <Contact />
      <Footer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>PORTFOLIO INPROGRESS</p>
      </header>
    </div>
  );
}

export default App;
