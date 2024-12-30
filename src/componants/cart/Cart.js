import React from 'react';
import { Container, Placeholder } from 'react-bootstrap';
import cartbanner from '../../images/cart-banner.jpeg'
import {   Row, Col, ListGroup, Button } from 'react-bootstrap';
import { DecresaeQuantity, QuantityIncrease, removeFromCart, SingIn, Wishlistadd } from '../Redux-componants/action/Actionl';
import { connect } from 'react-redux';
import './Cart.css';
import { FaTrash } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Cart = (props) => {
const signinFormPlaceorder='placeSign';
    

    

const totalprice= props.cart.reduce((total, item) => total + item.price * item.quantity, 0);
const discount = totalprice * 0.1; // Assuming a 10% discount
const tax = totalprice * 0.05; // Assuming a 5% tax
const finalPrice = totalprice - discount + tax;

    
    

     
     
   
     
    return (
        <div>
            <div style={{marginTop:"110px",
               backgroundImage: `url(${cartbanner})`, backgroundSize: 'cover', backgroundPosition: ' center,center', height: '35vw',
               width:"100%"

            }} className="banner">

                
            </div>
             
                 
            <Container style={{ marginTop: "45px" }}>

                < div style={{ marginTop: "110px" }}>
                    < div >  
                    <h3 className="cart-title text-center">{props.cart.length==0?'Your cart is empty':'Order items'}</h3>
                            <div className="cart-container" variant="flush">
                                {props.cart.map((item, index) => 
                                    <div className="cart-item">  
                                        <div className="cart-item-wrapper">
                                            <div className="cart-item-image">
                                                <img src={item.image} alt={item.name} />
                                            </div>
                                            <div className="div11"> 
                                            <div className="cart-item-details">
                                                <span className="cart-item-name">{item.name.substring(0, 5)}.....</span>
                                            </div>
                                            <div className="cart-item-price">
                                                <span>price: {item.price}</span>
                                            </div>
                                            </div>
                                                       
                                            <div className="cart-item-quantity">
                                                <Button variant="light" size="sm" onClick={()=>props.QuantityIncrease(item)}>+</Button>
                                                <span className="quantity-text">{item.quantity}</span>
                                                <Button variant="light" size="sm" onClick={()=>props.DecresaeQuantity(item)}>-</Button>
                                            </div>
                                            <div className="cartandhart">
                                                <Button variant="light"   onClick={()=>props.removeFromCart(item._id)}><FaTrash style={{fontSize:'1.7rem'}} /></Button>
                                                <Button variant="light"   onClick={()=>props.Wishlistadd(item)}><FaHeart style={{fontSize:'1.7rem'}} /></Button>
                                            </div>
                                             
                                        </div>
                                    </div>
                                )}
                            </div>
                        </ div>
                    </ div>
                     
                    < div  >
                        <h3 className='mt-5 text-center'>Order Summary</h3>
                    < div className='mt-5'>
                        < div>
                            <h3>Total Price:{Math.floor(finalPrice)} <span>$</span></h3>
                            <h4>Tax:{Math.floor(tax)}  <span>$</span></h4>
                            <h5>Descount:{Math.floor(discount)}  <span>$</span></h5>

                        </ div>
                        < div>
                            <Button className='w-100' variant="success"   block><Link style={{
                             color:'black',textDecoration:'none'}} to='/authontcation/place' onClick={()=>props.SingIn(signinFormPlaceorder)}>Proceed to Checkout</Link></Button>
                        </ div>
                    </ div>
                    </ div>
             
                
           
            </Container>
         </ div>

    );
};
const mapstateToProps=state=>{
    return{
        cart:state.cart,
        product:state.product
    }
}
const mapDispatchToProps={
    removeFromCart:removeFromCart,
    QuantityIncrease:QuantityIncrease,
    DecresaeQuantity:DecresaeQuantity,
    Wishlistadd:Wishlistadd,
    SingIn:SingIn
}

export default connect(mapstateToProps,mapDispatchToProps) (Cart);