export const ADD_TO_CART='ADD_TO_CART';
export const REMOVE_TO_CART='REMOVE_TO_CART';
export const ICREASE_QUANTITY='INCREASE_QUANTITY';
export const DCRREASE_QUANTITY='DCRREASE_QUANTITY';
export const WISHLIST_ADD='WISHLIST_ADD';
export const WISHLIST_REMOVE='WISHLIST_REMOVE';
export const PLACE_ORDER='PLACE_ORDER';
export const BOOK_TABLE='BOOK_TABLE';
export const SIGN_IN="SIGN_IN";
export const SIGN_IN_DATA="SIGN_IN_DATA";
export const SEARCH_PD='SEARCH_PD';



export const addTocart=(pd)=>{
    return {type:ADD_TO_CART ,pd}

}
export const removeFromCart=(id)=>{
    return {type:REMOVE_TO_CART,id}
}
export const QuantityIncrease=pd=>{
    return {type:ICREASE_QUANTITY,pd}
}
export const DecresaeQuantity=pd=>{
    return {type: DCRREASE_QUANTITY,pd}
}
export const Wishlistadd=(pd)=>{
    return {type:WISHLIST_ADD,pd}
}
export const wishlistRemove=(id)=>{
    return {type:WISHLIST_REMOVE,id}
}   
export const PlaceOrder=(order)=>{
    return {type:PLACE_ORDER,order}
}
export const BookTable=(table)=>{
    return {type:BOOK_TABLE,table}
}
export const SingIn=(  signout)=>{
    return {type:SIGN_IN,signout }
}
export const SigninData=(singinData)=>{
    return{type:SIGN_IN_DATA,singinData}
}

export const searchproducts=(data)=>{
    return{type:SEARCH_PD,data}
}
