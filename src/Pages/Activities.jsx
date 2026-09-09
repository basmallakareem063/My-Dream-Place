import cruises from "../assets/p1.png";
import museum from "../assets/p2.png";
import beach from "../assets/p3.png";
import city from "../assets/p4.png";
import food from "../assets/p5.png";
import hiking from "../assets/p6.png";

import Hotels from "../Components/Popular_Hotels/Hotels";

export default function Activities() {
  return (
    <div id="activities">
      <section className="mt-10">
        <div className="container my-5">
          <h2 className="text-xl font-bold mb-3 dark:text-white">
            {" "}
            Popular Things to do
          </h2>

          <div className="grid gap-5 md:grid-cols-2 lg:h-175 lg:grid-cols-4 lg:grid-rows-4">
            {/* Cruises */}
            <div className="group relative overflow-hidden rounded-2xl lg:row-span-2 ">
              <img
                src={cruises}
                alt="Cruises"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

              <h3 className="absolute bottom-6 left-6 text-4xl font-medium text-white">
                Cruises
              </h3>
            </div>

            {/* Museum */}
            <div className="group relative overflow-hidden rounded-2xl lg:row-span-2 lg:col-start-1 lg:row-start-3">
              <img
                src={museum}
                alt="Museum"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

              <h3 className="absolute bottom-6 left-6 text-4xl font-medium text-white">
                Museum Tour
              </h3>
            </div>

            {/* Beach */}
            <div className="group relative overflow-hidden rounded-2xl lg:row-span-4 lg:col-start-2">
              <img
                src={beach}
                alt="Beach"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

              <h3 className="absolute bottom-6 left-6 text-4xl font-medium text-white">
                Beach Tours
              </h3>
            </div>

            {/* City */}
            <div className="group relative overflow-hidden rounded-2xl lg:col-span-2 lg:row-span-2 lg:col-start-3">
              <img
                src={city}
                alt="City"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

              <h3 className="absolute bottom-6 left-6 text-4xl font-medium text-white">
                City Tours
              </h3>
            </div>

            {/* Food */}
            <div className="group relative overflow-hidden rounded-2xl lg:row-span-2 lg:col-start-3 lg:row-start-3">
              <img
                src={food}
                alt="Food"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

              <h3 className="absolute bottom-6 left-6 text-4xl font-medium text-white">
                Food
              </h3>
            </div>

            {/* Hiking */}
            <div className="group relative overflow-hidden rounded-2xl lg:row-span-2 lg:col-start-4 lg:row-start-3">
              <img
                src={hiking}
                alt="Hiking"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

              <h3 className="absolute bottom-6 left-6 text-4xl font-medium text-white">
                Hiking
              </h3>
            </div>
          </div>
        </div>
      </section>

      <Hotels />
    </div>
  );
}
