import React,{useState, useEffect} from 'react'
import {productArr, thumbnailArr} from './Data.js'

const Context = React.createContext()

function ContextProvider(props) {

	let [quantity, setQuantity] = useState(0)
	const [price,setPrice] = useState(125)
	const [imageIndex, setImageIndex] = useState(0)
	let [slideIndex, setSlideIndex] = useState(0)
	const [cartItem, setCartItem] = useState({
		image: thumbnailArr[0],
		qty: 0,
		amt: 0,
	})



	function nextSlide(){
		if(slideIndex < productArr.length-1){
			slideIndex += 1
		}else{
			slideIndex = 0
		}
		setSlideIndex(slideIndex)
	}

	function prevSlide(){
		slideIndex -= 1
		if(slideIndex < 0){
			slideIndex = productArr.length-1
		}
		setSlideIndex(slideIndex)
	}
	
	function increaseQty(){
		console.log(quantity+=1)
		setQuantity(quantity)
	}

	function decreaseQty(){
		if(quantity <= 0){
			quantity=0
		}else{
			quantity-=1
		}

		setQuantity(quantity)
	}


	function handleImage(index) {
		setImageIndex(index)
	}

	function deleteFromCart(){
		setCartItem({qty: 0, amt: 0})
	}
	
	function addToCart(quantity, price){
		if(quantity){
			setCartItem({qty: quantity, amt: price})
		}
		return quantity
	}



	return(
		<Context.Provider value={{
			quantity, 
			increaseQty, 
			decreaseQty,
			slideIndex, 
			nextSlide,
			prevSlide,
			imageIndex, 
			handleImage,
			addToCart,
			price,
			deleteFromCart,
			cartItem
		}}>
			{props.children}
		</Context.Provider>
	)
}

export {Context, ContextProvider}