import { GoAlert } from "react-icons/go";
import { Link } from "react-router-dom";

export default function Alert() {
  return (
    <div className="container bg-amber-300 dark:bg-amber-500 mt-8 rounded-lg">
      <p className="flex gap-4 p-8 ">
        <span>
          <GoAlert
            size={30}
            className="inline -translate-y-1 mr-2.5 text-amber-800"
          />{" "}
          Check the latest
        </span>
        <span>
          COVID-19 restrictions before you travel.{" "}
          <Link
            to={"https://www.cdc.gov/covid/testing/index.html"}
            className="text-(--primary-color) dark:text-blue-800"
          >
            Learn more
          </Link>{" "}
        </span>
      </p>
    </div>
  );
}
