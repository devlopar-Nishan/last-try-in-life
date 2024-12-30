import React from 'react';
import { useParams } from 'react-router-dom';
import { addTocart, Wishlistadd, DecresaeQuantity, QuantityIncrease, } from '../Redux-componants/action/Actionl';
import { connect } from 'react-redux';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import './detailPD.css';


const ProductDetails = (props) => {
    const {key}=useParams();
    console.log(key)
    const findFormCart=props.cart.find(pd=>pd._id===key);
    

   
    const Detailspd=props.product.find(res=>res._id===key);
    console.log(Detailspd)
    if(findFormCart){
        Detailspd.quantity=findFormCart.quantity ;
    }
    const increase=()=>{
        if(findFormCart){
            Detailspd.quantity=findFormCart.quantity ;
        }
        Detailspd.quantity=Detailspd.quantity+1
        props.QuantityIncrease(Detailspd)
    }
    const decrease=()=>{

        if(findFormCart){
            Detailspd.quantity=findFormCart.quantity ;
        }
        if(Detailspd.quantity>1){
            Detailspd.quantity=Detailspd.quantity-1
            
        }
       
        props.DecresaeQuantity(Detailspd)
        
        
    }



    if(Detailspd){
        
        return (
            <div style={{marginTop:'120px'}}>
                <Container>
                 
                <div
            //     style={{
            //         display:'flex',
            //         flexDirection:'row',
            //         justifyContent:'space-between',
            //         height:'400px',
            //         width:'auto'
                    

            //     }
            // }
                 className="product-card" key={Detailspd._id}>
                        <div className="   detailpd-img">
                        <img src={Detailspd.image} alt='img' className="Detailspd-image" />
                        </div>

                    <div className="   Detailspd-info">
                        <h3>{Detailspd.name}</h3>
                        <p>{Detailspd.recipe}</p>
                        <h5>price:{Detailspd.price}$</h5>
                        <div className="Detailspd-icons">
                            <FaHeart onClick={()=>props.Wishlistadd(Detailspd)} className="harts"
                            
                            />
                            <FaShoppingCart onClick={()=>props.addTocart(Detailspd)} className="carts" 
                             
                             />
                        </div>
                        < button 
                         
                        
                            onClick={()=> 
                            increase() }> +</ button>
                        <span >{Detailspd.quantity}</span>
                        < button
                         
                        
                           onClick={()=>{
                            decrease();}}>-</ button>
                    </div>
                 </div>
    
                </Container>
                
            </div>
        );
    }else{
        return(
           <h2>empty</h2> 
        );
    }

   
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
    Wishlistadd:Wishlistadd,
     QuantityIncrease:QuantityIncrease,
     DecresaeQuantity:DecresaeQuantity,
}

export default  connect(mapStateToProps,mapDispatchToProps)(ProductDetails);