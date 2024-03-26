/* eslint-disable spaced-comment */
/* eslint-disable max-len */
/* eslint-disable padded-blocks */
/* eslint-disable indent */
/* eslint-disable no-trailing-spaces */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line func-call-spacing
const stripe = require("stripe")
// eslint-disable-next-line max-len, no-unexpected-multiline
("sk_test_51OyUoIJeoJTrziWFyYPVPmHXVdhWrJUi2407rS1aVsmjGueCdCBjS1aQP94wT5yJ7cIbiZJZan15dgJnz2kONeF00MvJ7Y1fU",
);

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
                clientSecret: paymentIntent.client_secret,
            });
};

// -Listen command
        exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/e-commerce-website-aca89/us-central1/api