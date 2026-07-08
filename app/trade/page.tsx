"use client";

import { useState } from "react";

import Header from "../components/Header";
import TradingViewChart from "../components/TradingViewChart";
import OrderBook from "../components/OrderBook";
import HoldingCard from "../components/HoldingCard";
import AccountCard from "../components/AccountCard";


export default function TradePage() {


  const [balance,setBalance] = useState(10000000);


  const [holding,setHolding] = useState({

    symbol:"AAPL",

    quantity:10,

    avg_price:180

  });



  const symbol = "AAPL";

  const currentPrice = 185;



  const handleSell = ()=>{


    const money =

      holding.quantity *

      currentPrice *

      1400;



    setBalance(prev=>prev + money);



    setHolding({

      symbol:"",

      quantity:0,

      avg_price:0

    });


  };





  return (

    <main>


      <Header />



      <section>

        <h1 className="section-title">

          💰 모의투자

        </h1>


        <p>

          실제 시장 데이터를 기반으로 투자 연습을 할 수 있습니다.

        </p>


      </section>





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


        {holding.quantity > 0 && (

          <HoldingCard

            holding={holding}

            currentPrice={currentPrice}

            onSell={handleSell}

          />

        )}


      </section>





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