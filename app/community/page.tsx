import Link from "next/link";


export default function Community(){


  const posts = [


    {

      user:"월가곰",

      badge:"🦅 슈퍼개미",

      title:"AI 반도체 사이클 아직 끝나지 않았다",

      opinion:"🟢 매수",

      likes:2341,

      views:12400

    },


    {

      user:"Crypto Whale",

      badge:"🐋 고래 투자자",

      title:"이더리움 ETF 이후 기관 자금 흐름 분석",

      opinion:"🟡 관망",

      likes:1830,

      views:9200

    },


    {

      user:"Alpha Capital",

      badge:"🏦 기관투자자",

      title:"금리 변화와 미국 증시 전망",

      opinion:"🔴 매도",

      likes:850,

      views:6400

    }


  ];





  return(


    <main>


      <section className="hero">


        <h1>

          💬 투자 커뮤니티

        </h1>



        <p>

          투자자들의 생각과 분석을 공유하세요.

        </p>


      </section>







      <section>


        {

        posts.map((post)=>(


          <div

          className="card"

          key={post.title}

          >



            <h3>

              {post.user}

            </h3>




            <p>

              {post.badge}

            </p>




            <h2>

              {post.title}

            </h2>




            <p>

              투자 의견:

              {" "}

              {post.opinion}

            </p>





            <small>

              ❤️ {post.likes}

              {" "}

              👀 {post.views}

            </small>



          </div>


        ))

        }



      </section>






      <Link

      href="/"

      style={{

        color:"white"

      }}

      >

        홈으로

      </Link>



    </main>


  );

}