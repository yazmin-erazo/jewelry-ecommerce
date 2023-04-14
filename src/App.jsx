import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";

function App() {

  const router = createBrowserRouter([
    {
      // Configura la ruta raíz "/"
      path: "/",
      element: <Layout />,
      children: [
        {          
          path: "/dashboard", 
          element: <Dashboard />, 
        },
      ],
    },
  ]);

  return (
    <div className="App">

      <RouterProvider router={router} />
        
    </div>
  );
}

export default App;
