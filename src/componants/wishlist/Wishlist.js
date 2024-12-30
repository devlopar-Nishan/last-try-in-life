import React from 'react';
import { Container, Row, Col, Card, Button, Placeholder } from 'react-bootstrap';
import './wishlist.css';
import { connect } from 'react-redux';
import { addTocart, removeFromCart, Wishlistadd, wishlistRemove } from '../Redux-componants/action/Actionl';
import { FaShoppingCart } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';
import authonticimg from '../../others/authentication.png';
const Wishlist = (props) => {
    return (
        props.wishlist.length<1?<div   style={{marginTop:'110px',color:'red',
            backgroundImage: `url(${ authonticimg})`, backgroundSize: 'cover', backgroundPosition: ' center,center', height: ' 100%',
        }} className="  wishlistbg text-center befor-wish-add">
            <h1>your wish list is empty</h1>

        </div>:<div 
        style={{
             backgroundImage: `url(${authonticimg})`, backgroundSize: 'cover', backgroundPosition: ' center,center', height: '88%',
        }}
        className="wishlist-section wishlistbg">
               <Container style={{ marginTop: "110px" }}>
                {
                    props.wishlist.map(res=>
                        <div className="wishlist-item mt-4">
                    <div className="wishlist-image">
                        <img src={res.image} alt="Wishlist Item" />
                    </div>
                    <div className="wishlist-name">
                        <p>{res.name}</p>
                        
                    </div>
                    <div className="wishlist-name">
                        <p>price:{res.price}</p>
                         
                    </div>
                    <div className="wishlist-cart-icon">
                            <FaTrash onClick={() => props.wishlistRemove(res._id)} style={{ fontSize: '1.7rem' }} />
                            <FaShoppingCart onClick={()=>props.addTocart(res)} style={{fontSize:'1.7rem'}} />
                        
                    </div>
                </div>

                    )
                }
            </Container>
 
        </div>
    );
};

const mapstateToProps = state => {
    return {
        wishlist: state.wishlist
    }
}

const mapDispatchToProps = {
    Wishlistadd: Wishlistadd,
     addTocart:addTocart,
     removeFromCart:removeFromCart,
     wishlistRemove:wishlistRemove
}

export default connect(mapstateToProps, mapDispatchToProps)(Wishlist);