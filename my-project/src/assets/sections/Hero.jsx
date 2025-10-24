import Button from "../../components/Button";
import { arrowRight } from "../../assets/icons";
import { shoes, statistics } from "../../constants/constants.index.js";
import { bigShoe1 } from "../../assets/images";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-between items-center min-h-screen gap-10 px-10 py-10"
    >
      {/* LEFT SIDE CONTENT */}
      <div className="xl:w-1/2 w-full flex flex-col justify-center items-start pt-20">
        <p className="text-2xl font-montserrat text-coral-red font-bold">
          Our Summer Collections
        </p>

        <h1 className="text-6xl font-palanquin font-bold leading-tight mt-4">
          <span>The New Arrival</span>
          <br />
          <span className="text-[#FF6452]">Nike </span>Shoes
        </h1>

        <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-md">
          Discover stylish Nike arrivals, quality comfort, and innovation
          for your active life.
        </p>

        <div className="mt-6">
          <Button label="Shop now" iconURL={arrowRight} />
        </div>

        {/* STATISTICS */}
        <div className="flex flex-wrap justify-start items-start gap-12 mt-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="text-left">
              <p className="text-4xl font-palanquin font-extrabold text-black">
                {stat.value}
              </p>
              <p className="text-lg font-montserrat text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="xl:w-1/2 w-full flex justify-center items-center">
        <img
          src={bigShoe1}
          alt="Shoe Collection"
          className="w-[550px] h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Hero;
