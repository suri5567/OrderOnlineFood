import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import { cartActions } from "../store/shopping-cart/cartSlice";

import "../styles/checkout.css";

const Checkout = () => {
	const navigate = useNavigate();
	const [enterName, setEnterName] = useState("");
	const [enterEmail, setEnterEmail] = useState("");
	const [enterNumber, setEnterNumber] = useState("");
	const [enterCountry, setEnterCountry] = useState("");
	const [enterCity, setEnterCity] = useState("");
	const [postalCode, setPostalCode] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [cvv, setCvv] = useState("");
	const dispatch = useDispatch();


	const shippingInfo = [];
	const deliveryPrice = 50;
	const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
	const totalAmount = cartTotalAmount != 0 ? cartTotalAmount + Number(deliveryPrice) : 0;
	
	function submitHandler(e){
		e.preventDefault();
		const userShippingAddress = {
			name: enterName,
			email: enterEmail,
			phone: enterNumber,
			country: enterCountry,
			city: enterCity,
			postalCode: postalCode,
			cardNumber: cardNumber,
			cvv: cvv
		};

		shippingInfo.push(userShippingAddress);
		dispatch(
			cartActions.deleteAllItems({
				cartItems: "",
				totalQuantity: "",
				totalQuantity: "",
			})
		);
		window.scrollBy(0,-850);
		navigate('/wishPage');
	};

	return (
		<Helmet title="Checkout">
			<CommonSection title="Checkout" />
			<section>
				<Container>
					<Row>
						<Col lg="8" md="6">
							<h6 className="mb-4">Shipping Address & Payment Details</h6>
							<form className="checkout__form" onSubmit={submitHandler}>
								<div className="form__group">
									<input
										type="text"
										placeholder="Enter your name"
										required
										onChange={(e) => setEnterName(e.target.value)}
									/>
								</div>

								<div className="form__group">
									<input
										type="email"
										placeholder="Enter your email"
										required
										onChange={(e) => setEnterEmail(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="number"
										placeholder="Phone number"
										required
										onChange={(e) => setEnterNumber(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="text"
										placeholder="Country"
										required
										onChange={(e) => setEnterCountry(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="text"
										placeholder="City"
										required
										onChange={(e) => setEnterCity(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="number"
										placeholder="Postal code"
										required
										onChange={(e) => setPostalCode(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="number"
										placeholder="Card-Number"
										required
										onChange={(e) => setCardNumber(e.target.value)}
									/>
								</div>
								<div className="form__group">
									<input
										type="number"
										placeholder="CVV"
										required
										onChange={(e) => setCvv(e.target.value)}
									/>
								</div>
								<button type="submit" className="addTOCart__btn" >
									Pay Now
								</button>
							</form>
						</Col>

						<Col lg="4" md="6">
							<div className="checkout__bill">
								<h6 className="d-flex align-items-center justify-content-between mb-3">
									Subtotal: <span>${cartTotalAmount}</span>
								</h6>
								<h6 className="d-flex align-items-center justify-content-between mb-3">
									Delivery Charge: <span>${deliveryPrice}</span>
								</h6>
								<div className="checkout__total">
									<h5 className="d-flex align-items-center justify-content-between">
										Total: <span>${totalAmount}</span>
									</h5>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Helmet>
	);
};

export default Checkout;
