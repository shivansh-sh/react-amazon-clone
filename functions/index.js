const functions = require("firebase-functions");
const express = require("express");
const cors =require("cors");
const stripe = require("stripe")('sk_test_51MlbQNSHjyM4n5Q418JQFHJQ4K5A4BdIM6kBz5eWl1en75UXAs3ykzI9PnU8abh1WNhVSdQXUv26Y5qR18h28rLP004cSxk894')
// above is the secret key 

// api


// app config
const app =express();

// middlewares
app.use(cors({origin: true}));
app.use(express.json());


// api routes

app.get('/', ( request, response) => response.status(200).send('pols agyi oe .. yeh toh baba hi aa'))
app.post('/payments/create', async (request, response) => {
const total = request.query.total;

console.log('payment request recieved BOOM !! for this amount>>> ', total)

const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
})

//  ok -created 
response.status(201).send({
    clientSecret: paymentIntent.client_secret,
})

})



// listen
exports.api = functions.https.onRequest(app)


// example endpoint - api endpoint 
// http function initialized (http://127.0.0.1:5001/clone-95c23/us-central1/api).