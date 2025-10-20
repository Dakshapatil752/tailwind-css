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


const App = ( ) => (
  <main className="relative bg-white text-black">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-1">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section> 
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
    
  </main>
);

export default App;