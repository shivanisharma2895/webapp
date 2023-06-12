import './App.css';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';
import Faq from './pages/help/faq';
import Contact from './pages/help/contact';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Home/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="help" element={<HelpLayout/>}>      
       <Route path="faq" element={<Faq/>}/>      
       <Route path="contact" element={<Contact/>}/>      
      </Route>
    </Route>
  )
)

function App() {
    return (
      <RouterProvider router={router}/>
    
    );
  }

  export default App

