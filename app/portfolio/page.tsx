"use client";


import {useEffect,useState} from "react";

import {supabase} from "@/lib/supabase";

import Header from "../components/Header";

import HoldingCard from "../components/HoldingCard";




export default function Portfolio(){



const [holdings,setHoldings]=useState<any[]>([]);

const [prices,setPrices]=useState<any>({});

const [balance,setBalance]=useState(0);








useEffect(()=>{


load();


},[]);







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







if(account)

setBalance(account.balance);








const {data:holdingData}=await supabase

.from("holdings")

.select("*")

.eq(

"user_id",

user.id

);







setHoldings(

holdingData || []

);








const res=await fetch("/api/stocks");


const stocks=await res.json();






const priceMap:any={};




stocks.forEach((item:any)=>{


priceMap[item.symbol]=item.price;


});




setPrices(priceMap);



}









async function sell(holding:any){



const {

data:{
user

}

}=await supabase.auth.getUser();




if(!user)return;






const current =

prices[

holding.symbol.split(":")[1]

]

||

holding.avg_price;








const money =

current *

holding.quantity *

1400;









await supabase

.from("accounts")

.update({

balance:

balance + money

})

.eq(

"user_id",

user.id

);









await supabase

.from("holdings")

.delete()

.eq(

"id",

holding.id

);








await supabase

.from("trades")

.insert({

user_id:user.id,

symbol:holding.symbol,

type:"SELL",

quantity:holding.quantity,

price:current

});








alert(

holding.symbol+" 매도 완료"

);





load();



}








const stockValue = holdings.reduce(

(total,item)=>{


const price =

prices[item.symbol.split(":")[1]]

||

item.avg_price;




return total +

price *

item.quantity *

1400;



},0);








return(


<main>


<Header />





<section className="hero">


<h1>

📁 내 투자

</h1>


<p>

보유 종목 관리

</p>


</section>







<section className="card">


<h2>

총 자산

</h2>


<h1>

₩{(

balance+stockValue

).toLocaleString()}

</h1>




<p>

현금

</p>


<h3>

₩{balance.toLocaleString()}

</h3>



</section>







<h2 className="section-title">

보유 종목

</h2>








{

holdings.length===0

?

<div className="card">

보유 종목 없음

</div>


:

holdings.map((item,index)=>(


<HoldingCard

key={index}

holding={item}

currentPrice={

prices[item.symbol.split(":")[1]]

||

item.avg_price

}

onSell={()=>sell(item)}

/>


))


}





</main>


);


}