import React from "react";
import { HashRouter, Route } from "react-router-dom";
import About from "./pages/About";
import Demos from "./pages/Demos";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/About" component={About} />
          <Route path="/Demos" component={Demos} />
        </Wrapper>
        <Footer />
      </div>
    </HashRouter >
  );
}

export default App;
