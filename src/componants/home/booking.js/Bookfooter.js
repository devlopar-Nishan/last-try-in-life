import React from 'react';
import Bookingtable from '../../booking/Bookingtable';
import Footer from '../../footer/Footer';

const Bookfooter = () => {
    return (
        <div>
            <Bookingtable></Bookingtable>
            <div className='mt-5'></div>
            <Footer></Footer>
        </div>
    );
};

export default Bookfooter;