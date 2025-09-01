import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../components/home/Home';
import ContactUs from '../components/contact/ContactUs';
import Gallery from '../components/gallery/Gallery';
import AboutUs from '../components/aboutUs/AboutUs';
import CareerPage from '../components/career/CareerPage';
import IndustriesPage from '../components/industries/IndustriesPage';
import SustainabilityPage from '../components/SustainabilityPage';
import QualityPolicy from '../components/quality/QualityPolicy';
import EthanolPlant from '../components/products/EthanolPlant';
import CO2Plant from '../components/products/CO2Plant';
import DDGSFeed from '../components/products/DDGSFeed';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'contact-us',
        element: <ContactUs/>,
      },
      {
        path: 'gallery',
        element: <Gallery/>,
      },
     ,
      {
        path: 'about-us',
        element: <AboutUs/>,
      },
      {
        path: 'career',
        element: <CareerPage/>,
      },
      {
        path: 'industries',
        element: <IndustriesPage/>,
      },
      {
        path: 'sustainability',
        element: <SustainabilityPage/>,
      },
       {
        path: 'quality',
        element: <QualityPolicy/>,
      },
       {
        path: 'products/ethenol',
        element: <EthanolPlant/>,
      },
     {
        path: 'products/co2',
        element: <CO2Plant/>,
      },
     {
        path: 'products/ddgs',
        element: <DDGSFeed/>,
      },
    ],
  },
]);
