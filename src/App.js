import { RouterProvider, createBrowserRouter } from "react-router-dom";
import User from "./components/User";
import Admin from "./components/Admin";
import Root from "./Root";
import Rooter from "./Rooter";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Rooter />,
    children: [
      {
        path: "/", element:<Root />
      },
      { path: "/User", element: <User /> },
      { path: "/Admin", element: <Admin /> },
    ],
  },
]);

function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
