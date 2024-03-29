const mongoose = require("mongoose")

const FormSchema = new mongoose.Schema({
    name: String,
    organization: String,
    city: String,
    klass: String,
    phoneNumber: String,
    email: String,
})

const FormModel = mongoose.model("forms", FormSchema)
module.exports = FormModel