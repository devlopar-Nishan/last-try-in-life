import React, { useInsertionEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './placeorder.css';
import { PlaceOrder } from '../Redux-componants/action/Actionl';
import { connect } from 'react-redux';
import Login from '../login/Login';
import Authontation from '../Authontation/Authontation';
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Placeorder = (props) => {
 

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        state: '',
        zip: '',
        phone: '',
        city: ''
    });
     
    const getFormdata=(e)=>{
        const userinformation={...formData}
        userinformation[e.target.name]=e.target.value;
        setFormData(userinformation);

    }
    const handlesubmit= (e) => {
        e.preventDefault();
      
     
         document.querySelectorAll('input').forEach((eachinput)=>{
             
             


            if (eachinput.name === 'email' && document.getElementsByName('email')[0].value !== '') {
                const email = eachinput.value;
                const emailregex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (emailregex.test(email)) {
                    console.log('email is valid');
                    document.getElementById('labemail').innerText='Email';
                    document.getElementsByName('email')[0].style.border='';
                    document.getElementById('labemail').style.color='black';
                     
                }else{
                    document.getElementById('labemail').innerText='email is not valid';
                    document.getElementsByName('email')[0].style.border='1px solid red';
                    document.getElementById('labemail').style.color='red';
                    console.log('imvalide');
                }

            }else if (document.getElementsByName('email')[0].value === '') {
                document.getElementById('labemail').style.color = 'red';
                document.getElementById('labemail').innerHTML = 'email is empty';
                document.getElementsByName('email')[0].style.border = '1px solid red';
            }  
            

            if (eachinput.name === 'phone' && document.getElementsByName('phone')[0].value !== '') {
                const phone = eachinput.value;
                const phoneregex = /^\d{11}$/;
                if (phoneregex.test(phone)) {
                    console.log('phone is valid');
                    document.getElementById('labphone').innerText = 'Phone Number';
                    document.getElementsByName('phone')[0].style.border = '';
                    document.getElementById('labphone').style.color = 'black';
                    
                } else {
                    document.getElementById('labphone').innerText = 'phone is not valid';
                    document.getElementsByName('phone')[0].style.border = '1px solid red';
                    document.getElementById('labphone').style.color = 'red';
                }
            } else if (document.getElementsByName('phone')[0].value === '') {
                document.getElementById('labphone').style.color = 'red';
                document.getElementById('labphone').innerHTML = 'phone is empty';
                document.getElementsByName('phone')[0].style.border = '1px solid red';
            }
            

            if(eachinput.name==='zip'&& document.getElementsByName('zip')[0].value!==''){
                const zip=eachinput.value;
                const zipregex=/^\d{6}$/;
                if(zipregex.test(zip)){
                    console.log('zip is valid');
                }else{
                    document.getElementById('labzip').innerHTML='zip is not valid';
                    document.getElementsByName('zip')[0].style.border='1px solid red';
                    document.getElementById('labzip').style.color='red';
                }
            }else if(document.getElementsByName('zip')[0].value===''){
                document.getElementById('labzip').style.color='red';
                document.getElementById('labzip').innerHTML='zip is empty';
                  
                document.getElementsByName('zip')[0].style.border='1px solid red';

            }else{
                document.getElementById('labzip').style.color='black';
                document.getElementById('labzip').innerHTML='Zip';
                  
                document.getElementsByName('zip')[0].style.border='';
            }

            // for name validation
            
            if (eachinput.name === 'name' && document.getElementsByName('name')[0].value !== '') {
                const name = eachinput.value;
                const nameregex = /^[a-zA-Z\s]+$/;
                if (nameregex.test(name)) {
                    console.log('name is valid');
                } else {
                    document.getElementById('labname').innerHTML = 'name is not valid';
                    document.getElementsByName('name')[0].style.border = '1px solid red';
                    document.getElementById('labname').style.color = 'red';
                }
            } else if (document.getElementsByName('name')[0].value === '') {
                document.getElementById('labname').style.color = 'red';
                document.getElementById('labname').innerHTML = 'name is empty';
                document.getElementsByName('name')[0].style.border = '1px solid red';
            } else {
                document.getElementById('labname').style.color = 'black';
                document.getElementById('labname').innerHTML = 'Name';
                document.getElementsByName('name')[0].style.border = '';
            }
            
            if(eachinput.name==='city'&& document.getElementsByName('city')[0].value!==''){
                const city=eachinput.value;
                const cityregex=/^[a-zA-Z]+$/;
                if(cityregex.test(city)){
                    console.log('city is valid');
                    document.getElementsByName('city')[0].style.border='';
                } 
            }else if(document.getElementsByName('city')[0].value===''){  
                document.getElementById('labcity').style.color='red';
                document.getElementById('labcity').innerHTML='city is empty';
                
                document.getElementsByName('city')[0].style.border='1px solid red';
            }else{
                document.getElementById('labcity').style.color='black';
                document.getElementById('labcity').innerHTML='City';
                
                document.getElementsByName('city')[0].style.border='  ';
            }
            if (eachinput.name === 'state' && document.getElementsByName('state')[0].value !== '') {
                const state = eachinput.value;
                const stateregex = /^[a-zA-Z\s]+$/;
                if (stateregex.test(state)) {
                    console.log('state is valid');
                    document.getElementById('labstate').innerText = 'State';
                    document.getElementsByName('state')[0].style.border = '';
                    document.getElementById('labstate').style.color = 'black';
                } else {
                    document.getElementById('labstate').innerText = 'state is not valid';
                    document.getElementsByName('state')[0].style.border = '1px solid red';
                    document.getElementById('labstate').style.color = 'red';
                }
            } else if (document.getElementsByName('state')[0].value === '') {
                document.getElementById('labstate').style.color = 'red';
                document.getElementById('labstate').innerHTML = 'state is empty';
                document.getElementsByName('state')[0].style.border = '1px solid red';
            } else {
                document.getElementById('labstate').style.color = 'black';
                document.getElementById('labstate').innerHTML = 'State';
                document.getElementsByName('state')[0].style.border = '';
            }

            if(eachinput.name==='address'&& document.getElementsByName('address')[0].value!==''){
                const address=eachinput.value;
                const addressregex=/^[a-zA-Z\s]+$/;
                if( addressregex.test(address)){
                     
                     
                 
                document.getElementsByName('address')[0].style.border='';
                }

            }else if(document.getElementsByName('address')[0].value===''){
                document.getElementById('labaddress').style.color='red';
                document.getElementById('labaddress').innerHTML='address is empty';
                document.getElementsByName('address')[0].style.border='1px solid red';
            }else{
                document.getElementById('labaddress').style.color='black';
                document.getElementById('labaddress').innerHTML='Address   ';
               
            }
            if(eachinput.mame==='order-details'&& document.getElementsByName('order-details')[0].value!==''){
                const orderdetails=eachinput.value;
                const orderdetailsregex=/^[a-zA-Z0-9]+$/;
                if(orderdetailsregex.test(orderdetails)){
                    console.log('order details are valid');
                  
                }
            }else if(document.getElementsByName('order-details')[0].value===''){
                document.getElementById('laborder-details').style.color='red';
                document.getElementById('laborder-details').innerHTML='order details are empty';
                document.getElementsByName('order-details')[0].style.border='1px solid red';
            }else{
                document.getElementById('laborder-details').style.color='black';
                document.getElementById('laborder-details').innerHTML='Order details';
                document.getElementsByName('order-details')[0].style.border='  ';
            }

            console.log(formData)
            props.PlaceOrder(formData)




            });   
    }
    const navigate=useNavigate();
   const compliteDelivari=()=>{
             
            const {email,password,name,number,zip,city}=formData;
            if(email!==''&&password!==''&&name!==''&&number!==''){

               navigate('/compliveOrder');
                console.log(email,password,zip,name);
            }
       }
 
 
    return (
        <div style={{marginTop:'110px'}}>
        <Container>
        <div className="placeorder-container">
    <h2>Place Your Order</h2>
    
    <form className="order-form"   
         
        

     >
        <div  className="form-group">
            <label id='labname' htmlFor="name">Name</label>
            <input  onBlur={(e)=>getFormdata(e)} type="text" id="name" name="name" required />
        </div>
        <div  className="form-group">
            <label id='labemail' htmlFor="email">Email</label>
            <input  onBlur={(e)=>getFormdata(e)}       type="email" id="email" name="email" required />
        </div>
        <div  className="form-group">
            <label id='labphone' htmlFor="phone">Phone Number</label>
            <input  onBlur={(e)=>getFormdata(e)}       type="tel" id="phone" name="phone" required />
        </div>
        <div  className="form-group">
            <label id='labaddress' htmlFor="address">Address</label>
            <input        type="text" id="address" name="address" required />
        </div>
        <div  className="form-group">
            <label id='labcity' htmlFor="city">City</label>
            <input onBlur={(e)=>getFormdata(e)}        type="text" id="city" name="city" required />
        </div>
        <div  className="form-group">
            <label id='labstate' htmlFor="state">State</label>
            <input onBlur={(e)=>getFormdata(e)}       type="text" id="state" name="state" required />
        </div>
        <div  className="form-group">
            <label id='labzip' htmlFor="zip">Zip Code</label>
            <input onBlur={(e)=>getFormdata(e)}        type="text" id="zip" name="zip" required />
        </div>
        <div  className="form-group">
            <label id='laborder-details' htmlFor="order-details">Order Details</label>
            <textarea    type="texatare"   id="order-details" name="order-details" required>

            </textarea>
        </div>
        <button   onClick={(e)=>{handlesubmit(e); compliteDelivari();}}   type="submit">Submit Order</button>
    </form>
    </div>
    </Container>


     
    </div>
    );
   
 
 
        

};
const mapstateToProps = state => {
    return {
        wishlist: state.wishlist,
        orderPlaceInfo:state.orderPlaceInfo
    }
}

const mapDispatchToProps = {
   PlaceOrder:PlaceOrder
}


export default connect(mapstateToProps,mapDispatchToProps) (Placeorder);