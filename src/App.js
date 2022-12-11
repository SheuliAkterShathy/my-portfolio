
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
 import About from './Components/About';
 import Contact from './Components/Contact';
import Details from './Components/Details/Details';
import Footer from './Components/Footer';
import Homee from './Components/Homee';

import Main from './Components/Main';
 import Navbar from './Components/Navbar';
 import Projects from './Components/Projects/Projects';
 import Skills from './Components/Skills/Skills';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path: "/",
          element: <Homee></Homee>
        },
        
      ]
      
    },
    {
      path: "/details/:id",
      element: <Details></Details>,
      // loader: ({ params }) =>
      // fetch(`data/project.json/${params.id}`),
    },
  ])
  return (
    <div className="max-w-[1200px] mx-auto bg-blue-50">
     <RouterProvider router={router}></RouterProvider>
      {/* <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer> */}
    </div>
  );
}

export default App;
