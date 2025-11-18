import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { FeatureGrid } from './components/FeatureGrid';
import { HowItWorks } from './components/HowItWorks';
import { PricingTeaser } from './components/PricingTeaser';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { JoinForm } from './components/JoinForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Partners />
        <FeatureGrid />
        <HowItWorks />
        <PricingTeaser />
        <Testimonials />
        <FAQ />
        <JoinForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;