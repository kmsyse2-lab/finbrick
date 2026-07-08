"use client";

import { useState } from "react";

import Header from "../components/Header";
import TradingViewChart from "../components/TradingViewChart";
import OrderBook from "../components/OrderBook";
import HoldingCard from "../components/HoldingCard";
import AccountCard from "../components/AccountCard";
import TradePanel from "../components/TradePanel";
import TransactionHistory from "../components/TransactionHistory";
import StockSelector from "../components/StockSelector";


type Transaction = {

  id:number;

  symbol:string;

  type:"BUY" | "SELL";

  quantity:number;

  price:number;

  time:string;

};



export default function TradePage(){


  const [balance,setBalance] =
    useState(10000000);



  const [symbol,setSymbol] =
    useState("NASDAQ:AAPL");



  const prices:any = {

    "NASDAQ:AAPL":185,

    "NASDAQ:TSLA":250,

    "NASDAQ:NVDA":170

  };



  const currentPrice =
    prices[symbol];




  const [quantity,setQuantity] =
    useState(0);



  const [avgPrice,setAvgPrice] =
    useState(0);



  const [transactions,setTransactions] =
    useState<Transaction[]>([]);






  const addTransaction = (

    type:"BUY" | "SELL",

    amount:number

  )=>{


    const data:Transaction={

      id:Date.now(),

      symbol,

      type,

      quantity:amount,

      price:currentPrice,

      time:new Date().toLocaleString()

    };



    setTransactions((prev)=>[

      data,

      ...prev

    ]);


  };








  const handleBuy = ()=>{


    const cost =

      currentPrice *

      1 *

      1400;



    if(balance < cost){

      alert("잔액 부족");

      return;

    }




    const total =

      avgPrice *

      quantity

      +

      currentPrice;



    const newQuantity =

      quantity + 1;



    const newAvg =

      total /

      newQuantity;




    setBalance(

      balance - cost

    );



    setQuantity(

      newQuantity

    );



    setAvgPrice(

      newAvg

    );




    addTransaction(

      "BUY",

      1

    );


  };








  const handleSell = ()=>{


    if(quantity <= 0){

      alert("보유 주식 없음");

      return;

    }




    const money =

      quantity *

      currentPrice *

      1400;




    setBalance(

      balance + money

    );



    addTransaction(

      "SELL",

      quantity

    );



    setQuantity(0);



    setAvgPrice(0);


  };








  return (

    <main>


      <Header />




      <section>

        <h1 className="section-title">

          💰 모의투자

        </h1>


        <p>

          실제 시장 데이터를 기반으로 투자 연습을 해보세요.

        </p>


      </section>





      <StockSelector

        symbol={symbol}

        setSymbol={setSymbol}

      />






      <section>

        <AccountCard />

      </section>







      <section>


        <TradingViewChart

          symbol={symbol}

        />


      </section>







      <section>


        <OrderBook

          price={currentPrice}

        />


      </section>








      <section>


        <TradePanel

          balance={balance}

          price={currentPrice}

          quantity={quantity}

          onBuy={handleBuy}

          onSell={handleSell}

        />


      </section>







      {
        quantity > 0 && (


          <section>


            <HoldingCard


              holding={{

                symbol,

                quantity,

                avg_price:avgPrice

              }}


              currentPrice={currentPrice}


              onSell={handleSell}


            />


          </section>


        )
      }








      <TransactionHistory

        transactions={transactions}

      />








      <section className="card">


        <h2>

          💵 가상 잔고

        </h2>



        <h3>

          {balance.toLocaleString()}원

        </h3>


      </section>




    </main>

  );

}