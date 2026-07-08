"use client";

type Props = {
  balance: number;
  price: number;
  quantity: number;
  onBuy: () => void;
  onSell: () => void;
};


export default function TradePanel({
  balance,
  price,
  quantity,
  onBuy,
  onSell,
}: Props) {


  return (
    <section className="card">

      <h2>
        📈 주문
      </h2>


      <p>
        현재가 : ${price}
      </p>


      <p>
        보유 수량 : {quantity}주
      </p>


      <p>
        예수금 : {balance.toLocaleString()}원
      </p>



      <div style={{
        display:"flex",
        gap:"10px"
      }}>


        <button
          onClick={onBuy}
        >
          🟢 매수
        </button>


        <button
          onClick={onSell}
        >
          🔴 매도
        </button>


      </div>


    </section>
  );
}