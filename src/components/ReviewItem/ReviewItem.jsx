import React from 'react';
import './ReviewItem.css'

const ReviewItem = ({ product,handleRemoveFromCart }) => {
	const {id, name ,img, quantity, price} = product
	return (
		<div className='review-item'>
			<img src={img} alt="" />
			<div className='review-details'>
				<p className='product-tittle'>{ name }</p>
				<p>Price: <span className='text-orange'>${ price }</span></p>
				<p>Order Quantity: <span className='text-orange'>{quantity}</span></p>
			</div>
			<button onClick={() => handleRemoveFromCart(id)} className='btn-deltete'>Delete</button>
		</div>
	);
};

export default ReviewItem;