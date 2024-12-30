// import logo from './logo.svg';
import logo from'../src/banner3.jpg';
import './App.css';
import Allpages from './componants/allPages/Allpages';
import Header from './componants/header/Header';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from './componants/home/Home';
import Menu from './componants/menu/Menu';
import { connect } from 'react-redux';
import { addTocart, BookTable } from './componants/Redux-componants/action/Actionl';
import MorningMenu from './componants/morningMenu/MorningMenu';
import LunchMenu from './componants/lunch/LunchMenu';
import DinnerMenu from './componants/dinar/DinnerMenu';
import Cart from './componants/cart/Cart';
import About from './componants/header/about/About';
import Gallery from './componants/home/gallery/Gallery';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Wishlist from './componants/wishlist/Wishlist';
 
import Placeorder from './componants/placeOrder/Placeorder';
import AboutMain from './componants/aboutMain/AboutMain';
import Authontation from './componants/Authontation/Authontation';
import ProctedRoute from './componants/protectedRout/ProctedRoute';
import ProductDetails from './componants/productDetails/ProductDetails';
import Bookingtable from './componants/booking/Bookingtable';
import Clientrevue from './componants/clientrevue/Clientrevue';
import Bookfooter from './componants/home/booking.js/Bookfooter';
import lodaingimg from '../src/others/loader2.gif';
import { useState } from 'react';
import CompliteOrder from './componants/compliteOrder/CompliteOrder';
function App(props) {
  const [isLoading, setIsLoading] = useState(true);
     
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 1300);
  }, []);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff'
      }}>
        <img src={lodaingimg} alt="Loading..." />
      </div>
    );
  }










  
  const router=createBrowserRouter([
  {
    path:'/',
    element:<Allpages/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/home',
        element:<Home/>,
      },
      {
        path:'/:key',
        element:<ProductDetails/>
      },
      {
        path:'/menu',
        element:<Menu/>,
        children:[
          
          {
            path:'/menu',
            element:<MorningMenu/>
          },
          {
            path:'/menu/morning',
            element:<MorningMenu/>
          },
          {
            path:'/menu/lunch',
            element:<LunchMenu/>
          },
          {
            path:'/menu/dinner',
            element:<DinnerMenu/>
          }

        ]
      },
      {
        path:'/cart',
        element:<Cart/>
      },
      {
        path:'/wishlist',
        element:<Wishlist/>
      },
      {
        path:'/about',
        element: <AboutMain/>
      },
      {
        path:"gallery",
        element:<Gallery/>
      },
      {
         path:'/booktable',
         element: < Bookfooter/>
      },
      {
        path:'/compliveOrder',
        element: <CompliteOrder/>
      },
      {
        path:'/authontcation',
        element:<ProctedRoute/>,
        children:[
          
          {
            path:"/authontcation/place",
            element:<Placeorder/>
          },
          {
            path:'/authontcation/menu',
            element:<Menu/>
          }

        ]
      },
       
       
    ]
  }
  ]);
    



  console.log(props)


  
  return  <RouterProvider router={router}/>

    
}
 

export default  App;

































































































 