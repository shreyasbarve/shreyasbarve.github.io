// core
import Head from "next/head";

// components
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
    <div className="app flex flex-col">
      <Head>
        <title>Shreyas Barve</title>
      </Head>
      <Navbar />
      <main className="px-10 max-w-6xl self-center">
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
