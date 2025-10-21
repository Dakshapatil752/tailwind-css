import Button from "../../components/Button";
import { arrowRight } from  "../../assets/icons"


const Hero = () => {
    return (
        <section
            id="home"
            className="w-full flex xl:flex-row flex-col 
            justify-center items-center min-h-screen 
            gap-10 max-container border-2 border-red-500 p-2"
        >
        <div className="relative xl:w-2/5 flex flex-col
              justify-center items-start 
              w-full max-xl:padding-x pt-28">
        
        <p> Our Summer Collections </p>
                <h1 className="text-4xl font-palanquin font-bold leading-tight">
                    <span>The New Arrival</span>
                    <br/>
                    <span style={{color: '#FF6452'}}>Nike </span>
                    Shoes
                </h1>
        <p>Discover stylish Nike
           arrivals , quality comfort ,
           and innovation for your 
           active life ..
        </p>
        <Button label ="Shop now" iconURL={arrowRight} />
        </div>
        </section>
    );
}

export default Hero;