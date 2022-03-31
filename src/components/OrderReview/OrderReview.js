import React from 'react';

const OrderReview = (props) => {
    const {name,price,shipping,quantity} = props.product
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default OrderReview;