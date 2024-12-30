
import React from 'react';
import './footer.css';
import { Wishlistadd,addTocart } from '../Redux-componants/action/Actionl';
import { connect } from 'react-redux';
import { FaTrash, FaHeart } from 'react-icons/fa';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';


const Footer = (props) => {
    return (
        <div>
           
        <footer className="footer">
             

            <div className="footer-container">
                <div className="footer-section">
                    <h4>About Us</h4>
                    <p>Learn more about our company and values.</p>
                </div>
                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <p>Email:  nishanpatowary53@gmail.com  </p>
                    <p>Phone: +123 456 7890</p>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                     <p>
                        <FaFacebook /> <FaTwitter /> <FaInstagram />
                     </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2023 Any Time Restaurant. All rights reserved.</p>
            </div>
        </footer>
        </div>
    );
};
const mapstateToProps = state => {
    return {
        cart: state.cart,
    }
}
const mapDispatchToProps={
    addTocart: addTocart,
    Wishlistadd:Wishlistadd
     
       
}
export default  connect(mapstateToProps,mapDispatchToProps)(Footer);