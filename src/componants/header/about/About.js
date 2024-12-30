import React from 'react';
import './About.css';
import { Container } from 'react-bootstrap';
import BestChip from '../../best-chip/BestChip';
import Map from '../../map/Map';
import Footer from '../../footer/Footer';
import Clientrevue from '../../clientrevue/Clientrevue';
 
 
const About = () => {
     
       
      
      

    return (
        <div>
            <Container style={{marginTop:"110px"}}>
            <div className="sectionTaitel2 text-center  ">
        <h1>About us</h1>
        <div className="underlinne">
        <div className="first-div">
          {/* Content for the first div */}
        </div>
        <div>
        <small className="star-icons">
          <span>⭐</span><span>⭐</span><span>⭐</span>
        </small>
        </div>
        <div className="second-div">
          {/* Content for the second div */}
        </div>
      </div>

        </div>
             <div className="about-container  ">
            <div className="about-text">
            <h1>Any time restaurant</h1>
            <p>Welcome to Any Time Restaurant! We are dedicated to providing you with the best dining experience.</p>
            <p>Our restaurant offers a variety of delicious dishes made from the freshest ingredients. We pride ourselves on our excellent customer service and cozy atmosphere.</p>
            </div>
            <div className="map-container">
                <Map></Map>
           
            </div>
        </div>
        </Container>


        <Container className='mb-5'>
           <BestChip></BestChip>
        </Container >

        <Container className='mb-5'>
            <Clientrevue></Clientrevue>
        </Container>
    
            
        

        </div>
    );
};

export default About;