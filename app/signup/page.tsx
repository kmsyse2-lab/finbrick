"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Header from "../components/Header";


export default function SignupPage(){

  const router = useRouter();


  const [email,setEmail] = useState("");

  const [password,setPassword] = useState("");

  const [nickname,setNickname] = useState("");




  async function signup(){


    if(!email || !password || !nickname){

      alert("모든 항목을 입력해주세요.");

      return;

    }



    const {
      data,
      error
    } = await supabase.auth.signUp({

      email,

      password

    });



    if(error){

      alert(error.message);

      return;

    }



    const user = data.user;



    if(user){


      const {error:profileError} = await supabase

      .from("profiles")

      .insert({

        id:user.id,

        nickname:nickname

      });



      if(profileError){

        alert(profileError.message);

        return;

      }


    }



    alert("회원가입 완료");

    router.push("/");



  }




  return(

    <main>


      <Header />



      <section className="card">


        <h1>
          회원가입
        </h1>



        <p style={{
          color:"#888"
        }}>

          핀브릭 계정을 만들어보세요.

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



        <input

          placeholder="닉네임"

          value={nickname}

          onChange={(e)=>
            setNickname(e.target.value)
          }

        />



        <button onClick={signup}>

          가입하기

        </button>




        <p style={{
          marginTop:"25px",
          color:"#888"
        }}>

          이미 계정이 있나요?

          {" "}

          <Link href="/login">

            로그인

          </Link>


        </p>



      </section>



    </main>

  );

}