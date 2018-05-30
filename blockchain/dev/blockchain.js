//建立blockchain物件
function Blockchain() {
	this.chain = [];
	this.newTransactions = [];
}

//建立中規中矩的bitcoin結構
Blockchain.prototype.createNewBlock = function(nonce, previousBlockHash, hash) {
	const newBlock = {
		index: this.chain.length + 1,
		timestamp:　Date.now(),
		transactions: this.newTransactions,
		nonce: nonce,
		hash: hash,
		previousBlockHash: previousBlockHash
	};

	this.newTransactions = [];
	this.chain.push(newBlock);

	return newBlock;

}


Blockchain.prototype.getLastBlock = function(){

	return this.chain[this.chain.length - 1];
}


Blockchain.prototype.createNewTransaction = function(amount, sender, recipient){
    const newTransaction = {
    	amount: amount,
    	sender: sender,
    	recipient: recipient
    };

    this.newTransactions.push(newTransaction); //把東西push到第四行的newTransactions中
    

}


module.exports = Blockchain; //把整份包成一個module讓其他程式(ex: test.js)能call
