import React from 'react';
import { useState } from 'react';
import './Course.css';
import SingleCourse from '../SingleCourse/SingleCourse';
import Cart from '../Cart/Cart';
import courseData from '../../fakeData/courseData';


const Course = () => {
    const [cart, setCart] =useState([]);

    const handleEnrollButton = (course) => {
        console.log('Done', course);
        const newCart = [...cart, course];
        setCart(newCart);
    }
    return (
        <div className="container">
            <div className="course-container">
                {
                    courseData.map(eachCourse => <SingleCourse
                               key={eachCourse.id}
                               course={eachCourse}
                               handleEnrollButton={handleEnrollButton}
                               ></SingleCourse> )
                 }
            </div>
        <div className="cart-container">
                 <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Course;