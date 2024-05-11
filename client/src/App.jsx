import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./app.scss";
import Layout from "./components/layout/Layout";
import Home from "./pages/home/Home";
import List from "./pages/properties/Properties";
import PropertyDetails from "./pages/propertyDetails/PropertyDetails";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="list" element={<List />} />
      <Route path="list/:id" element={<PropertyDetails />} />
      <Route path="profile" element={<Profile />} />
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Route>
  )
);
function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
