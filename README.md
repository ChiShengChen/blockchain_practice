# blockchain_practice

### 檢視方法:
#### 1.瀏覽器

<hr>

總鍊
> http://localhost:3000/blockchain
<br>
礦工獎勵/新出區塊紀錄

> http://localhost:3000/mine

#### 2.postman

<hr>

##### 檢視transaction
> http://localhost:3000/transaction

並在body中send交易資料即可於瀏覽器/blockchain檢視區塊鍊紀錄，例如:
>  { "amount": 35,
<br>   "sender": "FASD0FS0FFSD2156F1RLK6",
<br>   "recipient": "0RFRAFG962FDG13MNLOED9"}

<br>

##### 檢視register-node

> http://localhost:3000//register-node

並在body中send欲加入網路之api的url即可於瀏覽器/blockchain檢視區塊鍊紀錄，例如:
>   {
	"newNodeUrl":"http://localhost:3005"
}
