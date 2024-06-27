const router = require('express').Router()
const nodemailer = require('nodemailer');
require('dotenv').config()

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.AUTH_EMAIL,
        pass: process.env.AUTH_PASS
    }
})

transporter.verify((error, success) => {
    if(error){
        console.log(error)
    }else {
        console.log("Transporter is working perfectly.....")
        console.log(success)
    }
})

router.post('/signup', (req, res) => {
    let {email, name, password} = req.body;

    sendNotification(email)
    res.status(201).json({
        message: "Message sent...."
    })
})

const sendNotification = (email) => {
    const mailOptions = {
        to: email,
        from: process.env.AUTH_EMAIL,
        subject: 'Welcome to Our App',
        html: '<p>Thank you for signing up you are welcome to our application</p>'
    }

    transporter.sendMail(mailOptions)
}

module.exports = router