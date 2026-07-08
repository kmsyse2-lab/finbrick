"use client";

import { useEffect, useState } from "react";


export default function OrderBook({

  price

}:{

  price:number

}){


  const [asks,setAsks] = useState<any[]>([]);

  const [bids,setBids] = useState<any[]>([]);

  const [volume,setVolume] = useState(0);

  const [strength,setStrength] = useState(0);






  useEffect(()=>{


    if(!price) return;



    const makeAmount=()=>{

      return Math.floor(Math.random()*800)+100;

    };





    setAsks([

      {
        price:(price+0.30).toFixed(2),
        amount:makeAmount()
      },

      {
        price:(price+0.20).toFixed(2),
        amount:makeAmount()
      },

      {
        price:(price+0.10).toFixed(2),
        amount:makeAmount()
      }

    ]);





    setBids([

      {
        price:(price-0.10).toFixed(2),
        amount:makeAmount()
      },

      {
        price:(price-0.20).toFixed(2),
        amount:makeAmount()
      },

      {
        price:(price-0.30).toFixed(2),
        amount:makeAmount()
      }

    ]);





    setVolume(

      Math.floor(Math.random()*9000000)+1000000

    );



    setStrength(

      Math.floor(Math.random()*80)+40

    );




  },[price]);







  const max = Math.max(

    ...asks.map(x=>x.amount),

    ...bids.map(x=>x.amount),

    1

  );






  return(


    <section className="card">



      <h2>

        📒 호가창

      </h2>





      <div

      style={{

        display:"flex",

        justifyContent:"space-between",

        fontSize:"13px",

        color:"#888"

      }}

      >

        <span>

          잔량

        </span>


        <span>

          가격

        </span>


      </div>







      {

      asks.reverse().map((item,index)=>(


        <div

        key={index}

        style={{

          display:"flex",

          justifyContent:"space-between",

          alignItems:"center",

          margin:"8px 0"

        }}

        >



          <div

          style={{

            width:

            `${(item.amount/max)*100}%`,

            background:"#ffdddd",

            height:"22px",

            position:"absolute",

            zIndex:0

          }}

          />





          <span

          style={{

            zIndex:1,

            color:"#d32f2f"

          }}

          >

            {item.amount}주

          </span>





          <span

          style={{

            zIndex:1,

            color:"#d32f2f",

            fontWeight:"bold"

          }}

          >

            {item.price}

          </span>



        </div>


      ))

      }







      <div

      style={{

        textAlign:"center",

        padding:"15px",

        margin:"15px 0",

        borderTop:"1px solid #444",

        borderBottom:"1px solid #444"

      }}

      >


        <h2>

          🔥 ${price}

        </h2>



        <p>

          체결강도 {strength}%

        </p>


      </div>








      {

      bids.map((item,index)=>(


        <div

        key={index}

        style={{

          display:"flex",

          justifyContent:"space-between",

          alignItems:"center",

          margin:"8px 0"

        }}

        >



          <div

          style={{

            width:

            `${(item.amount/max)*100}%`,

            background:"#d9ecff",

            height:"22px",

            position:"absolute",

            zIndex:0

          }}

          />






          <span

          style={{

            zIndex:1,

            color:"#1976d2"

          }}

          >

            {item.amount}주

          </span>





          <span

          style={{

            zIndex:1,

            color:"#1976d2",

            fontWeight:"bold"

          }}

          >

            {item.price}

          </span>



        </div>


      ))

      }







      <hr />



      <p>

        📊 누적 거래량

      </p>


      <h3>

        {volume.toLocaleString()}

      </h3>




    </section>


  );


}