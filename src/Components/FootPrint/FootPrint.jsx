import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";
import f4 from "../../assets/f4.png";

export default function FootPrint() {
  return (
    <>
      <div className="foot my-15">
        <h2 className="text-xl font-bold mb-8 dark:text-white">
          {" "}
          Our Footprints
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="card text-center">
            <img src={f1} alt="Footprint 1" className="mx-auto" />
            <h3 className="text-lg font-bold dark:text-white mt-2">932M</h3>
            <p className="text-gray-600 dark:text-amber-100">Total Donations</p>
          </div>

          <div className="card text-center">
            <img src={f2} alt="Footprint 1" className="mx-auto" />
            <h3 className="text-lg font-bold dark:text-white mt-2">24M</h3>
            <p className="text-gray-600 dark:text-amber-100">
              {" "}
              Campaigns Closed
            </p>
          </div>

          <div className="card text-center">
            <img src={f3} alt="Footprint 1" className="mx-auto" />
            <h3 className="text-lg font-bold dark:text-white mt-2">10M</h3>
            <p className="text-gray-600 dark:text-amber-100">Happy People </p>
          </div>

          <div className="card text-center">
            <img src={f4} alt="Footprint 1" className="mx-auto" />
            <h3 className="text-lg font-bold dark:text-white mt-2">65M</h3>
            <p className="text-gray-600 dark:text-amber-100">Our Volunteers </p>
          </div>
        </div>
      </div>
      ;
    </>
  );
}
