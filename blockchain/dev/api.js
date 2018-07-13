const express = require('express'); //api的npm js模組// npm i express --save
const app = express();

const bodyParser = require('body-parser'); //能讀postman的body資料
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/blockchain', function (req, res) {
  
});
 
app.post('/transaction', function (req, res) {
	console.log(req.body);
    //res.send('It works!!');
    res.send('Transaction amount is ${req.body.amount} bitcoins.');
});

app.get('/mine', function (req, res) {
  
});





app.listen(3000, function(){
    console.log('Listening on port 3000...');
});//在localhost:3000這個port上跑並執行function

//安裝nodemon-->來自動restart sever when i change the code