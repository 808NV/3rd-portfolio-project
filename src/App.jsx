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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="list" element={<List />} />
      <Route path="list/:id" element={<PropertyDetails />} />
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
