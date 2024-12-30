import React, { useEffect, useState } from 'react';
import { addTocart  } from '../Redux-componants/action/Actionl';
import { connect } from 'react-redux';
import MorningMenu from '../morningMenu/MorningMenu';
import { Link, Outlet } from 'react-router-dom';
import './menu.css';
import { Carousel, Container } from 'react-bootstrap';
import slide1 from '../../images/01.jpg';
import slide2 from '../../images/02.jpg';
import slide3 from '../../images/04.jpg';
import slide4 from '../../images/supar-menu.png';
import { FaSearch } from 'react-icons/fa';
import { searchproducts } from '../Redux-componants/action/Actionl';
import Footer from '../footer/Footer';

const Menu = (props) => {
    const {product,cart}=props;
    const shortdata=[slide1,slide2,slide3,slide4];
    const location= window.location.pathname;
    const reducepd=product.slice(0,16);
    const  search=document.querySelector('search-bar');
    let [inputvalue,setinputvalue]=useState()
    const searchItem=(e)=>{
     let searchValue=e.target.value.toUpperCase();
     setinputvalue(searchValue);
    const filteritem=reducepd.filter(res=>res.name.toUpperCase().includes(searchValue));
    
    props.searchproducts(filteritem);

    console.log(filteritem)
    console.log(props.searchProduct );

         
    };


    useEffect(()=>{
        props.searchproducts(reducepd);
    },[])

  
  





    
    const handlelocation=(e)=>{
      e.preventDefault();
       
        
         
         document.querySelectorAll('.path').forEach((item)=>{

            if(item.pathname===e.target.pathname){
                 e.target.style.color='red';
                 e.target.classList.add('active');
           }else{
            item.classList.remove('active');
            item.style.color='black';
           }

        });
         
    }
      
    
    return (
        
        <div>
         <div style={{marginTop:"110px"}}>
            <div className="banner" style={{ backgroundImage: `url(${slide4})`, backgroundSize: 'cover', backgroundPosition: ' center,center', height:'30vw',
             position: 'relative',
             
              }}>
                <div className="search-container" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '50%' }}>
                    <input onChange={(e)=>searchItem(e)} type="text" className="search-bar" placeholder="Search..." style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }} />
                    <FaSearch className="search-icon" style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', color: '#ccc' }} />
                </div>
            </div>

             
         </div>
                         
                         
                     
                       
                <div className="sectionTaitel menu-taitel text-center ">
                <h1>Our menu</h1>
                <div className="underlinne">
                <div className="first-div">
                    {/* Content for the first div */}
                    </div>
                    <div>
                    <small className="star-icons">
                    <span>⭐</span><span>⭐</span><span>⭐</span>
                    </small>
                    </div>
                    <div className="second-div">
                    {/* Content for the second div */}
                    </div>
                </div>

                </div>


            <div className="menulist d-flex justify-content-center gap-5 flex-direction-column">
            <Link    onClick={(e)=>handlelocation(e)} id='1' className='path active' to="/menu/morning">Morning</Link>
            <Link    onClick={(e)=>handlelocation(e)}  id='2' className='path' to="/menu/lunch">Lunch</Link>
            <Link     onClick={(e)=>handlelocation(e)} id='3' className='path' to="/menu/dinner">Dinner</Link>
            </div>
            <Outlet></Outlet>
             

             <Footer></Footer>
        </div>
    );
};



const  mapStateToProps=state=>{
    return{

       cart:state.cart,
       product:state.product,
       searchProduct:state.searchProduct
       
       
    }
}
const mapDispatchToProps={
    addTocart:addTocart,
    searchproducts:searchproducts
    
}

export default connect( mapStateToProps,mapDispatchToProps)(Menu);