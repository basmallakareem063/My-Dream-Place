import t1 from "../../assets/t1.jpg";
import t2 from "../../assets/t2.jpg";
import t3 from "../../assets/t3.jpg";

export default function NextTrip() {
  return (
    <div className="container my-5">
      <h2 className="text-xl font-bold mb-3 dark:text-white">
        {" "}
        Get inspiration for your next trip
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 ">
        {/* Cards */}

        <div className="relative rounded-lg overflow-hidden cursor-pointer hover:-translate-y-1 transition duration-300">
          <img src={t3} alt="Sydney" className="w-full h-83.75 object-cover" />

          {/* Content */}
          <div className="absolute bottom-8 left-5 right-5 text-start text-white">
            <h4 className="mb-2 font-semibold text-lg">
              Sydney's 10 most fashionable 5 star hotels
            </h4>

            <p className="text-sm text-gray-300 leading-6">
              Browse the fastest growing tourism sector in the heart of
              Australia tourism capital ....
            </p>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden cursor-pointer hover:-translate-y-1 transition duration-300">
          <img src={t2} alt="Hotels" className="w-full h-83.75 object-cover" />

          {/* Content */}
          <div className="absolute bottom-8 left-5 right-5 text-start text-white">
            <h4 className="mb-2 font-semibold text-lg">
              Enjoy your vacation in best hotels of United Kingdom
            </h4>

            <p className="text-sm text-gray-300 leading-6">
              Top sites where you do not have to worry about being a vegan. Our
              tourist guide is here...
            </p>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden cursor-pointer hover:-translate-y-1 transition duration-300">
          <img
            src={t1}
            alt="Destination"
            className="w-full h-83.75 object-cover"
          />

          {/* Content */}
          <div className="absolute bottom-8 left-5 right-5 text-start text-white">
            <h4 className="mb-2 font-semibold text-lg">
              World’s top destinations during and post covid timeline{" "}
            </h4>

            <p className="text-sm text-gray-300 leading-6">
              Pandemic is still intact and will be here for a longer time.
              Here’s where your next destination...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
