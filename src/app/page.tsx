import Image from "next/image";

import Hero from "./components/hero";
import Content from "./components/content"
import Feature from "./components/feature"
import Contact from "./components/contact"

export default function Home() {
  return (
    <main>
      <Hero/>
      <Content/>
      <Feature/>
      <Contact/>
    </main>
  );
}
