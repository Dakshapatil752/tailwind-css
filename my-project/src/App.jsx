import {
  CustomerReviews,
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  Subscribe,
  Footer
} from './assets/sections/index.js';
import Nav from './components/Nav.jsx';

const App = () => (
  <main className="relative bg-white text-black">
    {/* Navbar */}
    <Nav />
    
    {/* Hero Section */}
    <section className="w-full py-24 px-10">
      <Hero />
    </section>

    {/* Popular Products */}
    <section className="w-full py-24 px-10">
      <PopularProducts />
    </section>

    {/* Super Quality */}
    <section className="w-full py-24 px-10">
      <SuperQuality />
    </section>

    {/* Services */}
    <section className="w-full py-24 px-10 bg-gray-50">
      <Services />
    </section>

    {/* Special Offer */}
    <section className="w-full py-24 px-10">
      <SpecialOffer />
    </section>

    {/* Customer Reviews */}
    <section className="w-full py-24 px-10 bg-pale-blue">
      <CustomerReviews />
    </section>

    {/* Subscribe */}
    <section className="w-full py-24 px-10 bg-gray-100">
      <Subscribe />
    </section>

    {/* Footer */}
    <section className="w-full py-16 px-10 bg-black text-white">
      <Footer />
    </section>
  </main>
);

export default App;
