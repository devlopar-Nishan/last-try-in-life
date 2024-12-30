 import React from 'react';
import { Container, Carousel } from 'react-bootstrap';
import './clientrevue.css';

const Clientrevue = () => {
    const reviews = [
        {
            id: 1,
            name: "John Doe",
            review: "Amazing food and great service! Will definitely come back. Highly recommended",
            rating: 5,
            image: "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {
            id: 2,
            name: "Jane Smith",
            review: "Excellent ambiance and tasty food.I will recommend this restaurant to my friends.",
            rating: 5,
            image: "https://randomuser.me/api/portraits/women/1.jpg"
        },
        {
            id: 3,
            name: "Mike Johnson",
            review: "Excellent ambiance and tasty food.I will recommend this restaurant to my friends.",
            rating: 4,
            image: "https://randomuser.me/api/portraits/men/2.jpg"
        }
    ];

    return (
        <div style={{marginTop:"110px",}}>
            <Container>
            <div className="sectionTaitel text-center  ">
        <h1>Client reviews </h1>
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
                <Carousel>
                    {reviews.map((review) => (
                        <Carousel.Item key={review.id}>
                            <div className="review-card text-center p-4">
                                <div className='d-flex justify-content-center gap-5'> 
                                <div className='w-40  shadow-lg p-3 mb-5 bg-body rounded'> 
                                        <img 
                                            src={review.image} 
                                            alt={review.name}
                                            className="rounded-circle mb-3"
                                            style={{width: "100px", height: "100px"}}
                                        />
                                        <h4>{review.name}</h4>
                                        
                                        <p className="">{review.review}</p>
                                </div>
                                <div className=" w-40 shadow-lg p-3 mb-5 bg-body rounded  secondslid">
                                <img 
                                            src={review.image} 
                                            alt={review.name}
                                            className="rounded-circle mb-3"
                                            style={{width: "100px", height: "100px"}}
                                        />
                                        <h4>{review.name}</h4>
                                        <p className="text ">{review.review}</p>
                                </div>
                                </div>

                                <div className="rating">
                                    {[...Array(review.rating)].map((_, index) => (
                                        <span key={index} className="text-warning">★</span>
                                    ))}
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </div>
    );
};

export default Clientrevue;