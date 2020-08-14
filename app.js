const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const cors=require('cors');
const passport=require('passport')
const mongoose=require('mongoose')
const config=require('./config/database')

const app=express();
app.use(cors());

//connect db 
mongoose.connect(config.database);
//checck db connection
mongoose.connection.on('connected',()=>{
    console.log('Connected ot database'+config.database)
});

mongoose.connection.on('error', (err) => {
    console.log(' error database' + err)
});
//cor middleware
const port=3000
const users=require('./routes/users');

//set static folder path
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.json());
//passport 
app.use(passport.initialize())
app.use(passport.session())
app.use('/users',users)
//body parser midware 
app.get("/",(req,res)=>{
    res.send('invalid entry');
});

app.listen(port,()=>{
    console.log('Server started on port'+port);
})