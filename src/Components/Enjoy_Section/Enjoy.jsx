import A1 from "../../assets/g1.jpg";
import A2 from "../../assets/g2.jpg";
import A3 from "../../assets/g3.jpg";
import A4 from "../../assets/g4.jpg";

export default function Enjoy() {
  return (
    <div className="container my-5">
      <div className="title mb-4">
        <h2 className="text-xl font-bold mb-2 dark:text-white">
          {" "}
          Enjoy your dream vacation{" "}
        </h2>
        <p className="text-gray-500 text-sm dark:text-amber-100">
          Plan and book our perfect trip with expert advice, travel tips,
          destination information and inspiration from us
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
        {/* Cards */}

        <div className="card bg-white rounded-xl p-4 dark:bg-gray-800 hover:-translate-y-1 duration-75 cursor-pointer">
          {/* Image */}
          <img
            src={`${A1}`}
            alt="Australia Image"
            className="mx-auto rounded-xl"
          />

          {/* Content */}
          <div className="content text-start mt-3.5">
            <h4 className="mb-2.5 dark:text-white font-medium">Australia</h4>
            <p className="text-gray-500 text-sm dark:text-amber-100">
              2246 properties
            </p>
          </div>
        </div>

        <div className="card bg-white rounded-xl p-4 dark:bg-gray-800 hover:-translate-y-1 duration-75 cursor-pointer">
          {/* Image */}
          <img
            src={`${A2}`}
            alt="Australia Image"
            className="mx-auto rounded-xl"
          />

          {/* Content */}
          <div className="content text-start mt-3.5">
            <h4 className="mb-2.5 dark:text-white font-medium">Australia</h4>
            <p className="text-gray-500 text-sm dark:text-amber-100">
              2246 properties
            </p>
          </div>
        </div>

        <div className="card bg-white rounded-xl p-4 dark:bg-gray-800 hover:-translate-y-1 duration-75 cursor-pointer">
          {/* Image */}
          <img
            src={`${A3}`}
            alt="Australia Image"
            className="mx-auto rounded-xl"
          />

          {/* Content */}
          <div className="content text-start mt-3.5">
            <h4 className="mb-2.5 dark:text-white font-medium">Australia</h4>
            <p className="text-gray-500 text-sm dark:text-amber-100">
              2246 properties
            </p>
          </div>
        </div>

        <div className="card bg-white rounded-xl p-4 dark:bg-gray-800 hover:-translate-y-1 duration-75 cursor-pointer">
          {/* Image */}
          <img
            src={`${A4}`}
            alt="Australia Image"
            className="mx-auto rounded-xl"
          />

          {/* Content */}
          <div className="content text-start mt-3.5">
            <h4 className="mb-2.5 dark:text-white font-medium">Australia</h4>
            <p className="text-gray-500 text-sm dark:text-amber-100">
              2246 properties
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
