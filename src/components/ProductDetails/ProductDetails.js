import React, {useContext} from 'react'
import './ProductDetails.css'
import {Context} from '../Context'

export default function ProductDetails(){
	const {quantity, price, increaseQty, decreaseQty, addToCart} = useContext(Context)

	return(
		<section className="section-wrapper">
			<p className="company-name">SNEAKER COMPANY</p>
			<h1 className="product-name">Fall Limited Edition Sneaker</h1>
			<p className="product-copy">
				These low-profile sneakers are perfect
				casual wear companion. Featuring a durable
				rubber outer sole, they will withstand everything the weather can offer.
			</p>
			<div className="price-details">
				<div className="current-price">
					<h1>{price.toLocaleString('en-US',{style:"currency", currency:"USD"})}</h1>
					<p className="discount">50%</p>
				</div>
				<p className="prev-price">$250</p>
			</div>

			<div className="product-action">
				<div className="cart-quantity">
					<i className="ri-subtract-line" onClick={() => decreaseQty()}></i>
					<p>{quantity}</p>
					<i className="ri-add-fill" onClick={() => increaseQty()}></i>
				</div>
				<div onClick={() => addToCart(quantity, price)} className="button">
					<i className="ri-shopping-cart-2-line cart-icon"></i>
					<p>Add to cart</p>
				</div>
			</div>
		</section>
	)
}