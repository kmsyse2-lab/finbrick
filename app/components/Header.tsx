"use client";


import Link from "next/link";



export default function Header(){


  return(


    <header

      style={{

        display:"flex",

        justifyContent:"space-between",

        alignItems:"center",

        padding:"20px",

        borderBottom:"1px solid #333"

      }}

    >



      <Link

        href="/"

        style={{

          color:"white",

          textDecoration:"none",

          fontSize:"24px",

          fontWeight:"bold"

        }}

      >

        🧱 핀브릭

      </Link>







      <nav

      style={{

        display:"flex",

        gap:"15px",

        alignItems:"center"

      }}

      >




        <Link

        href="/"

        style={{

          color:"white",

          textDecoration:"none"

        }}

        >

          🏠 홈

        </Link>






        <Link

        href="/trade"

        style={{

          color:"white",

          textDecoration:"none"

        }}

        >

          📈 거래소

        </Link>







        <Link

        href="/portfolio"

        style={{

          color:"white",

          textDecoration:"none"

        }}

        >

          📁 내 투자

        </Link>







        <Link

        href="/community"

        style={{

          color:"white",

          textDecoration:"none"

        }}

        >

          💬 커뮤니티

        </Link>







        <Link

        href="/research"

        style={{

          color:"white",

          textDecoration:"none"

        }}

        >

          📚 연구소

        </Link>







        <Link

        href="/profile"

        style={{

          color:"white",

          textDecoration:"none"

        }}

        >

          👤 프로필

        </Link>






      </nav>




    </header>


  );


}