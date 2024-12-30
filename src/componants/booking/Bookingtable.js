import React from 'react';
import tableImg from '../../images/table.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import   { useState,useEffect } from 'react';
import './booking.css';
import Footer from '../footer/Footer';


const Bookingtable = () => {




    useEffect(() => {
      const itme1=document.querySelector('.book-table-img');
      const itme2=document.querySelector('.book-table-form');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.3) {
             
            itme1.classList.add('show');
            itme2.classList.add('show');
            itme1.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
            itme2.style.transition = 'transform 0.6s ease-out, opacity 0.6s ease-out';
             
          }else{
            itme1.classList.remove('show');
            itme2.classList.remove('show');
          }
        });
      }, {
        threshold: 0.3
      });
  
      const tableSection = document.querySelector('.table-section');

      if (tableSection) {
        observer.observe(tableSection);
      }
  
      return () => {
        if (!tableSection) {
          observer.unobserve(tableSection);
        }
      };
    }, []);
  
    
    

  
  










    const [formData, setFormData] = useState({
        name: '',
        email: ''
      });
      
      const [errors, setErrors] = useState({});
      
      const validateForm = () => {
        let tempErrors = {};
        if (!formData.name.trim()) {
          tempErrors.name = 'Name is required';
        } else if (formData.name.length < 3) {
          tempErrors.name = 'Name must be at least 3 characters';
        }
    
        if (!formData.email) {
          tempErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          tempErrors.email = 'Email is invalid';
        }
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
      };
    
      const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [id]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
          // Process form data here
          console.log('Form submitted:', formData);
        }
      };
    


    return (
        <div style={{marginTop:'100px'}} className='booking-table'>
            <div className="sectionTaitel text-center">
            <h1>Book a Table</h1>
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
             
        <Container className= 'mt-5 '>

        <div className="table-section">

          
          <Row  className='tabil-div '>
        
            <Col    xs={12} md={6} xl={6} sm={12} xxl={6} lg={6}>
              <div    className=" book-table-img table-img image-container d-flex justify-content-center align-items-center">
                <img src={tableImg} alt="Gallery" className=" " />
              </div>
            </Col>
          
            <Col   xs={12} md={6} xl={6} sm={12} xxl={6} lg={6} className='  '>
              <div className=" book-table-form form-container">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input  onChange={handleChange} type="text" className="form-control" id="name" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input onChange={handleChange} type="email" className="form-control" id="email" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="phone" required />
                  </div>
                  <div className="mb-4 d-flex gap-3"> 
                    <div className='w-50'>
                    <label htmlFor="date" className="form-label">Date</label><br />
                    <input type="date" className="form-control" id="date" required />
                    </div>
                  {/* </div>
                  <div className="mb-3"> */}
                    <div className='w-50'>
                    <label htmlFor="time" className="form-label">Time</label><br />
                    <input type="time" className="form-control  " id="time" required />
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="guests" className="form-label">Number of Guests</label>
                    <input type="number" className="form-control" id="guests" required />
                  </div>
                  <button type="submit" className=" mt-3 w-100 btn btn-primary">Book Now</button>
                  {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </form>
              </div>
            </Col>
             
          </Row>

        </div>

        </Container>
          
        
         
        </div>
    );
};

export default Bookingtable;