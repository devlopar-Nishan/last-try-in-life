import React from 'react';
import { addTocart, Wishlistadd } from '../Redux-componants/action/Actionl';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';
import Blog from '../blog/Blog';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import './morning.css';
import { Link } from 'react-router-dom';
const MorningMenu = (props) => {
const products=props.product;
 
//    const slicProduct= products.slice(5,17)
   const slicProduct=props.searchProduct;
    
    return (
        <div>
             <Container>
             <div className="product-grid">
                    { slicProduct.map((product,index) =>   
                        <div className="product-card" key={index}>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <div className="product-info">
                                <h3><Link style={{textDecoration:'none'}} to={'/'+product._id}>{product.name}</Link></h3>
                                <p>{product.recipe}</p>
                                <h5>price:{product.price}$</h5>
                                <div className="product-icons">
                                    <FaHeart onClick={()=>props.Wishlistadd(product)} className="icon" />
                                    <FaShoppingCart onClick={()=>props.addTocart(product)} className="icon" />
                                </div>
                            </div>
                        </div> 
                    )}  
                </div>
             </Container>
        </div>
    );
};
const  mapStateToProps=state=>{
    return{

       cart:state.cart,
       searchProduct:state.searchProduct,
       product:state.product
           }
}
const mapDispatchToProps={
    addTocart: addTocart,
    Wishlistadd:Wishlistadd
}

export default connect( mapStateToProps,mapDispatchToProps)( MorningMenu);

 