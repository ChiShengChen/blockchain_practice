const sha256 = require('sha256'); //使用npm中sha256套件 //灌套件: npm i sha256 --save

//開個接口對package.json
const currentNodeUrl = process.argv[3];

// uuid用來創造unique亂碼字串(這邊當交易id用)
const uuid = require('uuid/v1');

//建立blockchain物件
function Blockchain() {
	this.chain = []; //交易區塊鍊，存取驗證成功的交易資料
	this.pendingTransactions = []; //存取還沒驗證進練交易的資料

    //建立api network
    this.currentNodeUrl = currentNodeUrl;
    this.networkNodes = [];

	this.createNewBlock(100, '0', '0'); //建立Genesis Block創世區塊(nonce, previousBlockHash, hash)均可自訂
}

//建立中規中矩的bitcoin結構
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
	const newBlock = {
		index: this.chain.length + 1,
		timestamp:　Date.now(),
		transactions: this.pendingTransactions,
		nonce: nonce,
		hash: hash,
		previousBlockHash: previousBlockHash
	};

	this.pendingTransactions = [];
	this.chain.push(newBlock);

	return newBlock;

}


Blockchain.prototype.getLastBlock = function(){

	return this.chain[this.chain.length - 1];
}

//////////////////////////////////////////for_api.js///////////////////////////////////////////////
//玩api.js(單點區塊鍊api)時要把Blockchain.prototype.createNewTransaction這裡開起來
//舊Blockchain.prototype.createNewTransaction這裡只考慮到單點交易資料的push，沒有做到交易資料在區塊鍊網路上的推播給網路上其他node/api
// Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
//     const newTransaction = {
//     	amount: amount,
//     	sender: sender,
//     	recipient: recipient
//     };

//     this.pendingTransactions.push(newTransaction); //把東西push到第四行的pendingTransactions中
    
//     return this.getLastBlock()['index'] + 1;
// }
/////////////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////for_networkNode.js////////////////////////////////////////////
//考慮到network的newTransaction
//networkNode.js要用
Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction = {
     amount: amount,
     sender: sender,
     recipient: recipient,
     transactionId: uuid().split('-').join('')
    };

    return newTransaction;

};

Blockchain.prototype.addTransactionToPendingTransactions = function(transactionObj) {
    this.pendingTransactions.push(transactionObj);
    return this.getLastBlock()['index'] + 1;
};

///////////////////////////////////////////////////////////////////////////////////////


Blockchain.prototype.hashBlock = function(previousBlockHash, currentBlockData, nonce){
    const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData); //turn all to string
    const hash = sha256(dataAsString); //creat string
    return hash;
};


//proof of work
//這裡可以理解nonce和hash在用途上不同: 
//BlockHash:區塊的身分編號
//nonce:從0開始一直變，直到能在hash256中湊出0000開頭的hash值<--此即礦工的工作
Blockchain.prototype.proofOfWork = function(previousBlockHash, currentBlockData){
    let nonce = 0;
    let hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    
    //驗證是否0000開頭
    while (hash.substring(0, 4) !== '0000'){
    	nonce++;
    	hash = this.hashBlock(previousBlockHash, currentBlockData, nonce);
    	console.log(hash);//把每次hash都印出來
    }

    return nonce; //nonce=電腦試過需要多少次計算才能完成一組0000開頭hash的次數
}







module.exports = Blockchain; //把整份包成一個module讓其他程式(ex: test.js)能call