import { BiSolidPlaneAlt } from "react-icons/bi";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#fffcf0] text-gray-700 dark:text-white dark:bg-gray-800 w-full relative mt-20">
        
        {/* Footer Content */}
        <div className="mx-auto px-6 py-16">
          {/* Heading */}
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
              Explore the world with My Dream place
            </h2>

            <p className="text-lg text-blue-600 dark:text-white">
              Discover new places and experiences
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                <BiSolidPlaneAlt color="var(--primary-color)" size={23} /> my
                Dream Place
              </h3>

              <p className="text-gray-600 dark:text-white">
                Your next goto companion for travel
              </p>
            </div>

            {/* Company */}
            <div>
              <h3 className="mb-4 font-bold text-gray-900 dark:text-white">
                Company
              </h3>

              <ul className="space-y-3">
                <li>
                  <a className="dark:text-amber-100">About</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">Jobs</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">Newsroom</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">Advertising</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">Contact us</a>
                </li>
              </ul>
            </div>

            {/* Explore */}
            <div>
              <h3 className="mb-4 font-bold text-gray-900 dark:text-white">
                Explore
              </h3>

              <ul className="space-y-3">
                <li>
                  <a className="dark:text-amber-100">Australia</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">New Zealand</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">
                    United States America (USA)
                  </a>
                </li>
                <li>
                  <a className="dark:text-amber-100">Greece</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">Maldives</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">Singapore</a>
                </li>
                <li>
                  <a className="text-(--primary-color) dark:text-amber-100">
                    See more
                  </a>
                </li>
              </ul>
            </div>

            {/* Terms */}
            <div>
              <h3 className="mb-4 font-bold text-gray-900 dark:text-white">
                Terms and Policies
              </h3>

              <ul className="space-y-3">
                <li>
                  <a className="dark:text-amber-100">Privacy Policy</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">Terms of use</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">Accessibility</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">Reward system policy</a>
                </li>
              </ul>
            </div>

            {/* Help */}
            <div>
              <h3 className="mb-4 font-bold text-gray-900 dark:text-white">
                Help
              </h3>

              <ul className="space-y-3">
                <li>
                  <a className="dark:text-amber-100">Support</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">Cancel your bookings</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">Use Coupon</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">Refund Policies</a>
                </li>
                <li>
                  <a className="dark:text-amber-100">
                    International Travel Documents
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full border-t border-gray-200 bg-[#f7f6f2] py-4 dark:bg-gray-800">
          <p className="text-center text-gray-700 dark:text-white">
            © my Dream Place 2026
          </p>
        </div>
      </footer>
    </>
  );
}
