import Link from "next/link";

import Header from "../components/Header";



export default function Research(){



  return(


    <main>


      <Header />







      <section className="hero">


        <h1>

          📚 핀브릭 투자 연구소

        </h1>


        <p>

          투자 분석과 계산 도구를 한곳에서

        </p>


      </section>









      <section>






        <Link

        href="/calculator"

        style={{

          textDecoration:"none",

          color:"white"

        }}

        >



          <div className="card">


            <h2>

              🧮 복리 계산기

            </h2>


            <p>

              시간이 만드는 자산 성장을 계산합니다.

            </p>


          </div>



        </Link>









        <Link

        href="/per"

        style={{

          textDecoration:"none",

          color:"white"

        }}

        >



          <div className="card">


            <h2>

              📊 PER 계산기

            </h2>


            <p>

              기업 가치 평가 지표를 계산합니다.

            </p>


          </div>



        </Link>









        <div className="card">


          <h2>

            💰 배당 계산기

          </h2>


          <p>

            배당 수익률과 예상 배당금을 계산합니다.

          </p>


        </div>









        <div className="card">


          <h2>

            📈 손익 계산기

          </h2>


          <p>

            매매 수익과 손실을 계산합니다.

          </p>


        </div>







      </section>






    </main>


  );


}