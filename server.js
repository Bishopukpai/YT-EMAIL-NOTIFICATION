const express = require('express');
const app = express();
const signupRoute = require('./routes/signup')
app.use(express.json())

const port = 9090;

app.use('/user', signupRoute)
app.listen(port, ()=> {
    console.log(`Server is running on port ${port}`)
})