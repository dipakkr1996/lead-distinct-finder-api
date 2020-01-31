const express = require('express');
const contact = require('./api/contact');

const app = express();
const PORT = process.env.PORT || 5000;

//Middleware 
app.use(express.json());

app.use('/', contact);

app.listen(PORT, (req, res)=>{
    console.log(`Server Started at ${PORT}`);
});