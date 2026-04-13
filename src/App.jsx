import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <div className=" bg-cover bg-center text-white"
    style={{
  backgroundImage: "url('https://i.pinimg.com/736x/e0/36/c4/e036c46adfc4fa2da4f6001a237d1a28.jpg')"
}}
    >

        <Navbar />
        <Hero />
        <div className="max-w-5xl mx-auto">
        <About />
        <Skills />
        <Projects />
        <Experience/>
        <Contact />
        <Footer />

      </div>
    </div>
  );
}

export default App;