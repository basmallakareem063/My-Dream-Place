import h1 from "../../assets/h1.jpg";
import h2 from "../../assets/h2.jpg";
import h3 from "../../assets/h3.jpg";
import h4 from "../../assets/h4.jpg";

export default function Hotels() {
  return (
    <div className="container my-10">
      <h2 className="text-xl font-bold mb-3 dark:text-white">
        {" "}
        Popular Hotels{" "}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
        {/* Cards */}

        <div className="card bg-white rounded-lg p-4 dark:bg-gray-800 hover:-translate-y-1 duration-75 cursor-pointer">
          {/* Image */}
          <img src={`${h1}`} alt="Hotel Image" className="rounded-lg" />

          {/* Content */}
          <div className="content text-start mt-3.5">
            <h4 className="mb-2.5 dark:text-white font-medium">
              Lakeside Motel Waterfront
            </h4>
            <p className="text-gray-500 text-sm dark:text-amber-100">
              2246 properties
            </p>
          </div>
        </div>

        <div className="card bg-white rounded-lg p-4 dark:bg-gray-800 hover:-translate-y-1 duration-75 cursor-pointer">
          {/* Image */}
          <img src={`${h2}`} alt="Hotel Image" className="rounded-lg" />

          {/* Content */}
          <div className="content text-start mt-3.5">
            <h4 className="mb-2.5 dark:text-white font-medium">
              Recce Graham resort
            </h4>
            <p className="text-gray-500 text-sm dark:text-amber-100">
              1278 properties
            </p>
          </div>
        </div>

        <div className="card bg-white rounded-lg p-4 dark:bg-gray-800 hover:-translate-y-1 duration-75 cursor-pointer">
          {/* Image */}
          <img src={`${h3}`} alt="Hotel Image" className="rounded-lg" />

          {/* Content */}
          <div className="content text-start mt-3.5">
            <h4 className="mb-2.5 dark:text-white font-medium">
              Fireside Dinners
            </h4>
            <p className="text-gray-500 text-sm dark:text-amber-100">
              480 properties
            </p>
          </div>
        </div>

        <div className="card bg-white rounded-lg p-4 dark:bg-gray-800 hover:-translate-y-1 duration-75 cursor-pointer">
          {/* Image */}
          <img src={`${h4}`} alt="Hotel Image" className="rounded-lg" />

          {/* Content */}
          <div className="content text-start mt-3.5">
            <h4 className="mb-2.5 dark:text-white font-medium">
              Oculus Inn Stay
            </h4>
            <p className="text-gray-500 text-sm dark:text-amber-100">
              320 properties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
