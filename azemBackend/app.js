const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const morgan = require("morgan");


require("dotenv").config();

const app = express();

app.use(cors());
app.options('*', cors());

app.use(morgan('dev'));
app.use(express.json());

const db = process.env.DB;
const port = process.env.PORT || 3030;


mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB'ye bağlantı başarılı"))
.catch((err) => console.log(`MongoDB bağlantı başarısız. Hata: ${err}`));


const contextRouter = require("./routes/Contexts"); 
app.use('/api', contextRouter); 

const adminRouter = require('./routes/Admin');
app.use('/api', adminRouter); 

const projectRouter = require('./routes/Projects');
app.use('/api', projectRouter); 

const sectionRouter = require('./routes/Section');
app.use('/api', sectionRouter); 

const bannerRouter = require('./routes/Banner');
app.use('/api', bannerRouter); 



app.get("/", (req, res) => {
  res.send("Node.js bağlantı başarılı");
});

app.listen(port, () =>
  console.log(`Node.js bağlantı başarılı ${port} portunda ayağa kalktı.`)
);
