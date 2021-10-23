import React,{useContext} from 'react'
import './Imageslider.css'
import {productArr} from '../Data'
import {Context} from '../Context'

export default function Imageslider() {
	const {slideIndex, prevSlide, nextSlide} = useContext(Context)

	return(
		<div>
			<section>
				<img src={productArr[slideIndex]} alt="product" />
				<div className="slider-controls">
					<div>
						<i onClick={() => prevSlide()} className="ri-arrow-left-s-line icon-previous" ></i>
					</div>

					<div>
						<i onClick={() => nextSlide()} className="ri-arrow-right-s-line icon-next"></i>
					</div>
				</div>
			</section>	
		</div>
		
	)
}

