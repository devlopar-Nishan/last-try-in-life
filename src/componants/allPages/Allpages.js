import React, { useEffect } from 'react';
import Header from '../header/Header';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Banner from '../banner/Banner';
import Home from '../home/Home';
import bodyimg from '../../images/best-chip.jpg';
import './Allpage.css'
import bannerimg2 from '../../images/bgimg.png'
import Footer from '../footer/Footer';
import { addTocart, Wishlistadd } from '../Redux-componants/action/Actionl';
import { connect } from 'react-redux';
import {FaHeart } from 'react-icons/fa';
import { FaCartPlus } from "react-icons/fa6";
import loaderimg from '../../others/loader2.gif';
 

const Allpages = (props) => {
   
    const navigate = useNavigate();
    const [loading, setLoading] = React.useState(false);

    
    useEffect(() => {
        navigate('/home');
     setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, [navigate]);

       
    
    return (

        
         <div className=''>
       
            
             <Header />
         
             <Outlet></Outlet>

             {
                props.cart.length > 0 ? <div className="footer-cart">
                    <div className="footer-cart-icons">
                        <div className='d-flex  flex-column align-items-center justify-content-center'>
                            <span style={{color:'red'}}>{props.cart.length}</span>
                       <Link  style={{color:'red'}} to='/cart'><FaCartPlus   /></Link>  
                        </div>
                       <Link  className={props.Wishlistadd.length>0?'reactivate':null} style={{color:'red' ,marginTop:'20px'}} to='/wishlist'><FaHeart    /></Link> 
                    </div>
                </div>:null
                          }

        

        
        
              
          
            
          

            
 
        </div>
    );
};


const mapstateToProps = state => {
    return {
        cart: state.cart,
    }
}
const mapDispatchToProps={
    addTocart: addTocart,
    Wishlistadd:Wishlistadd
     
       
}
export default connect(mapstateToProps,mapDispatchToProps)(Allpages);