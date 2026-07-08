"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/Header";


export default function LoginPage(){

  const router = useRouter();


  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");



  async function login(){


    const {error} = await supabase.auth.signInWithPassword({

      email,

      password

    });



    if(error){

      alert(error.message);

      return;

    }



    router.push("/");


  }




  return(

    <main>


      <Header />



      <section className="card">


        <h1>
          로그인
        </h1>


        <p style={{
          color:"#888"
        }}>
          핀브릭으로 금융 정보를 시작하세요.
        </p>




        <input

          placeholder="이메일"

          value={email}

          onChange={(e)=>
            setEmail(e.target.value)
          }

        />



        <input

          type="password"

          placeholder="비밀번호"

          value={password}

          onChange={(e)=>
            setPassword(e.target.value)
          }

        />



        <button onClick={login}>

          로그인

        </button>




        <p style={{
          marginTop:"25px",
          color:"#888"
        }}>

          계정이 없나요?

          {" "}

          <Link href="/signup">

            회원가입

          </Link>


        </p>



      </section>



    </main>

  );

}