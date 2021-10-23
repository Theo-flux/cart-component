import React,{useContext} from 'react'
import './DesktopImage.css'
import {productArr, thumbnailArr} from '../Data.js'
import {Context} from '../Context'

export default function DesktopImage(){
	const {imageIndex, handleImage} = useContext(Context)

	

	return(
		<div tabIndex={1} className="desktop-image">
			<div className="product">
				<img src={productArr[imageIndex]} alt="product" />
			</div>

			<div className="product-thumbnail">
				{thumbnailArr.map((thumb, index) => (
					<div key={index} className="thumbnail-box">
					<img  
						className="thumbnail" 
						src={thumb} 
						alt="thumbs"
						onClick={() => handleImage(index)}
					/>
					</div>
					
				))
				}
			</div>
		</div>
	)
}