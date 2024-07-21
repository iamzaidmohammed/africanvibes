import SecImg from "../assets/sec-img-2.jpg";

const Newsletter = () => {
  return (
    <div>
      {/* Newsletter */}
      <section className="mt-6">
        <div className="flex items-center justify-center flex-col">
          <h2 className="text-center text-4xl mb-2">Stay Updated</h2>
          <div className="bg-black w-24 h-0.5"></div>
        </div>
        <div className="flex flex-col items-center text-center bg-white mt-6 px-6 md:flex-row">
          <div className="bg-secondary p-6 md:py-10">
            <p className="mb-4">
              Subscribe to Our Newsletter to receive Exclusive Deals and New
              Arrival.
            </p>
            <div className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Enter your Email"
                className="p-2 outline-none bg-primary text-white placeholder-secondary rounded-l-lg pl-6"
              />
              <button className="p-2 pr-6 bg-primary text-white rounded-r-lg">
                Subscribe
              </button>
            </div>
          </div>

          <div>
            <img
              src={SecImg}
              alt="African Vibes"
              className="hidden md:block mb-4 rounded-lg md:w-3/4"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Newsletter;
