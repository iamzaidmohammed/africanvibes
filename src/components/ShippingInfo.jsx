import { useAuth } from "../services/authService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOrder } from "../services/order";

const ShippingInfo = () => {
  const { user } = useAuth();
  const { createOrder } = useOrder();
  const [address, setAddress] = useState({});
  const [shippingInfo, setShippingInfo] = useState({
    firstName: address.firstName || "",
    lastName: address.lastName || "",
    email: address.email || "",
    phone: address.phone || "",
    detailedAddress: address.detailedAddress || "",
    country: address.country || "",
    province: address.province || "",
    city: address.city || "",
    postalCode: address.postalCode || "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setShippingInfo({
      ...shippingInfo,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/api/shipping?id=${user.id}`);
      const data = await response.json();
      setAddress(() => data[0]);

      setShippingInfo({
        firstName: data[0].firstName || "",
        lastName: data[0].lastName || "",
        email: data[0].email || "",
        phone: data[0].phone || "1",
        detailedAddress: data[0].detailedAddress || "",
        country: data[0].country || "",
        province: data[0].province || "",
        city: data[0].city || "",
        postalCode: data[0].postalCode || "",
      });
    };
    fetchData();
  }, [user.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/shipping", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.id,
        first_name: shippingInfo.firstName,
        last_name: shippingInfo.lastName,
        email: shippingInfo.email,
        phone: shippingInfo.phone,
        detailed_address: shippingInfo.detailedAddress,
        country: shippingInfo.country,
        province: shippingInfo.province,
        city: shippingInfo.city,
        postal_code: shippingInfo.postalCode,
      }),
    });

    const data = await response.json();

    if (data.status === "success") {
      const result = await createOrder(user.id);
      if (result.status === "success") {
        navigate("/payment", { replace: true });
      }
    } else {
      setError(data.message);
    }
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError("");
      }, 3000);

      return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
    }
  }, [error]);

  return (
    <div className="w-full sm:w-2/3 px-4">
      <h2 className="text-2xl font-bold mb-2">Shipping Information</h2>
      <div className="h-10">
        {error && <p className="text-center text-lg text-red-500">{error}</p>}
      </div>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={shippingInfo.firstName}
          onChange={handleChange}
          className="border border-primary p-2 rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={shippingInfo.lastName}
          onChange={handleChange}
          className="border border-primary p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={shippingInfo.email}
          onChange={handleChange}
          className="border border-primary p-2 rounded md:col-span-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={shippingInfo.phone}
          onChange={handleChange}
          className="border border-primary p-2 rounded md:col-span-2"
        />
        <textarea
          name="detailedAddress"
          placeholder="Detail Address"
          value={shippingInfo.detailedAddress}
          onChange={handleChange}
          className="border border-primary p-2 rounded md:col-span-2 resize-none"
          rows="3"
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          value={shippingInfo.country}
          onChange={handleChange}
          className="border border-primary p-2 rounded"
        />
        <input
          type="text"
          name="province"
          placeholder="Province"
          value={shippingInfo.province}
          onChange={handleChange}
          className="border border-primary p-2 rounded"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={shippingInfo.city}
          onChange={handleChange}
          className="border border-primary p-2 rounded"
        />
        <input
          type="text"
          name="postalCode"
          placeholder="Postal Code"
          value={shippingInfo.postalCode}
          onChange={handleChange}
          className="border border-primary p-2 rounded"
        />

        <div className="text-center md:col-span-2 w-full">
          <button
            type="submit"
            className="bg-primary text-white p-2 rounded w-full"
          >
            Confirm
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingInfo;
