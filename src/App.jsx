import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import SignIn from "./pages/Signin.jsx";
import SignUp from "./pages/Signup.jsx";
import { AuthProvider } from "./services/authService";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";
import ProductsDetails from "./pages/ProductsDetails.jsx";
import NotFound from "./pages/NotFound.jsx";
import CartPage from "./pages/Cart.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import { CartProvider } from "./services/cartService.jsx";
import Shipping from "./pages/Shipping.jsx";
import Payment from "./pages/Payment.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/users/signin" element={<SignIn />} />
      <Route path="/users/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop/products" element={<Products />} />
      <Route path="/shop/products/:id" element={<ProductsDetails />} />
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
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
