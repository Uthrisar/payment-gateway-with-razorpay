const express = require('express');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(express.json());
app.use(cors());

app.post('/', (req,res)=>{
    const data = req.body;
    data.message = "hello world";
    console.log(data);
    res.send(data);
})

app.listen(port, ()=>{console.log(`server started on port ${port}`)});