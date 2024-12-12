import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Timeline from "./components/Experience/experience";
import Footer from "./components/Footer/footer.jsx"
import Contact from "./components/ContactMe/contact.jsx";

function App() {
  return (
    <div className="bg-[#171717] ">
      <Navbar />
      <Intro />
      <Timeline/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
