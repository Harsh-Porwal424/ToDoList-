const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

const port = 3000;
var data = [];

app.get('/', function (req, res) {

  var today = new Date();
  var currentDay = today.getDay();
  var day = "";


  var options = {
    weekday : 'long',
    day : 'numeric',
    month : 'long' 
  };

  day = today.toLocaleDateString('en-US', options);

  res.render('list', { 
    kindOfDay: day,
    newListItem : data 
  });
})

app.post("/", (req, res) => {

  var item = req.body.NewItem;

  data.push(item);

  res.redirect("/");

});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
})