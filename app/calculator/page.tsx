"use client";


import {useState} from "react";

import Header from "../components/Header";



export default function Calculator(){



  const [money,setMoney] = useState(10000000);

  const [monthly,setMonthly] = useState(300000);

  const [rate,setRate] = useState(10);

  const [year,setYear] = useState(20);



  const [result,setResult] = useState<any>(null);






  function calculate(){



    let total = money;


    let principal = money;



    for(let i=0;i<year;i++){



      total = total * (1 + rate / 100);



      total += monthly * 12;



      principal += monthly * 12;



    }






    const profit = total - principal;



    const profitRate =

      ((profit / principal) * 100).toFixed(2);






    setResult({

      total,

      principal,

      profit,

      profitRate

    });



  }







  return(


    <main>


      <Header />







      <section className="hero">


        <h1>

          🧮 복리 계산기

        </h1>


        <p>

          시간이 만드는 자산의 성장을 확인하세요.

        </p>


      </section>








      <section className="card">





        <label>

          초기 투자금

        </label>



        <input

          type="number"

          value={money}

          onChange={e=>setMoney(Number(e.target.value))}

        />








        <label>

          월 추가 투자금

        </label>



        <input

          type="number"

          value={monthly}

          onChange={e=>setMonthly(Number(e.target.value))}

        />








        <label>

          연 평균 수익률 (%)

        </label>



        <input

          type="number"

          value={rate}

          onChange={e=>setRate(Number(e.target.value))}

        />








        <label>

          투자 기간 (년)

        </label>



        <input

          type="number"

          value={year}

          onChange={e=>setYear(Number(e.target.value))}

        />








        <button

          onClick={calculate}

        >

          계산하기

        </button>




      </section>









      {

      result &&


      <section className="card">



        <h2>

          📊 계산 결과

        </h2>






        <p>

          총 투자 원금

        </p>


        <h3>

          ₩{result.principal.toLocaleString()}

        </h3>







        <p>

          예상 수익

        </p>


        <h3

        style={{

          color:"red"

        }}

        >

          +₩{Math.floor(result.profit).toLocaleString()}

        </h3>







        <p>

          최종 예상 자산

        </p>


        <h1>

          ₩{Math.floor(result.total).toLocaleString()}

        </h1>







        <p>

          원금 대비 수익률

        </p>


        <h2>

          {result.profitRate}%

        </h2>





      </section>


      }



    </main>


  );


}