import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { AuthProvider } from "./services/authService";
import { ProductProvider } from "./services/productService";
import { CartProvider } from "./services/cartService";
import { OrderProvider } from "./services/order.jsx";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductsDetails from "./pages/ProductsDetails.jsx";
import SignIn from "./pages/Signin.jsx";
import SignUp from "./pages/Signup.jsx";
import CartPage from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import Shipping from "./pages/Shipping.jsx";
import Payment from "./pages/Payment.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop/products" element={<Products />} />
      <Route path="/shop/products/:id" element={<ProductsDetails />} />
      <Route path="/users/signin" element={<SignIn />} />
      <Route path="/users/signup" element={<SignUp />} />
      <Route path="/shop/cart" element={<CartPage />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/shipping-info" element={<Shipping />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <OrderProvider>
            <RouterProvider router={router} />
          </OrderProvider>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
