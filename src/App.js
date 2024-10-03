import React, { useState } from "react"
import { PaystackButton } from "react-paystack"
import "./App.css"

const App = () => {
  const publicKey = "pk_test_2b01bb51b52a9dd63f41dc166c6f7794ec777609"
  const amount = 10000
  const [email, setEmail] = useState("doniceubaru1@gmail.com")
  const [name, setName] = useState("Donice Ubaru")
  const [phone, setPhone] = useState("08140144620")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: () =>
      alert("Thanks for doing business with us! Come back soon!!"),
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <img 
            style={{width: '15rem'}}
          className="item-image"
          src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
          alt="product"
          />
          <div className="item-details">
            <p>Dancing Shoes</p>
            <p>{amount}</p>
          </div>
        </div>
        <div className="checkout-form">
          <form>
            <label>Name</label>
            <input
              type="text"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label>Email</label>
            <input
              type="text"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Phone</label>
            <input
              type="text"
              id="phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </form>
          <PaystackButton {...componentProps} />
        </div>
      </div>
    </div>
  )
}

export default App