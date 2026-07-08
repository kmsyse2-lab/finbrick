import Link from "next/link";


export default function Profile(){


  return(


    <main>


      <section className="hero">


        <h1>

          🦅 월가곰

        </h1>



        <p>

          슈퍼개미 투자자

        </p>


      </section>







      <section>


        <div className="card">


          <h2>

            🦅 투자자 등급

          </h2>



          <p>

            🦅 슈퍼개미

          </p>



          <p>

            ⭐ 영향력 점수 7,310

          </p>



        </div>


      </section>








      <section>


        <div className="card">


          <h2>

            📊 투자 정보

          </h2>



          <p>

            관심 종목

          </p>



          <p>

            NVDA · TSLA · BTC · ETH

          </p>



        </div>


      </section>








      <section>


        <div className="card">


          <h2>

            📝 활동

          </h2>




          <p>

            작성글 76개

          </p>




          <p>

            팔로워 3,421명

          </p>



        </div>


      </section>







      <Link

        href="/"

        style={{

          color:"white"

        }}

      >

        홈으로 돌아가기

      </Link>



    </main>


  );

}