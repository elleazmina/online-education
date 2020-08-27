import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const course = cart[i];
        total = total + course.price;
        
        
    }
    return (
        <div className="cart">
            <h1>Enrollment Details</h1>
            <h3>Course Enrolled: {cart.length} </h3>
            <h2>Price: ${total}</h2>
            <button className="btn btn-primary">Review You Enrollment</button>
        </div>
    );
};

export default Cart;