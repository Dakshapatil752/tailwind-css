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


const App = ( ) => (
  <main className="relative bg-white text-black">
      <section className="xl:padding-1 wide:padding-r padding-1">
        <h2 classname="text=-3xl font-semibold mb-6">Hero</h2>
          <Hero/>
        </section>
        <section className ="padding mb-6 md:px-16 py-10">
        <h2 classname="text=-3xl font-semibold mb-6">popularProducts</h2>
          <PopularProducts/>
        </section> 
        <section className ="padding mb-6 md:px-16 py-10">
        <h2 classname="text=-3xl font-semibold mb-6">SuperQuality</h2>
          <SuperQuality/>
        </section>
        <section className ="padding-x py-10 mb-6 md:px-16 ">
        <h2 classname="text=-3xl font-semibold mb-6">Services</h2>
          <Services/>
        </section>
         <section className ="padding mb-6 md:px-16 py-10">
        <h2 classname="text=-3xl font-semibold mb-6">SpecialOffer</h2>
          <SpecialOffer/>
        </section>
         <section className ="bg-pale-blue padding mb-6 md:px-16 py-10">
        <h2 classname="text=-3xl font-semibold mb-6">CustomerReviews</h2>
          <CustomerReviews/>
        </section>
         <section className ="padding-x sm:py-32 w-full mb-6 md:px-16 py-10">
        <h2 classname="text=-3xl font-semibold mb-6">Subscribe</h2>
          <Subscribe/>
        </section>
         <section className ="bg-black padding-x padding-t pb-8 mb-6 md:px-16 py-10">
          <h2 classname="text=-3xl font-semibold mb-6">Footer</h2>
          <Footer/>
        </section>
    
  </main>
);

export default App;