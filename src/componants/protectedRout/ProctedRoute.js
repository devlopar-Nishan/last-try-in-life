import React from 'react';
import { PlaceOrder, SigninData } from '../Redux-componants/action/Actionl';
import { connect } from 'react-redux';
import Authontation from '../Authontation/Authontation';
import Placeorder from '../placeOrder/Placeorder';
import { Outlet } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc,setDoc,doc  } from "firebase/firestore";

const ProctedRoute = (props) => {
    
     
    return (

    
        <div>
           {
            
            props.singindata && props.singindata.email?<Outlet/>:<Authontation/>
           } 
        </div>
    );
};
const mapstateToProps=(state)=>{
    return{
        singindata:state.singindata
    }
}
const mapDispatchToProps={
    SigninData:SigninData
}
export default connect(mapstateToProps,mapDispatchToProps)(ProctedRoute);