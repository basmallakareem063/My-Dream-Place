import { CiLocationOn } from "react-icons/ci";
import { FaRegCalendar } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi2";

import { Button } from "flowbite-react";

export default function Search() {
  return (
    <div className="relative z-20 -mt-12 px-4">
      <div className="mx-auto max-w-[92%]">
        <div className="grid grid-cols-1 gap-3 rounded-xl bg-white p-4 shadow-2xl md:grid-cols-[2fr_1fr_1fr_1fr_1fr] dark:bg-gray-800">
          {/* Destination */}
          <div className="flex h-12 items-center rounded-lg bg-gray-100 px-4 dark:bg-gray-200">
            <CiLocationOn className="mr-3 text-xl text-gray-700" />

            <input
              type="text"
              placeholder="Where are you going?"
              className="w-full bg-transparent text-gray-700 outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Check in */}
          <div className="flex h-12 items-center rounded-lg bg-gray-100 px-4 dark:bg-gray-200">
            <FaRegCalendar className="mr-3 text-lg text-gray-700" />

            <input
              type="text"
              placeholder="Check in"
              className="w-full bg-transparent text-gray-700 outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Check out */}
          <div className="flex h-12 items-center rounded-lg bg-gray-100 px-4 dark:bg-gray-200">
            <FaRegCalendar className="mr-3 text-lg text-gray-700" />

            <input
              type="text"
              placeholder="Check out"
              className="w-full bg-transparent text-gray-700 outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Guests */}
          <div className="flex h-12 items-center rounded-lg bg-gray-100 px-4 dark:bg-gray-200">
            <HiOutlineUserGroup className="mr-3 text-xl text-gray-700" />

            <input
              type="text"
              placeholder="Guests"
              className="w-full bg-transparent text-gray-700 outline-none placeholder:text-gray-500"
            />
          </div>

          {/* Search Button*/}
          <Button className="h-12 w-full rounded-lg bg-(--primary-color) text-white transition hover:bg-blue-700 cursor-pointer">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
}
