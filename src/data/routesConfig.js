import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";

const routesConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "/", element: <Home /> }],
  },
];

export default routesConfig;
