
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line func-call-spacing
const stripe = require("stripe") (process.env.STRIPE_KEY);

// -API

// -App config
        const app = express();

// -Middlewares
        app.use(cors({origin: true}));
        app.use(express.json());

// -API routes
// eslint-disable-next-line func-call-spacing
        app.get("/", (request, response) => response.status(200).send
// eslint-disable-next-line no-unexpected-multiline
        ("hello world"));
        app.post("/payment/create"), async (request, response) => {
            const total = request.query.total;
            
            console.log("Payment Request received BOOM!!! for this amount >>>", total);

            const paymentIntent = await stripe.paymentIntents.create({
                amount: total, //subunits of the currency
                currency: "usd",
        });

            // OK - created
            response.status(201).send({
}.

// -Listen command
        exports.api = functions.https.onRequest(app))

// Example endpoint
// http://127.0.0.1:5001/e-commerce-website-aca89/us-central1/api