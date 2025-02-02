import { QueryClient,QueryClientProvider } from "@tanstack/react-query";
import Customheader from "./components/Header";
import CustomDashboard from "./components/Weatherdashboard";
import Jumbotron from "./components/jumbotron";
import React from "react";
import Footer from "./components/CustomFooter";
import "./styles.css";
import Customhero from "./components/Customhero";
import CustomAboutMe from "./components/CustomAboutMe";
import CustomNavbar from "./components/Customnavbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const queryclient=new QueryClient()
export default function App() {
  
  const [location, setlocation] = React.useState(null);
  const [weatherdata, setweatherdata] = React.useState(null);
  const router = createBrowserRouter([
      {
      path:"/",
      element:(
      <div className="app">
      <CustomNavbar location={location} setlocation={setlocation} weatherdata={weatherdata} setweatherdata={setweatherdata}/>
      <Footer/>
    </div>
      ),
      errorElement:<h1> Error 404 not found</h1>,
  children:[
    {
      path:"/header",
      element:<Customheader/>
    },
  {
    path:"/table",
    element:<CustomDashboard location={location} weatherdata={weatherdata} setlocation={setlocation} setweatherdata={setweatherdata}/>
  },
  {
    path:"/aboutme",
    element:<CustomAboutMe/>
  },
  {
    path:"/hero",
    element:<Jumbotron/>
  },

  {
    path:"/features",
    element:<Customhero/>
  },
]
      },
])
  // console.log(data);
  
  return (
    <QueryClientProvider client={queryclient}>
      <RouterProvider router={router}>
    
    </RouterProvider>
    </QueryClientProvider>
  );
}
