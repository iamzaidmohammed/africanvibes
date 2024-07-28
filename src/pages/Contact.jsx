import { Helmet } from "react-helmet";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | African Vibes</title>
      </Helmet>

      <div className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <section>
          <div className="flex items-center justify-center flex-col my-6">
            <h2 className="text-center text-4xl mb-1">Contact Us</h2>
            <div className="bg-black w-24 h-0.5"></div>
          </div>

          <div>
            <h2 className="font-semibold text-xl">Leave a message</h2>
            <p>{`Have a question or need assistance? We're here to help! Please leave us a message, and one of our team members will get back to you as soon as possible. Whether it's about an order, a product inquiry, or any other concern, we’re just a message away.`}</p>
          </div>

          <form method="POST" className="py-2 md:flex md:flex-wrap md:gap-5">
            <div className="flex flex-col gap-1 mt-4 md:w-[48%]">
              <label htmlFor="Name" className="text-lg">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="text-center bg-transparent border-2 py-2 outline-none border-primary"
              />
            </div>

            <div className="flex flex-col gap-1 mt-4 md:w-[48%]">
              <label htmlFor="email" className="text-lg">
                Email:
              </label>
              <input
                type="text"
                placeholder="Enter your email"
                className="text-center bg-transparent border-2 py-2 outline-none border-primary"
              />
            </div>

            <div className="flex flex-col gap-1 mt-4 md:w-[48%]">
              <label htmlFor="address" className="text-lg">
                Address:
              </label>
              <input
                type="text"
                placeholder="Enter your address"
                className="text-center bg-transparent border-2 py-2 outline-none border-primary"
              />
            </div>

            <div className="flex flex-col gap-1 mt-4 md:w-[48%]">
              <label htmlFor="phone" className="text-lg">
                Phone Number:
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="text-center bg-transparent border-2 py-2 outline-none border-primary"
              />
            </div>

            <div className="flex flex-col gap-1 mt-4 w-full">
              <label htmlFor="phone" className="text-lg">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="5"
                className="border-2 p-2 outline-none border-primary resize-none"
                placeholder="Enter your message"
              ></textarea>
            </div>

            <button
              className="bg-primary w-full py-2 md:py-4 text-white mt-5 mb-2 rounded-md"
              type="submit"
            >
              Send message
            </button>
          </form>
        </section>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
