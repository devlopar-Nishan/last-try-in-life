import React from 'react';
import'./popular.css'
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { addTocart, Wishlistadd } from '../Redux-componants/action/Actionl';
import { Link } from 'react-router-dom';

const Popular = (props) => {
 
  return (
    <div className="outer-div mt-5 popular-card" >
     
      <div className="inner-div">
        <div className="image-div">
          <img src={props.Populardata.image} alt="Description" />
        </div>
        <div className="content-div"> 
           
          <h3><Link style={{textDecoration:'none'}} to={'/'+props.Populardata._id}>{props.Populardata.name}</Link></h3>
         
         <h4>{props.Populardata.category}</h4>
          <p>{props.Populardata.recipe}</p>
          
          <p>{props.Populardata.price}$</p >
          <div className="star-icons">
            {/* Replace with actual star icons */}
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
            <span>⭐</span>
          </div>
          
        </div>
        <div className="cart-hart">
        <FaHeart onClick={()=>props.Wishlistadd(props.Populardata)} className="icon" />
        <FaShoppingCart onClick={()=>props.addTocart(props.Populardata)} className="icon" />
        </div>
      </div>
    </div>
  );
};
const  mapStateToProps=state=>{
  return{

     cart:state.cart,
     product:state.product
     
  }
}
const mapDispatchToProps={
  addTocart: addTocart
}
export default Popular;