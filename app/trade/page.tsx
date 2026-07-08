"use client";


import { useEffect,useState } from "react";

import { supabase } from "@/lib/supabase";

import Header from "../components/Header";

import TradingViewChart from "../components/TradingViewChart";

import OrderBook from "../components/OrderBook";




const stocks=[


  {
    name:"NVIDIA",
    symbol:"NASDAQ:NVDA"
  },


  {
    name:"Tesla",
    symbol:"NASDAQ:TSLA"
  },


  {
    name:"Apple",
    symbol:"NASDAQ:AAPL"
  },


  {
    name:"Microsoft",
    symbol:"NASDAQ:MSFT"
  }


];






export default function TradePage(){



const [selected,setSelected]=useState(stocks[0]);

const [price,setPrice]=useState(0);

const [balance,setBalance]=useState(0);

const [quantity,setQuantity]=useState(1);







useEffect(()=>{


load();


},[selected]);







async function load(){



const {

data:{
user

}

}=await supabase.auth.getUser();




if(!user)return;







const {data:account}=await supabase

.from("accounts")

.select("*")

.eq(

"user_id",

user.id

)

.single();






if(account){

setBalance(account.balance);

}







const res=await fetch("/api/stocks");


const data=await res.json();





const stock=data.find(

(item:any)=>

item.symbol===selected.symbol.split(":")[1]

);





if(stock){

setPrice(stock.price);

}





}









async function buy(){


const {

data:{
user

}

}=await supabase.auth.getUser();




if(!user)return;






const cost=price*quantity*1400;






if(cost>balance){

alert("잔액 부족");

return;

}







await supabase

.from("accounts")

.update({

balance:balance-cost

})

.eq(

"user_id",

user.id

);








await supabase

.from("holdings")

.insert({

user_id:user.id,

symbol:selected.symbol,

quantity,

avg_price:price

});








await supabase

.from("trades")

.insert({

user_id:user.id,

symbol:selected.symbol,

type:"BUY",

quantity,

price

});







alert("매수 완료");



load();



}









return(


<main>


<Header />





<section className="hero">


<h1>

💰 모의투자 거래소

</h1>


<p>

실제 시장 데이터 기반 투자

</p>


</section>







<section className="card">


<h2>

종목 선택

</h2>




{

stocks.map((stock)=>(


<button

key={stock.symbol}

onClick={()=>setSelected(stock)}

>

{stock.name}

</button>


))

}



</section>







<section className="card">


<h2>

📊 {selected.name}

</h2>



<TradingViewChart

symbol={selected.symbol}

/>


</section>







<OrderBook

price={price}

/>








<section className="card">


<h2>

현재가

</h2>



<h1>

${price}

</h1>




<p>

내 자산

</p>


<h2>

₩{balance.toLocaleString()}

</h2>







<input

type="number"

min="1"

value={quantity}

onChange={(e)=>

setQuantity(Number(e.target.value))

}

/>






<button

onClick={buy}

>

📈 매수

</button>



</section>






</main>


);


}