"use client";

import { useEffect, useState } from "react";


export default function CryptoCard(){


  const [coins,setCoins] = useState<any[]>([]);



  useEffect(()=>{

    loadCoins();

  },[]);




  async function loadCoins(){


    const res = await fetch(

      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,solana&vs_currencies=usd&include_24hr_change=true"

    );



    const data = await res.json();



    setCoins([


      {

        name:"₿ 비트코인",

        price:data.bitcoin.usd,

        change:data.bitcoin.usd_24h_change

      },


      {

        name:"Ξ 이더리움",

        price:data.ethereum.usd,

        change:data.ethereum.usd_24h_change

      },


      {

        name:"◎ 솔라나",

        price:data.solana.usd,

        change:data.solana.usd_24h_change

      }



    ]);



  }




  return(

    <div className="grid">


      {


      coins.map((coin)=>(


        <div

          className="card"

          key={coin.name}

        >



          <h3>

            {coin.name}

          </h3>




          <h2>

            ${

              coin.price.toLocaleString()

            }

          </h2>




          <p

          style={{

            color:

            coin.change >= 0

            ?

            "#c1123d"

            :

            "#777"

          }}

          >

            {

            coin.change >= 0

            ?

            "+"

            :

            ""

            }

            {

            coin.change.toFixed(2)

            }%

          </p>



        </div>



      ))

      }



    </div>

  );

}