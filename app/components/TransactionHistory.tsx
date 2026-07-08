"use client";

type Transaction = {
  id: number;
  symbol: string;
  type: "BUY" | "SELL";
  quantity: number;
  price: number;
  time: string;
};


type Props = {
  transactions: Transaction[];
};


export default function TransactionHistory({
  transactions,
}: Props) {


  return (
    <section className="card">


      <h2>
        📜 거래 내역
      </h2>



      {
        transactions.length === 0 ? (

          <p>
            아직 거래 기록이 없습니다.
          </p>

        ) : (


          <div>


            {
              transactions.map((item)=>(
                

                <div

                  key={item.id}

                  style={{

                    borderBottom:"1px solid #ddd",

                    padding:"12px 0"

                  }}

                >


                  <h3>


                    {item.symbol}


                    {" "}


                    <span

                    style={{

                      color:
                      item.type === "BUY"
                      ?
                      "red"
                      :
                      "blue"

                    }}

                    >

                      {
                        item.type === "BUY"
                        ?
                        "매수"
                        :
                        "매도"
                      }

                    </span>


                  </h3>



                  <p>

                    수량 : {item.quantity}주

                  </p>



                  <p>

                    가격 : ${item.price}

                  </p>



                  <p>

                    {item.time}

                  </p>



                </div>


              ))

            }


          </div>


        )

      }


    </section>
  );

}