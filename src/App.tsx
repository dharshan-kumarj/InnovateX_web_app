import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Roadmap from './components/Roadmap';
import ProblemStatements from './components/ProblemStatements';
import Members from './components/Members';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Teams from './components/Teams';

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <div className="cyber-bg">
        <Hero />
        <About />
        <Roadmap />
        <ProblemStatements />
        <Teams />
        <Members />
        <FAQ />
        <Footer />
      </div>
    </div>
  );
}

export default App;