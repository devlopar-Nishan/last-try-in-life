import React, { useEffect, useState } from 'react';
 
import './home.css';
import Banner from '../banner/Banner';
import tableImg from '../../images/table.png';
import galleryimg from '../../images/best-chip.jpg';
import bannerimg from '../../images/show1.png'
import bannerimg2 from '../../images/show2.png'
import Container from 'react-bootstrap/Container';
import fooddelivery from '../../images/fooddelivery.png'
import onlineorder from '../../images/onlineorder.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
 
import bannerimg3 from '../../images/show3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
 import  { faUtensils,faHeadset } from '@fortawesome/free-solid-svg-icons';
import { addTocart } from '../Redux-componants/action/Actionl';
import { connect } from 'react-redux';
import Popular from '../popular/Popular';
import BestChip from '../best-chip/BestChip';
import About from '../header/about/About';
import Footer from '../footer/Footer';
import Blog from '../blog/Blog';
import { Link } from 'react-router-dom';
import Bookingtable from '../booking/Bookingtable';
 
 



 
  
const Home = (props) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            entry.target.style.transform = 'translateY(20px)';
            
          } 
        });
      },
      {
        threshold: 0.5,
      }
    );
  
    const popularContainer = document.querySelector('.intersection');
    if (popularContainer) {
      popularContainer.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
      popularContainer.style.transform = 'translateY(0)';
      
      observer.observe(popularContainer);
    }
  
    return () => {
      if (popularContainer) {
        observer.unobserve(popularContainer);
      }
    };
  }, []);

 

  
   
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [bannerimg, bannerimg2, bannerimg3];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setimg(slides[currentSlide]);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setimg(slides[currentSlide]);
  };
  const [imgbig,setimg]=useState(bannerimg)
      
    const changimg=(chngimg)=>{
      setimg(chngimg);

         
 
             
    }
    const bgstyle={
       backgroundImage: `url(${galleryimg})`,
       backgroundSize:'cover',
       backgroundPosition:'center',
       backgroundRepeat:'no-repeat',
       height:'100%',
       width:'100%',
       borderRadius:'10px',
       opacity:'.5',
       
       padding:'10px'
      
      

    }
   
    const mystyle={
      backgroundColor:' rgba(247, 248, 255,.3)',
      
      
      

    }

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              document.querySelector('.bannertex').style.transform = 'translateX(0)';
              document.querySelector('.bannerimg').style.transform = 'translateX(0)';
              document.querySelector('.bannertex').style.transition = 'transform .7s ease-out';
              document.querySelector('.bannerimg').style.transition = 'transform .7s ease-out';
            } else {
              document.querySelector('.bannertex').style.transform = 'translateX(-200%)';
              document.querySelector('.bannerimg').style.transform = 'translateX(200%)';
              document.querySelector('.bannertex').style.transition = 'transform .7s ease-out';
              document.querySelector('.bannerimg').style.transition = 'transform .7s ease-out';
            }
          });
        },
        {
          threshold: 0.5,
        }
      );

      const mainBanner = document.querySelector('.mainbanner');
      if (mainBanner) {
       
        observer.observe(mainBanner);
      }

      return () => {
        if (mainBanner) {
          observer.unobserve(mainBanner);
        }
      };
    }, []);

    return (

      <div className='retundiv'  style={mystyle} >
        <div className=" container cont ">
          <div className="mainbanner">

            
          <div className="bannertex">
                <h2>WELCOME TO OUR RESTRUNT</h2>
                <p className=' '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nam sapiente praesentium, culpa natus quo? Perspiciatis quam assumenda officia ducimus.</p>
                <button><Link style={{textDecoration:'none',color:'black'}} to='/menu'>Order Now</Link></button>
         </div>

         <div className="bannerimg">
                 <div className="mainimg banner-animate">
                 <img className='mainbanner bigbanner' src={imgbig} alt="banner image" />
                 </div>
                <div className="demo-img">
                  <img onClick={()=>changimg(bannerimg)} src={bannerimg} alt="" />
                  <img onClick={()=>changimg(bannerimg2)} src={bannerimg2} alt="" />
                  <img className='smallbannerimg' onClick={()=>changimg(bannerimg3)} src={bannerimg3} alt="" />
                </div>
         </div>


          </div>


        </div>
         

           
        <Container >

        <div className="  intersection">
        <Row>
        <Col  xs={12}  md={6} sm={6} lg={3} xl={3} xxl={3}> 
        <div className="freshfood">
        <FontAwesomeIcon className='icons' icon={faHeadset} />
        <div className="whyustext">
          <h5>24/7 service</h5>
          <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
        </div>
        </div>
        </Col>
          <Col xs={12}  md={6} sm={6} lg={3} xl={3} xxl={3}>

          <div className="masterchefs">
          
          <FontAwesomeIcon className='icons' icon={faUtensils} />

          <div className="whyustext">
          <h5>Fresh food</h5>
          <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
          </div>
          </Col>
          <Col xs={12}  md={6}  sm={6} lg={3} xl={3} xxl={3}>
          <div className="onlineorder">
          <img src={onlineorder} alt="" />
          <div className="whyustext">
            <h5>Online order</h5>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>
          </div>
          </Col>
          <Col xs={12} md={6}  sm={6} lg={3} xl={3} xxl={3}>
          <div className="service">
          <img src={fooddelivery} alt="" />
          <div className="whyustext">
            <h5>Frist delivary</h5>
            <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
          </div>

          </div>
          </Col>
      
        </Row>
        </div>
        </Container>
         <div className="sectionTaitel text-center mt-5">
        <h1>Popular itmes </h1>
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
        <section className='retundiv2'>
        <Container className='popularcontainer'>
        
           
        {
          props.product.slice(0,6).map(res=><Popular className='popular-card' Populardata={res}></Popular>)
        }
         
        </Container>
        </section>


        <About></About>
     
         
        <Bookingtable></Bookingtable>

      
         




        
       
  
          
       
         
        
        
         <Container> 
        <div className="sectionTaitel text-center mt-5">
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
          <br />
          <Blog></Blog>
        </Container>
        
        
      
      

        <footer>
          <Footer></Footer>
        </footer>
      </div>
       
    );
};
const  mapStateToProps=state=>{
    return{

       cart:state.cart,
       searchProduct:state.searchProduct,
       product:state.product
       
    }
}
const mapDispatchToProps={
    addTocart: addTocart
}
export default connect( mapStateToProps,mapDispatchToProps)(Home);


