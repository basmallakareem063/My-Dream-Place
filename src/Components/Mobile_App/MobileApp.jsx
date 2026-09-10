import { Button } from "flowbite-react";
import bg1 from "../../assets/bg-1.jpg";
import bg2 from "../../assets/bg-2.png";

export default function MobileApp() {
  return (
    <section
      className="
        relative left-1/2 w-screen -translate-x-1/2
        h-87.5 sm:h-100 md:h-80 lg:h-90
        overflow-hidden
      "
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(
            to right,
            rgba(0, 60, 100, 0.45),
            transparent
          ), url(${bg1})`,
        }}
      />

      {/* Phone + Hand */}
      <div
        className="
          absolute inset-0 z-10
          hidden md:block
          bg-contain bg-right bg-no-repeat
        "
        style={{
          backgroundImage: `url(${bg2})`,
        }}
      />

      {/* Content */}
      <div
        className="
          relative z-20 mx-auto flex h-full w-full max-w-7xl
          items-center px-4 sm:px-6 lg:px-8
        "
      >
        <div className="w-full max-w-110">
          <h2
            className="
              mb-6 font-sans font-bold leading-tight text-white
              text-2xl
              sm:text-3xl
              md:text-3xl
              lg:text-4xl
          "
          >
            Download the mobile application for bonus coupons and travel codes
          </h2>

          <Button
            className="
              cursor-pointer rounded-md
              bg-blue-600
              px-6 py-3
              text-base font-bold text-white
              transition duration-300
              hover:bg-blue-700
              sm:px-7 sm:py-4
          "
          >
            Download mobile app
          </Button>
        </div>
      </div>
    </section>
  );
}
