 import React from 'react';
 import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import chepimg from '../../images/chef.png';
import './BestChip.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { useEffect } from 'react';
 
 const BestChip = () => {

  useEffect(() => {
    const cards = document.querySelectorAll('.all-divs-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'translateX(0)';
          entry.target.style.overflow='hidden';
           
        }else{
          entry.target.style.transform = 'translateX(200px)';
        }
      });
    }, {
      threshold: 0.1
    });
  
    cards.forEach((card, index) => {
      card.style.transform = 'translateX(200px)';
      
      card.style.transition = `all 0.3s  ${index * 0.2}s`;
      observer.observe(card);
    });
  
    return () => observer.disconnect();
  }, []);










  
    return (
      <div className='best-chip-div'>
          {/* <div className="sectionTaitel text-center margintop">
          <h1>Our best chips</h1>
          <div className="underlinne">
            <div className="first-div">
         
            </div>
            <div>
        <small className="star-icons">
          <span>⭐</span><span>⭐</span><span>⭐</span>
        </small>
            </div>
            <div className="second-div">
         
            </div>
          </div>
          </div> */}

          
        <div className=" main-card-divs">
          <div className="all-divs  all-divs-card">
            <img className='chipimg' src={chepimg} />
            <div className=" ">
              <h4 className=" taitel">div title</h4>
              <p className=" dispreption">
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little  longer.
              </p>
            </div>
            <small className="text-muted all-divs">
            <FaFacebook   />
              <FaTwitter   />
              <FaInstagram   />
            </small>
          </div>
          <div className="all-divs  all-divs-card">
            <img className='chipimg' src={chepimg} />
            <div className=" ">
            <h4 className=" taitel">div title</h4>
            <p className=" dispreption">
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little  longer.
              </p>
            </div>
            <small className="text-muted all-divs">
              <FaFacebook   />
              <FaTwitter   />
              <FaInstagram   />
            </small>
          </div>
          <div className="all-divs  all-divs-card">
            <img className='chipimg' src={chepimg} />
            <div className=" ">
            <h4 className=" taitel">div title</h4>
            <p className=" dispreption">
                This is a wider card with supporting text below as a natural lead-in
                to additional content. This content is a little  longer.
              </p>
            </div>
            <small className="text-muted all-divs">
               
              <FaFacebook   />
              <FaTwitter   />
              <FaInstagram   />
            </small>
          </div>
      </div>
      </div>
        );
 };
 
 export default BestChip;
 
 