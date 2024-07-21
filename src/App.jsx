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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path="/users/signin" element={<SignIn />} />
      <Route path="/users/signup" element={<SignUp />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Route>
  )
);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
