"use client";


export default function RankingCard(){


  const investors = [


    {
      rank:1,
      icon:"🏦",
      name:"Alpha Capital",
      type:"기관투자자",
      score:9850,
      posts:124
    },


    {
      rank:2,
      icon:"🐋",
      name:"Crypto Whale",
      type:"고래 투자자",
      score:8420,
      posts:98
    },


    {
      rank:3,
      icon:"🦅",
      name:"월가곰",
      type:"슈퍼개미",
      score:7310,
      posts:76
    },


    {
      rank:4,
      icon:"🐜",
      name:"투자초보",
      type:"개미 투자자",
      score:3200,
      posts:21
    }


  ];




  return(


    <div>


      {

      investors.map((user)=>(


        <div

          className="card"

          key={user.name}

        >



          <h3>

            {user.rank}위 {user.icon} {user.name}

          </h3>




          <p

          style={{

            color:"#c1123d",

            fontWeight:"bold"

          }}

          >

            {user.type}

          </p>




          <p>

            ⭐ 영향력 점수 {user.score}

          </p>




          <small

          style={{

            color:"#777"

          }}

          >

            📊 분석글 {user.posts}개

          </small>



        </div>


      ))

      }



    </div>


  );

}