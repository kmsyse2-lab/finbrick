import { NextResponse } from "next/server";


export async function GET(){


  const symbols = [

    "NVDA",
    "TSLA",
    "AAPL"

  ];



  const key = process.env.FINNHUB_API_KEY;



  const stocks = await Promise.all(

    symbols.map(async(symbol)=>{


      const res = await fetch(

        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${key}`

      );


      const data = await res.json();



      return {

        symbol,

        price:data.c,

        change:data.dp

      };


    })

  );




  return NextResponse.json(stocks);


}