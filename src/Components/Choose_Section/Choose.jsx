import ticket from "../../assets/ticket.svg.png";
import ballon from "../../assets/hot-air-balloon.svg.png";
import diamond from "../../assets/diamond.svg.png";
import medal from "../../assets/medal.svg.png";

export default function Choose() {
  return (
    <div className="container my-24">
      <h2 className="text-xl font-bold mb-1.5 dark:text-white">Why Choose US</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 ">
        {/* Cards */}
        <div className="card bg-white rounded-xl shadow-lg p-3 dark:bg-gray-800 ">
          {/* Image */}
          <div className="image w-full ">
            <img src={`${ticket}`} alt="Ticket Image" className="mx-auto" />
          </div>
          {/* Content */}
          <div className="content text-start mt-3.5">
            <h4 className="mb-2.5 dark:text-white">Ultimate flexibility</h4>
            <p className="text-gray-500 text-sm dark:text-amber-100">
              You're in control, with free cancellation and payment options to
              satisfy any plan or budget.
            </p>
          </div>
        </div>

        <div className="card bg-white rounded-xl shadow-lg p-3 dark:bg-gray-800 ">
          {/* Image */}
          <div className="image w-full ">
            <img src={`${ballon}`} alt="Ballon Image" className="mx-auto" />
            {/* Content */}
          </div>
          <div className="content text-start mt-3.5">
            <h4 className="mb-2.5 dark:text-white">Memorable experiences</h4>
            <p className="text-gray-500 text-sm dark:text-amber-100">
              Browse and book tours and activities so incredible, you'll want to
              tell your friends.
            </p>
          </div>
        </div>

        <div className="card bg-white rounded-xl shadow-lg p-3 dark:bg-gray-800 ">
          {/* Image */}
          <div className="image w-full ">
            <img src={`${diamond}`} alt="Diamond Image" className="mx-auto" />
          </div>
          {/* Content */}
          <div className="content text-start mt-3.5">
            <h4 className="mb-2.5 dark:text-white"> Quality at our core</h4>
            <p className="text-gray-500 text-sm dark:text-amber-100">
              High-quality standards. Millions of reviews. A tours company.
            </p>
          </div>
        </div>

        <div className="card bg-white rounded-xl shadow-lg p-3 dark:bg-gray-800 ">
          {/* Image */}
          <div className="image w-full ">
            <img src={`${medal}`} alt="Medal Image" className="mx-auto" />
          </div>
          {/* Content */}
          <div className="content text-start mt-3.5">
            <h4 className="mb-2.5 dark:text-white">Award-winning support</h4>
            <p className="text-gray-500 text-sm dark:text-amber-100">
              New price? New plan? No problem. We're here to help, 24/7.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
