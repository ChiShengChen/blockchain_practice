const Blockchain = require('./blockchain'); //call 同資料夾下面的blockchain.js中的fn

const bitcoin = new Blockchain();

/*

//test1
//交易紀錄test
//建立沒有交易的第0區塊
bitcoin.createNewBlock(6666, 'meow000000jk', 'fdst54324153');//createNewBlock = function(nonce, previousBlockHash, hash)  


//第1坨交易
bitcoin.createNewTransaction(100, 'MIKE0FD234654F4D', 'VICTOR2DF450DS2F16');
//建立存取第1坨交易的第1區塊
bitcoin.createNewBlock(1836, 'FF14566DSF4DSF', 'f4st5GH4A53');

//第2坨交易(包含3筆)
bitcoin.createNewTransaction(10, 'MHGJ23G654F4D', 'VICTOR2DF450DS2F16');
bitcoin.createNewTransaction(50, 'BLIKE0FD23465496K', 'VICTOR2DF450DS2F16');
bitcoin.createNewTransaction(200, 'AKAKE0FD234F57', 'VICTOR2DF450DS2F16');
//建立存取第2坨交易的第2區塊
bitcoin.createNewBlock(9865, 'JJ145R9DSF4DQ1', '095EE54FG6AM');


console.log(bitcoin); //可以把東西在cmd視窗裡印出來，debug好用
//console.log(bitcoin.chain[x]); //可以查看第x個區塊中transaction細節ex:一區塊中包含多筆交易
*/


/*
//test2
//test hash method
const previousBlockHash = '0DFGAS0DSF5413DSF450DSFJ';
const currentBlockData = [

    {
    	amount: 10,
    	sender: 'FDG54SAD1XC0TRS',
    	recipient: '2KJHL54E410DSF9'
    },
    {
    	amount: 30,
    	sender: '7G5546AD1XC0TRA',
    	recipient: 'IKJHL54E41088SF9'
    },
    {
    	amount: 95,
    	sender: 'KKG54SADIN5633T',
    	recipient: 'QWKJ8LFEL16DSF'
    }

];

//const nonce = 100;
//console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, nonce));
//bitcoin.hashBlock();


//test3
//test proof of work
//console.log(bitcoin.proofOfWork(previousBlockHash, currentBlockData));//電腦試過需要多少次計算才能完成一組0000開頭hash的次數

console.log(bitcoin.hashBlock(previousBlockHash, currentBlockData, 18361));//把0000開頭那組印出來
*/


//test4
//test genesis block
console.log(bitcoin);
