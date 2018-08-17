# blockchain_practice

![image](https://github.com/ChiShengChen/blockchain_practice/raw/master/bcd2.png)
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

> http://localhost:3000/register-node

並在body中send欲加入網路之api的url即可於瀏覽器/blockchain檢視區塊鍊紀錄，例如:
>   {
	"newNodeUrl":"http://localhost:3005"
}

<br>

##### 檢視register-nodes-bulk
> http://localhost:3000/register-nodes-bulk

並在body中send該群網路api的ur即可於瀏覽器/blockchain檢視區塊鍊紀錄，例如:
>  {
	"allNetworkNodes":[
<br>		"http://localhost:3002",
<br>		"http://localhost:3003",
<br>    	"http://localhost:3004"
		]
}

<br>

<br>

##### 檢視register-and-broadcast-node
> http://localhost:3001/register-and-broadcast-node

並在body中send該群網路api的ur即可於瀏覽器/blockchain檢視區塊鍊紀錄，例如:
>  {
	"newNodeUrl":"http://localhost:3005"
}

<br>

這樣3001~3004的
http://localhost:300x/blockchain
中會有
<br>

>"networkNodes": [
"http://localhost:3005"
]

<br>

![image](https://github.com/ChiShengChen/blockchain_practice/raw/master/bcd3.png)

<br>

而3005中會有
<br>

>"networkNodes": [
<br> "http://localhost:3001",
<br> "http://localhost:3002",
<br> "http://localhost:3003",
<br> "http://localost:3004"
]

<br>

即代表完成node間的溝通，形成去中心化區塊鍊api network!
