const stripe = require('stripe')('sk_test_51OyEmU05FyIWAeGEjk6f6i0UIIFic94bnxDL3P25AyE1EepoADdv1LJVxcC5HDsMeMTl0A4pla0wp7EVgw8rG2GX00Dind3OdX');

const cors = require('cors');
const express = require('express');

const app = require('express')();
const http = require("http").Server(app);
        
const UserModel = require("./models/User")
const FormModel = require("./models/Form")
        
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');

const YOUR_DOMAIN = 'http://localhost:3000';

        
mongoose.connect("mongodb+srv://malikbelfdhila:malik123@cluster0.n7bmbio.mongodb.net/?retryWrites=true&w=majority");

app.post('/create-checkout-session', async (req, res) => {
    console.log('hej0')
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: 'price_1OzSWa05FyIWAeGEDUUDuuJv',
          quantity: 3,
        },
      ],
      mode: 'payment',
      return_url: `${YOUR_DOMAIN}/return?session_id={CHECKOUT_SESSION_ID}`,
    });
    console.log('hej')
    res.send({clientSecret: session.client_secret});
    console.log('hej3')

});

app.get('/session-status', async (req, res) => {
    const session = await stripe.checkout.sessions.retrieve(req.query.session_id);
    console.log(session.status)
    res.send({
      status: session.status,
      customer_email: session.customer_details.email
    });
    console.log(session.status)
});

app.post("/login", (req, res) => {
    const {username, password, role} = req.body;
    UserModel.findOne({username: username})
    .then(user => {
        if(user){
            if(user.password === password && user.role === role){
                res.json("Success")
            } else{
                res.json("incorrect")
            }
        } else{
            res.json("No record existed")
        }
    })
})

// Backend route to fetch forms from MongoDB
app.get("/forms", (req, res) => {
    console.log('hej')
    FormModel.find({})
        .then(forms => {
            res.json(forms);
            console.log(forms)
        })
        .catch(err => {
            console.error("Error fetching forms:", err);
            res.status(500).json({ error: "Internal server error" });
        });
});


app.post("/register", (req, res) => {
    console.log(req.body)
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post("/form", (req, res) => {
    console.log(req.body)
    FormModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
})