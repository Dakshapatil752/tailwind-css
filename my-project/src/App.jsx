import {
    CustomerReviews,Hero,PopularProducts,SuperQuality,Services,
    SpecialOffer, Subscribe,Footer
} from './sections';


const App = ( ) => (
  <main className="relative">
        {/*<Nav/>*/}
      <section
        className="xl:padding-1 wide:padding-r padding-1">
          <Hero/>
        </section>
        <section className ="padding mb-6">
          <PopularProducts/>
        </section>
        <section className ="padding mb-6">
          <SuperQuality/>
        </section>
        <section className ="padding-x py-10 mb-6">
          <Services/>
        </section>
         <section className ="padding mb-6">
          <SpecialOffer/>
        </section>
         <section className ="bg-pale-blue padding mb-6">
          <CustomerReviews/>
        </section>
         <section className ="padding-x sm:py-32 py-16 w-full mb-6">
          <Subscribe/>
        </section>
         <section className ="bg-black padding-x padding-t pb-8 mb-6">
          <Footer/>
        </section>





    
    
    
    
  </main>
);

export default App;