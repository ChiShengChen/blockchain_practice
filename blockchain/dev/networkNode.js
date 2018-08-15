const express = require('express'); //api的npm js模組// npm i express --save
const app = express();

const bodyParser = require('body-parser'); //能讀postman的body資料
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const Blockchain = require('./blockchain');
const bitcoin = new Blockchain();

// uuid用來創造unique亂碼字串(這邊當錢包地址用)
const uuid = require('uuid/v1');
//因為uuid會產生包含'-'的亂碼，所以這邊把-拿掉，把剩下字串接起來
const nodeAddress = uuid().split('-').join('');

//把port變成變數
const port = process.argv[2];


app.get('/blockchain', function (req, res) {
    res.send(bitcoin);  

});//the endpoint
 
app.post('/transaction', function (req, res) {
	//console.log(req.body);
    //res.send('It works!!');
    //res.send(`Transaction amount is ${req.body.amount} bitcoins.`); // 是``不是''喔!!!(`在~鍵上)

    const blockIndex = bitcoin.createNewTransaction(req.body.amount, req.body.sender, req.body.recipient);
    res.json({note: `Transaction will be added in block ${blockIndex}.`});
    
});


//mine a block
app.get('/mine', function (req, res) {

	const lastBlock = bitcoin.getLastBlock();
	const previousBlockHash = lastBlock['hash'];
	const currentBlockData = {

		transactions: bitcoin.pendingTransactions,
		index: lastBlock['index'] + 1

	};

	const nonce = bitcoin.proofOfWork(previousBlockHash, currentBlockData);
	const blockHash = bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce);
    
    // 礦工獎勵
    // 這裡要import一個uuid 套件: npm i uuid --save
	bitcoin.createNewTransaction(6.25, "00", nodeAddress);

    const newBlock = bitcoin.createNewBlock(nonce, previousBlockHash, blockHash);
    res.json({
    	note: "Successfully mined a new block.",
    	block: newBlock
    });

});




// 要去中心化->就是多個api互相執行/溝通
// 所以就是這個api同時在不同port執行->把3000換成變數
app.listen(port, function(){
    console.log(`Listening on port ${port}...`);
});//在localhost:3000這個port上跑並執行function

//安裝nodemon-->來自動restart sever when i change the code