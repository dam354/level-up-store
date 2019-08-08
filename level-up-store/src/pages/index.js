import React, { useState } from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Products from "../components/products"
import SEO from "../components/seo"

const IndexPage = () => {

    const stripe = window.Stripe('pk_test_GNuQfQhGTzhdm2UyYY6F9nEx00WFM4kp2B');
    const [sku, setSku] = useState('sku_FaOm8TKfKHjgb9', )

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
        <Layout>
            <SEO title="Home" />
            <h1>Dan's Store</h1>
            <div>
                <Products />
            </div>
        </Layout>
    )
}
export default IndexPage
