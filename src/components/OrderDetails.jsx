import PropTypes from "prop-types";

const OrderDetails = ({ order, items }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg md:w-2/3">
      <h2 className="text-4xl font-semibold mb-4">Order #{order.order_id}</h2>

      <div className="mb-4">
        {/* <p className="text-sm text-gray-500">Order: #{order.order_id}</p> */}
        <p className="text-sm text-gray-500">
          Order Date: {new Date(order.created_at).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-500">Status: {order.status}</p>
      </div>

      <div className="border-t border-gray-200 pt-4">
        {items.map((item) => (
          <div key={item.order_item_id}>
            <div className="border-b border-gray-300 py-4 flex">
              <img
                src={`/api/assets/${item.product_images.split(",")[0]}`}
                alt={item.product_name}
                className="w-20 h-20 object-cover"
              />

              <div className="flex-1 ml-4">
                <div className="flex flex-col justify-between items-end sm:flex-row">
                  <h2 className="text-lg font-bold">{item.product_name}</h2>

                  <div className="flex items-center justify-between w-full mt-2 sm:w-1/4">
                    <p className="text-md sm:text-lg font-bold">
                      Qty: {item.quantity}
                    </p>

                    <p className="text-md sm:text-lg font-bold">
                      ${parseInt(item.price) * item.quantity}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

OrderDetails.propTypes = {
  order: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

export default OrderDetails;
