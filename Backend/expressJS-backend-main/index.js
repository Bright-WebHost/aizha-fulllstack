const express =require('express');
const app=express();
const cors = require('cors');
const mongodb=require('./db');
// port 
app.use(express.json());
const port =7000;

app.use(cors()); 

app.use('/api',require('./router/mainRouter'));








mongodb()
// server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});