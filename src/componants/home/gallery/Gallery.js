import React from 'react';
import { Container } from 'react-bootstrap';
import Blog from '../../blog/Blog';
import './Gallery.css';
import image1 from '../../../images/001.jpeg';
import image2 from '../../../images/002.jpeg';
import image3 from '../../../images/003.jpeg';
import image4 from '../../../images/004.jpeg';
import image5 from '../../../images/005.jpeg';
import image6 from '../../../images/006.jpeg';
import image7 from '../../../images/007.jpeg';
import image8 from '../../../images/008.jpeg';
import Footer from '../../footer/Footer';




const Gallery = () => {
    return (
        <div>
          <div  style={{marginTop:"140px",marginBottom:'20px' }} className="sectionTaitel text-center">
            <h1>Our Gallery</h1>
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
            <div  >
              <Container> 
                <Blog></Blog>
                </Container> 
              
            
          
              
                    <div>
                         
                          <Container>
                            <div className="gallery">
                              <div className="gallery-item-1"><img src={image1} alt="Gallery Image 1" /></div>
                              <div className="gallery-item-2"><img src={image2} alt="Gallery Image 2" /></div>
                              <div className="gallery-item-3"><img src={image3} alt="Gallery Image 3" /></div>
                              <div className="gallery-item-4"><img src={image4} alt="Gallery Image 4" /></div>
                              <div className="gallery-item-5 img-5"><img src={image5} alt="Gallery Image 5" /></div>
                               <div className="gallery-item-7 img-7"><img src={image7} alt="Gallery Image 5" />
                               </div>
                              <div className="gallery-item-8"><img src={image5} alt="Gallery Image 5" /></div>
                             </div>
                          </Container>
                        </div>
                    </div>
              
                  <Footer></Footer>
            
          
            
           
            </div>
    
    );
};

export default Gallery;