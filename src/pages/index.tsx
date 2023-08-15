import About from "./about";
import Certificates from "./certificates";
import Copyright from "./copyright";
import Education from "./education";
import Experience from "./experience";
import Navbar from "./navbar";
import Projects from "./projects";
import Skills from "./skills";

export default function Home() {
  return (
    <div className="app">
      <Navbar />
      <main className="px-10">
        <About />

        <Experience />

        <Education />

        <Skills />

        <Certificates />

        <Projects />
      </main>
      <Copyright />
    </div>
  );
}
