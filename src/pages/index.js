import * as React from "react";
import "../style/global.scss";
import { Contact, Hero, Features, Footer, More } from "../components";

const IndexPage = () => {
  return (
    <main>
      <Hero />
      <Features />
      <More />
      <Contact />
      <Footer />
    </main>
  );
};

export default IndexPage;
