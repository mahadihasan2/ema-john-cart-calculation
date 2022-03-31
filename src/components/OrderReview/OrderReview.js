import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderReview.css'

const OrderReview = (props) => {
    const {product,handleRemoveProduct} = props
    const {name,img,price,shipping,quantity} = props.product
    return (
        <div className='review-item'>
           <div>
               <img src={img} alt="" />
           </div>
           <div className="review-details-container">
               <div className="review-details">
                    <p className='review-name' title={name}>
                         {name.length>20? name.slice(0,20)+ '...': name}
                        
                    </p>
                    <p><small className='orange'>Price: {price}</small></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p>Quantity: {quantity}</p>
               </div>
               <div className='review-button'>
                   <button className='delete-button' onClick={ 
                       ()=>handleRemoveProduct(product)}>
                       <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                   </button>
               </div>
           </div>
        </div>
    );
};

export default OrderReview;