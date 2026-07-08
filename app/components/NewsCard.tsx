"use client";


export default function NewsCard(){


  const news = [


    {
      tag:"미국 증시",
      title:"연준 금리 인하 기대감 확대",
      description:"월스트리트 주요 지수와 투자 심리 변화",
      time:"10분 전",
      hot:true
    },


    {
      tag:"암호화폐",
      title:"기관 투자자 이더리움 관심 증가",
      description:"ETF 자금 흐름과 시장 전망 분석",
      time:"30분 전",
      hot:true
    },


    {
      tag:"경제",
      title:"글로벌 경기 흐름 변화",
      description:"금리와 환율 시장 주요 이슈",
      time:"1시간 전",
      hot:false
    }


  ];




  return(

    <div>


      {

      news.map((item)=>(


        <div

          className="card"

          key={item.title}

        >



          <small

          style={{

            color:"#c1123d"

          }}

          >

            {item.tag}

            {" "}

            {

            item.hot && "🔥"

            }

          </small>





          <h3>

            {item.title}

          </h3>





          <p>

            {item.description}

          </p>





          <small

          style={{

            color:"#777"

          }}

          >

            {item.time}

          </small>



        </div>


      ))

      }


    </div>

  );

}