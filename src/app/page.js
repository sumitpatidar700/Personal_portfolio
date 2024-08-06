import Image from "next/image";
import Header from './components/header'
import Front from "./components/front";
import About from "./components/Aboutme";
import Skills from "./components/projects";
import Achievments from "./components/Achievments";
import Contact from "./components/contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-start 2xl:px-60 xl:px-40 lg:px-20 sm:px-4 ">
        <Front />
        <Achievments />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
