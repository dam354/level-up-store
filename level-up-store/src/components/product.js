import React, { useState } from "react"

const Product = ({ skus, product }) => {

    const stripe = window.Stripe('pk_test_GNuQfQhGTzhdm2UyYY6F9nEx00WFM4kp2B');
    const [sku, setSku] = useState(skus[0].node.id)

    const placeOrder = () => {
        stripe.redirectToCheckout({
            items: [
                {
                    sku,
                    quantity: 1
                }
            ],
            successUrl: 'https://8000-dbc80105-5721-4e37-ad8d-3790d64b0685.ws-us0.gitpod.io/success',
            cancelUrl: 'https://8000-dbc80105-5721-4e37-ad8d-3790d64b0685.ws-us0.gitpod.io/cancel'
        })
    }

    return (

        <article>
            <img src="https://placekitten.com/150/150" alt="" />
            <h3>{product.name}</h3>
            <select Value={sku} onChange={e => { setSku(e.target.value) }}>
                {skus.map(edge => <option value={edge.node.id} key={edge.node.id}>{edge.node.attributes.name}</option>)}
            </select>
            <button onClick={placeOrder} > Buy Me</button>
        </article>

    )
}
export default Product
