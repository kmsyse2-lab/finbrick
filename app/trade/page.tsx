"use client";

import { useState } from "react";

import Header from "../components/Header";
import TradingViewChart from "../components/TradingViewChart";
import OrderBook from "../components/OrderBook";
import TradePanel from "../components/TradePanel";
import AccountCard from "../components/AccountCard";
import PortfolioCard from "../components/PortfolioCard";
import StockSelector from "../components/StockSelector";
import TransactionHistory from "../components/TransactionHistory";


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





  // 보유 종목

  const [holdings,setHoldings] =

    useState<any[]>([]);





  // 거래 기록

  const [transactions,setTransactions] =

    useState<Transaction[]>([]);








  const addTransaction = (

    type:"BUY"|"SELL",

    quantity:number

  )=>{


    setTransactions((prev)=>[

      {

        id:Date.now(),

        symbol,

        type,

        quantity,

        price:currentPrice,

        time:new Date().toLocaleString()

      },

      ...prev

    ]);

  };









  // 매수

  const handleBuy = ()=>{


    const cost =

      currentPrice * 1400;



    if(balance < cost){

      alert("잔액 부족");

      return;

    }




    setBalance(

      prev=>prev-cost

    );





    setHoldings((prev)=>{


      const exist =

        prev.find(

          item=>item.symbol===symbol

        );





      if(exist){


        return prev.map((item)=>


          item.symbol===symbol

          ?

          {

            ...item,

            quantity:item.quantity+1,

            avg_price:

            (

              item.avg_price *

              item.quantity

              +

              currentPrice

            )

            /

            (

              item.quantity+1

            )

          }


          :

          item


        );


      }






      return [

        ...prev,

        {

          symbol,

          quantity:1,

          avg_price:currentPrice

        }

      ];



    });





    addTransaction(

      "BUY",

      1

    );


  };









  // 매도

  const handleSell = (

    sellSymbol:string

  )=>{


    const target =

      holdings.find(

        item=>item.symbol===sellSymbol

      );





    if(!target){

      return;

    }





    const sellPrice =

      prices[sellSymbol];





    const money =

      target.quantity *

      sellPrice *

      1400;






    setBalance(

      prev=>prev+money

    );






    setHoldings((prev)=>


      prev

      .map((item)=>


        item.symbol===sellSymbol

        ?

        {

          ...item,

          quantity:item.quantity-1

        }

        :

        item


      )

      .filter(

        item=>item.quantity>0

      )


    );





    setTransactions((prev)=>[


      {

        id:Date.now(),

        symbol:sellSymbol,

        type:"SELL",

        quantity:1,

        price:sellPrice,

        time:new Date().toLocaleString()

      },


      ...prev


    ]);




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








      <AccountCard />







      <TradingViewChart

        symbol={symbol}

      />








      <OrderBook

        price={currentPrice}

      />








      <TradePanel

        balance={balance}

        price={currentPrice}

        onBuy={handleBuy}

      />








      <PortfolioCard

        holdings={holdings}

        onSell={handleSell}

      />








      <TransactionHistory

        transactions={transactions}

      />








      <section className="card">


        <h2>

          💵 현금 잔고

        </h2>


        <h3>

          {balance.toLocaleString()}원

        </h3>


      </section>




    </main>

  );

}