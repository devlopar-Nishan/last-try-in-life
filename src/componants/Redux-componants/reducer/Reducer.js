
import foodItem from'../../../foodItem.json';
import { ADD_TO_CART, BOOK_TABLE, DCRREASE_QUANTITY, ICREASE_QUANTITY, PLACE_ORDER, REMOVE_TO_CART, SEARCH_PD, searchProducts, SIGN_IN,   SIGN_IN_DATA,   WISHLIST_ADD, WISHLIST_REMOVE } from '../action/Actionl';

const initalstate={
    cart:[],
    wishlist:[],
    orderPlaceInfo:[],
    bookTableInfo:[],
    signinPath:{},
    singindata:{email:'',name:'',password:''},
    product:foodItem,
    searchProduct:[]

    


}

const CartReducer=(state=initalstate,action)=>{
const cart=state.cart;
switch(action.type){
    case ADD_TO_CART:
        const newitm=[...state.cart,action.pd]
        const existitmfind=state.cart.find(res=>res && res._id ===action.pd._id);
        const existitmfilter=state.cart.filter(res=>res._id !== action.pd._id);
        const fainalexist=[...existitmfilter,existitmfind];
            if(existitmfind){
                console.log('nice')
                return {...state,cart:fainalexist}
            } 
             return {...state,cart:newitm};
           

         
         
         
         
    case REMOVE_TO_CART:
        const afterRemove=state.cart.filter(fitm=>fitm._id!==action.id);
         
             
        return {...state,cart:afterRemove}

    case ICREASE_QUANTITY:
         
        
       
        const updatedCart = state.cart.map(item => 
            item._id === action.pd._id ? { ...item, quantity: item.quantity + 1 } : item
        );
        return { ...state, cart: updatedCart };



    case DCRREASE_QUANTITY:
        const decreasedCart = state.cart.map(item => 
            item._id === action.pd._id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
        );
        return { ...state, cart: decreasedCart };

    case WISHLIST_ADD:
            const newWishlist=[...state.wishlist,action.pd]
            const existWishlistfind=state.wishlist.find(res=>res && res._id ===action.pd._id);
            const existWishlistfilter=state.wishlist.filter(res=>res._id !== action.pd._id); 
            const fainalWishlist=[...existWishlistfilter,existWishlistfind];
            if(existWishlistfind){
                console.log('nice')
                return {...state,wishlist:fainalWishlist}
            }

            return {...state,wishlist:newWishlist}

    case WISHLIST_REMOVE:
        const afterRemoveWishlist=state.wishlist.filter(fitm=>fitm._id!==action.id);
        return {...state,wishlist:afterRemoveWishlist}


    case PLACE_ORDER:
        const newOrder=[...state.orderPlaceInfo,action.order]
        return {...state,orderPlaceInfo:newOrder}

    case BOOK_TABLE:
        const newTable=[...state.bookTableInfo,action.table];
        return {...state,bookTableInfo:newTable};

        
    case SIGN_IN:
        const singin_path=action.signout;
        return {...state,signinPath:singin_path};

    case SIGN_IN_DATA:
        const singindata=action.singinData ;
        return{...state,singindata:singindata}   

    case SEARCH_PD:
        const resultsearch=action.data;
        return{...state,searchProduct:resultsearch}









    default:
            return state;
}
 
}
 
export default CartReducer;