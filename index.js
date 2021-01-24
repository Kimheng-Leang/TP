
const express = require('express');
const app = express();
const PostRoutes = require('./routes/admin');
const bodyParser = require('body-parser');
const path = require('path');

const mongoose = require('mongoose');
const { connect } = require('./routes/admin');
const { connected } = require('process');

const port = 3000;



app.set('view engine', 'ejs');
app.set('views', 'views');

//route
//after we create folder routes, we can mode this route to folder routes
/*app.get('/', (req, res) => {
  res.render('home');
});
*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(PostRoutes);
app.use(express.static(path.join(__dirname,'Public')));

//mongoose.connect('mongodb+srv://user1:Kimheng12345@cluster0.ryg4g.mongodb.net/Post?retryWrites=true&w=majority')
mongoose.connect('mongodb://localhost:27017/Post?readPreference=primary&appname=MongoDB%20Compass&ssl=false')
.then(result=>{
  console.log('DB is connected');
  app.listen(port);
}).catch(err=>{
  console.log(err);
})

