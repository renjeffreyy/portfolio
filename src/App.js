import Hero from "./components/hero.component"
import About from "./components/about.component"
import Contact from "./components/contact.component"
import Experience from "./components/experience.component"
import RightSidebar from "./components/right-sidebar.component"
import LeftSidebar from "./components/left-sidebar.component"
import Footer from "./components/footer.component"
import Projects from "./components/projects.component"

function App() {
  return (
    <div className="App">
      <main className="main-content-container">
        <section className="hero-secion">
          <Hero></Hero>
        </section>
        <section>
          <About></About>
        </section>
        <section>
          <Experience></Experience>
        </section>
        <section>
          <Projects></Projects>
        </section>
        <section id="contact" className="contact-section">
          <Contact></Contact>
        </section>
      </main>
   
      <LeftSidebar></LeftSidebar>
      <RightSidebar></RightSidebar>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default App;
