import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift } from '@fortawesome/free-solid-svg-icons';
import './SingleCourse.css';

const SingleCourse = (props) => {
    console.log(props);
    const {name, instructor, price, img} = props.course;

    return (
        <div className="container">
        <div className="course-image">
            <img src={img} alt=""/>
        </div>
        
        <div className="course-info">
    <h1>{name}</h1>
    <h4> <small>by : </small> {instructor}</h4>
    <h2>${price}</h2>
    <button className="btn btn-success"onClick={() => props.handleEnrollButton(props.course)}> <FontAwesomeIcon icon={faGift}/> Enroll Now!</button>
        </div>
        </div>

    );
};

export default SingleCourse;