"use client";


export default function HoldingCard({

  holding,
  currentPrice,
  onSell

}:{

  holding:any,
  currentPrice:number,
  onSell:()=>void

}){



  const value =

    currentPrice *

    holding.quantity *

    1400;




  const buyValue =

    holding.avg_price *

    holding.quantity *

    1400;





  const profit =

    value - buyValue;





  const rate =

    (

      (currentPrice - holding.avg_price)

      /

      holding.avg_price

      *

      100

    ).toFixed(2);







  return(


    <div className="card">


      <h2>

        {holding.symbol}

      </h2>





      <p>

        보유 수량

      </p>


      <h3>

        {holding.quantity}주

      </h3>







      <p>

        평균 매수가

      </p>


      <h3>

        ${holding.avg_price}

      </h3>







      <p>

        현재가

      </p>


      <h3>

        ${currentPrice}

      </h3>








      <h2

      style={{

        color:

        profit >=0

        ?

        "red"

        :

        "blue"

      }}

      >

        {profit >=0 ? "+" : ""}

        {profit.toLocaleString()}원

      </h2>







      <p>

        수익률 {rate}%

      </p>






      <button

      onClick={onSell}

      >

        📉 매도

      </button>






    </div>


  );


}