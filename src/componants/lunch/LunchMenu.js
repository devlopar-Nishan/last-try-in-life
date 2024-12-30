import React from 'react';
import { Container } from 'react-bootstrap';
import MorningMenu from '../morningMenu/MorningMenu';
import { connect } from 'react-redux';
import { addTocart, Wishlistadd } from '../Redux-componants/action/Actionl';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const LunchMenu = (props) => {
     const slicProductl=props.searchProduct;
    return (
        <div>
            <Container>
             <div className="product-grid">
                               {slicProductl.map((product, index) => (
                                   <div className="product-card" key={index}>
                                       <img src={product.image} alt={product.name} className="product-image" />
                                       <div className="product-info">
                                           <h3>{product.name}</h3>
                                           <p>{product.recipe}</p>
                                           <h5>price:{product.price}$</h5>
                                           <div className="product-icons">
                                               <FaHeart onClick={()=>props.Wishlistadd(product)} className="icon" />
                                               <FaShoppingCart onClick={()=>props.addTocart(product)} className="icon" />
                                           </div>
                                       </div>
                                   </div>
                               ))}
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

export default connect(mapStateToProps,mapDispatchToProps) (LunchMenu); 