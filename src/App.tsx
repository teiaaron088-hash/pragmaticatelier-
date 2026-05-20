/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navigation from './components/Navigation';
import Hero from './components/Hero';
import FeaturedCollection from './components/FeaturedCollection';
import Bestsellers from './components/Bestsellers';
import BrandStory from './components/BrandStory';
import Lookbook from './components/Lookbook';
import Testimonials from './components/Testimonials';
import WhyUs from './components/WhyUs';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative bg-bone min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedCollection />
      <Bestsellers />
      <BrandStory />
      <WhyUs />
      <Lookbook />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}
