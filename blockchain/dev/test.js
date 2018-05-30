const Blockchain = require('./blockchain'); //call 同資料夾下面的blockchain.js中的fn

const bitcoin = new Blockchain();

bitcoin.createNewBlock(6666, "meow000000jkodsfljdsz", "fdskjhgdsaolt54324153");//createNewBlock = function(nonce, previousBlockHash, hash)

console.log(bitcoin); //可以把東西在cmd視窗裡印出來，debug好用
