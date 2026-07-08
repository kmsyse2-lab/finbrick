"use client";

type Props = {

  balance:number;

  price:number;

  onBuy:()=>void;

};



export default function TradePanel({

  balance,

  price,

  onBuy

}:Props){


  return (

    <section className="card">


      <h2>

        📈 주문하기

      </h2>



      <p>

        현재 가격

      </p>


      <h3>

        ${price}

      </h3>





      <p>

        주문 가능 금액

      </p>


      <h3>

        {balance.toLocaleString()}원

      </h3>





      <button

        onClick={onBuy}

      >

        🟢 1주 매수

      </button>



    </section>

  );


}