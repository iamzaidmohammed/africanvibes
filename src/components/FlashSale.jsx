import FlashSaleImg from "../assets/flash-sale.png";

const FlashSale = () => {
  return (
    <section className="bg-gray-100 p-6 mt-6 flex items-center justify-between">
      <div>
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold">Flash Sale</h2>
          <p className="text-xl">Get 50% Off - Limited Time Offer!</p>
          <p className="text-xl">3 days : 9 hrs : 32 mins : 15 secs</p>
        </div>
        <div className="text-center mt-4">
          <button className="px-4 py-2 bg-primary text-white rounded">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex overflow-x-scroll space-x-4">
        <img src={FlashSaleImg} className="w-80" alt="flash sale" />
      </div>
    </section>
  );
};

export default FlashSale;
