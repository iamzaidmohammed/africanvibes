const PaymentForm = () => {
  return (
    <div className="w-full md:w-2/3 px-4 mb-8">
      <h2 className="text-xl font-bold mb-4">Payment Method</h2>

      {/* Payment Options */}
      <div className="flex items-center gap-4 mb-6">
        <label className="flex items-center cursor-pointer">
          <input type="radio" name="payment" className="mr-2" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg"
            alt="Visa"
            className="w-8 h-8"
          />
        </label>
        <label className="flex items-center cursor-pointer">
          <input type="radio" name="payment" className="mr-2" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
            alt="Mastercard"
            className="w-8 h-8"
          />
        </label>
        <label className="flex items-center cursor-pointer">
          <input type="radio" name="payment" className="mr-2" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/31/PayPal_Logo2014.svg"
            alt="PayPal"
            className="w-8 h-8"
          />
        </label>
        <label className="flex items-center cursor-pointer">
          <input type="radio" name="payment" className="mr-2" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/cb/Opay_Digital_Services_Limited.png"
            alt="OPay"
            className="w-16 h-16"
          />
        </label>
      </div>

      {/* Card Information */}
      <form className="grid grid-cols-1 gap-4">
        <input
          type="text"
          placeholder="Card Number"
          className="border p-2 rounded"
        />
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Expiration Date (MM/YY)"
            className="border p-2 rounded flex-grow"
          />
          <input
            type="text"
            placeholder="CVV"
            className="border p-2 rounded w-24"
          />
        </div>
        <input
          type="text"
          placeholder="Name on Card"
          className="border p-2 rounded"
        />
        <button className="bg-primary text-white py-2 px-8 rounded-md mt-4">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
