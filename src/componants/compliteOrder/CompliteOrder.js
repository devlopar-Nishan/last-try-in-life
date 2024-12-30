import React from 'react';
import DeliveryService from '../../images/Delivery-Service.mp4';
import location from '../../images/Jumping-Location.mp4';
import './CompliteOrder.css';
import { Container } from 'react-bootstrap';
 
const CompliteOrder = () => {
    return (
        <div>
            <Container>

            
            <div className="complite-order">
                <h1>Thank you for your order</h1>
                <h5>Your order has been placed successfully</h5>
                <small>Our delivery service will reach you soon</small>
            </div>
            <div className="delivary-div">

            

            
             
            <video autoPlay loop muted className='delivary-vedio' >
                <source src={DeliveryService} type="video/mp4"/>
            </video>
            <video autoPlay loop muted className='location-vedio' >
              <source src={location} type="video/mp4"/>
            </video>
            </div>
            </Container>
        </div>
    );
};

export default CompliteOrder;