import { Link } from "react-router-dom";

const ShippingInfo = () => {
  return (
    <div className="w-full sm:w-2/3 px-4">
      <h2 className="text-xl font-bold mb-4">Shipping Information</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="First Name"
          className="border border-primary p-2 rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="border border-primary p-2 rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-primary p-2 rounded md:col-span-2"
        />
        <input
          type="tel"
          placeholder="Phone Number"
          className="border border-primary p-2 rounded md:col-span-2"
        />
        <textarea
          placeholder="Detail Address"
          className="border border-primary p-2 rounded md:col-span-2 resize-none"
          rows="3"
        />
        <input
          type="text"
          placeholder="Country"
          className="border border-primary p-2 rounded"
        />
        <input
          type="text"
          placeholder="Province"
          className="border border-primary p-2 rounded"
        />
        <input
          type="text"
          placeholder="City"
          className="border border-primary p-2 rounded"
        />
        <input
          type="text"
          placeholder="Postal Code"
          className="border border-primary p-2 rounded"
        />

        <Link to="/payment" className="text-center md:col-span-2 w-full">
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded w-full"
          >
            Confirm
          </button>
        </Link>
      </form>
    </div>
  );
};

export default ShippingInfo;
