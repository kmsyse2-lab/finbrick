"use client";


type Holding = {

  symbol:string;

  quantity:number;

  avg_price:number;

};



type Props = {

  holdings:Holding[];

  onSell:(symbol:string)=>void;

};




export default function PortfolioCard({

  holdings,

  onSell

}:Props){



  return (

    <section className="card">


      <h2>

        📦 내 보유 종목

      </h2>




      {

        holdings.length === 0 ? (


          <p>

            보유 종목이 없습니다.

          </p>



        ) : (



          holdings.map((item)=>(


            <div

              key={item.symbol}

              style={{

                borderBottom:"1px solid #ddd",

                padding:"15px 0"

              }}

            >


              <h3>

                {item.symbol}

              </h3>



              <p>

                보유 수량 : {item.quantity}주

              </p>



              <p>

                평균 매수가 : ${item.avg_price}

              </p>




              <button

                onClick={()=>onSell(item.symbol)}

              >

                📉 매도

              </button>



            </div>



          ))

        )

      }



    </section>

  );

}