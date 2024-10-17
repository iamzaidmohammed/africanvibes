import Footer from "../components/Footer.jsx";
import { Helmet } from "react-helmet";
import OrderDetails from "../components/OrderDetails.jsx";
import OrderSummary from "../components/OrderSummary.jsx";
import { useOrder } from "../services/order.jsx";

const Order = () => {
  const { orders } = useOrder();
  const order = orders.order;
  const items = orders.orderItems;

  return (
    <>
      <Helmet>
        <title>Order Details | African Vibes</title>
      </Helmet>

      <main className="max-w-7xl md:mx-auto px-5 md:px-10 lg:px-20">
        <section className="flex justify-between gap-3 flex-col md:flex-row pb-10">
          <OrderDetails order={order} items={items} />

          <div className="w-full md:w-1/3">
            <OrderSummary order={order} />
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
};

export default Order;
