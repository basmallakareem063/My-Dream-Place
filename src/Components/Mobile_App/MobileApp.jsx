import { Button } from "flowbite-react";
import bg1 from "../../assets/bg-1.jpg";
import bg2 from "../../assets/bg-2.png";

export default function MobileApp() {
  return (
    <section className="relative md:h-60 overflow-hidden left-1/2 w-screen -translate-x-1/2 sm:h-100">
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
        className="absolute inset-0 z-10 bg-contain bg-right bg-no-repeat md:block sm:hidden max-sm:hidden "
        style={{
          backgroundImage: `url(${bg2})`,
        }}
      />

      {/* Content */}
      <div className="container relative z-20 mx-auto h-full">
        <div className="flex h-full items-center">
          <div className="w-full max-w-125">
            <h2 className="mb-6 font-sans text-3xl font-bold leading-tight text-white">
              Download the mobile application for bonus coupons and travel codes
            </h2>

            <Button className="rounded-md bg-blue-600 text-base font-bold text-white hover:bg-blue-700 cursor-pointer transition duration-300 ">
              Download mobile app
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
