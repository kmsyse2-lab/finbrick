"use client";

import { useEffect, useRef } from "react";


export default function TradingViewChart({

  symbol

}:{

  symbol:string

}){


  const container = useRef<HTMLDivElement>(null);





  useEffect(()=>{


    if(!container.current) return;



    container.current.innerHTML="";



    const script=document.createElement("script");



    script.src=
    "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";



    script.type="text/javascript";

    script.async=true;




    script.innerHTML=`

    {
      "autosize": true,
      "symbol": "${symbol}",
      "interval": "D",
      "timezone": "Asia/Seoul",
      "theme": "dark",
      "style": "1",
      "locale": "kr",
      "allow_symbol_change": false,
      "support_host": "https://www.tradingview.com"
    }

    `;



    container.current.appendChild(script);



  },[symbol]);






  return(


    <div

      ref={container}

      style={{

        width:"100%",

        height:"500px"

      }}

    />


  );


}