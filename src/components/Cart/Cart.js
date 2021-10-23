import React,{useContext} from 'react'
import './Cart.css'
import {thumbnailArr} from '../Data.js'
import {Context} from '../Context'
export default function Cart() {
	const {cartItem:{image,amt,qty}, quantity, deleteFromCart} = useContext(Context)

	return(
		<div className="cart">
			<h3>cart</h3>
			<div className="cart-content">
				{qty && quantity ? 
					<>
						<div className="cart-content-item">
							<img src={thumbnailArr[0]} alt="product"/>
							<div>
								<p>Fall Limited Edition Sneaker</p>
								<p>{amt.toLocaleString('en-US',{style:'currency', currency:'USD'})} x {qty} <span>{(amt*qty).toLocaleString('en-US',{style:'currency', currency:'USD'})}</span></p>
							</div>
							<i onClick={() => deleteFromCart()} className="ri-delete-bin-6-fill"></i>
						</div> 
						<button>checkout</button>
					</> 
					
					: 
					
					<p className="message">Your cart is empty!</p>
					
				}
			</div>
		</div>
	)
}