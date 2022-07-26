const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//importroutes
const packageRoutes = require('./routes/packages');
const driverRoutes = require('./routes/Drivers');
const vehicleRoutes = require('./routes/Vehicles');


//middleware
app.use(bodyParser.json());
app.use(cors());
app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
  );

app.use(packageRoutes);
app.use(driverRoutes);
app.use(vehicleRoutes);

const PORT = 8500;
const DB_URL = 'mongodb+srv://hacksick7:sampath1997@tms.g0vz0.mongodb.net/mydatabase?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("DB Connected!");
})
.catch((err)=> console.log('DB connection errror',err));

app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`);
});
