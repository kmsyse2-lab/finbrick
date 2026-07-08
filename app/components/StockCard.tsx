"use client";

import { useEffect, useState } from "react";


export default function StockCard(){


  const [stocks,setStocks]=useState<any[]>([]);



  useEffect(()=>{


    fetch("/api/stocks")

      .then(res=>res.json())

      .then(data=>setStocks(data));


  },[]);




  return(


    <section>


      <h2 className="section-title">

        📈 실시간 시장

      </h2>



      {

      stocks.map((stock)=>(


        <div

        className="card"

        key={stock.symbol}

        >


          <h2>

            {stock.symbol}

          </h2>



          <p>

            ${stock.price}

          </p>



          <p

          style={{

            color:

            stock.change >=0

            ? "red"

            : "blue"

          }}

          >

            {

            stock.change >=0

            ? "▲"

            : "▼"

            }

            {" "}

            {stock.change.toFixed(2)}%

          </p>



        </div>


      ))

      }


    </section>


  );

}