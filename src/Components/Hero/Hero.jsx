import hero_bg from "../../assets/hero.jpg";

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center h-screen flex justify-center items-center text-center mt-5"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.5),rgba(0,0,0,.5)) ,url(${hero_bg})`,
      }}
    >
      <div className="container">
        <div className="content text-white p-3">
          <h1 className="text-4xl font-bold mb-4">Enjoy Your Dream Vacation</h1>
          <p className="text-xl m-auto">
            Plan and book our perfect trip with expert advice, travel tips,
            <br />
            destination information and inspiration from us
          </p>
        </div>
      </div>
    </section>
  );
}
