import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/shopping-cart/cartSlice";

export default function SingleBurgerPrice({ items }) {
	const dispatch = useDispatch();
	const addItem = () => {
		if (items > 0) {
			dispatch(
				cartActions.addItem({
					id: "222",
					title: "single burger",
					price: items,
					image01: "https://tse1.mm.bing.net/th?id=OIP.SLvCm-_vWomwLYiWNl6nHAHaHV&pid=Api&rs=1&c=1&qlt=95&w=100&h=99",
				})
			);

		} else {
			alert("Please choose the ingredients!!!")
		}
	}

	return (
		<div>
			<div style={{ display: "flex" }}>
				<h6 style={{ marginLeft: "15px", marginTop: "8px", color: "red" }}>Price:${items}</h6>
				<button  style={{ backgroundColor: "#ff4500", marginLeft: "45px", width:"100px",padding:"5px", color:"white",border: 'none', borderRadius: "5px", marginBottom: "10px" }} onClick={addItem}>Add to cart</button>
			</div>
		</div>
	)

}

