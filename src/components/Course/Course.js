import React from 'react';
import { useState } from 'react';
import './Course.css';
import SingleCourse from '../SingleCourse/SingleCourse';
import Cart from '../Cart/Cart';


const Course = () => {
    const courseData = [{"name":"Search Engine Optimization","instructor":"Tara Child","price":75,"img":"https://i.ibb.co/3dLjCtd/12.jpg"},
    {"name":"Marketing Strategy","instructor":"Jandy Roset","price":40,"img":"https://i.ibb.co/HY2V6Fx/13.jpg"},
    {"name":"Human Resources","instructor":"Dyana Juster","price":55,"img":"https://i.ibb.co/chT0nWp/5.jpg"},
    {"name":"Designing","instructor":"Cly Pittet","price":60,"img":"https://i.ibb.co/XLyV4QG/14.jpg"},
    {"name":"Architecture","instructor":"Korrie Phillcox","price":99,"img":"https://i.ibb.co/2YRbPRJ/15.jpg"},
    {"name":"Content Writing","instructor":"Alec Francescotti","price":65,"img":"https://i.ibb.co/VBJ4nDf/3.jpg"},
    {"name":"Web Development","instructor":"Rubia Itzkovici","price":80,"img":"https://i.ibb.co/LRhn1J0/8.png"},
    {"name":"Database Management","instructor":"Helaina Dymock","price":45,"img":"https://i.ibb.co/ByG5X1R/7.jpg"},
    {"name":"Web Design","instructor":"Joane Lovie","price":50,"img":"https://i.ibb.co/PY8xRVw/6.jpg"},
    {"name":"Engineering","instructor":"Laurena Gemeau","price":96,"img":"https://i.ibb.co/Dw0XSWb/4.jpg"},
    {"name":"Personal Development","instructor":"Pansy Kwietak","price":75,"img":"https://i.ibb.co/X7pm5cH/9.jpg"},
    {"name":"Graphic Design","instructor":"Dill Acedo","price":50,"img":"https://i.ibb.co/Ln6WSB5/10.jpg"},
    {"name":"Digital Marketing","instructor":"Chevy Kenewell","price":80,"img":"https://i.ibb.co/dPvLFwM/11.png"},
    {"name":"Research and Development","instructor":"Trumaine Prator","price":56,"img":"https://i.ibb.co/M9H40pV/2.jpg"},
    {"name":"Accounting","instructor":"Antonella Lumber","price":85,"img":"https://i.ibb.co/PQ9Ms8H/1.jpg"}];


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