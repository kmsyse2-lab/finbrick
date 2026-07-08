"use client";


import { useState } from "react";

import Header from "../components/Header";



export default function PER(){



  const [price,setPrice] = useState(100000);

  const [eps,setEps] = useState(5000);

  const [result,setResult] = useState<number | null>(null);






  function calculate(){


    if(eps <= 0){

      return;

    }


    setResult(

      price / eps

    );


  }







  return(


    <main>


      <Header />







      <section className="hero">


        <h1>

          📊 PER 계산기

        </h1>


        <p>

          주식 가치 평가 지표를 계산합니다.

        </p>


      </section>









      <section className="card">





        <label>

          현재 주가

        </label>



        <input

          type="number"

          value={price}

          onChange={e=>setPrice(Number(e.target.value))}

        />








        <label>

          주당순이익 EPS

        </label>



        <input

          type="number"

          value={eps}

          onChange={e=>setEps(Number(e.target.value))}

        />








        <button

          onClick={calculate}

        >

          계산하기

        </button>





      </section>









      {

      result !== null &&


      <section className="card">



        <h2>

          PER

        </h2>





        <h1>

          {result.toFixed(2)}배

        </h1>






        <p>

          참고:

          <br />

          PER이 낮으면 상대적으로 저평가 가능성이 있고,

          <br />

          PER이 높으면 성장 기대가 반영될 수 있습니다.

        </p>





      </section>


      }







    </main>


  );


}