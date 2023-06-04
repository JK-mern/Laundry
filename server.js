const express = require('express');
const cors = require('cors');
const app = express();
const connectDB =require('./config/db')


//  line to enable CORS
app.use(cors({ origin: 'http://localhost:3000' }));


//Connecting to Database
connectDB();


//Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 


app.get('/',(req,res)=>{
    res.send('Hello World!')
});




//Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/shops', require('./routes/api/shops'));
app.use('/api/auth', require('./routes/api/auth'));

//Listening  server on port 4000
const PORT = process.env.PORT || 4000
app.listen(PORT, function () {
    console.log(`Server started on ${PORT}`)
})