import React, {useState, useEffect, useRef, useContext} from 'react'
import Cart from "../Cart/Cart"
import './Navbar.css'
import Avatar from '../images/image-avatar.png'
import Logo from '../images/logo.svg'
import menu from '../images/icon-menu.svg'
import close from '../images/icon-close.svg'
import {Context} from '../Context'

export default function Navbar() {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [cartEl, setCartEl] = useState(false)
	const sideBar = useRef(null)
	const {cartItem:{qty}} = useContext(Context)

	function handleToggle(){
		setToggleMenu(!toggleMenu)
	}

	function showCart(){
		setCartEl(!cartEl)
	}

	useEffect(() => {
		if(toggleMenu){
			sideBar.current.style.left = "0px";
			sideBar.current.style.transition = ".2s left ease-in" 
		}else{
			sideBar.current.style.left = "-1200%";
			sideBar.current.style.transition = ".2s left ease-out" 
		}
	},[toggleMenu])


	return(
		<nav>
			<div className="container">
				<div className="left">
					
					<img onClick={()=>handleToggle()} src={toggleMenu ? close:menu} className="menu-icon" alt="sneakers" />
					
					<img src={Logo} className="logo" alt="sneakers" />

					<ul ref= {sideBar} className="links">
						<li>Collection</li>
						<li>Men</li>
						<li>Women</li>
						<li>About</li>
						<li>Contact</li>
					</ul>
				</div>

				{cartEl && <Cart/>}

				<div className="right">
					{ qty ? <p><small>{qty}</small></p> : false}
					<i onClick={()=>showCart()} className="ri-shopping-cart-2-line cart-icon"></i>
					<img onClick={()=>showCart()} src={Avatar} alt="profile Avatar" />
				</div>
			</div>
		</nav>
	)
}