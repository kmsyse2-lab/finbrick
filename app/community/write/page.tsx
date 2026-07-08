"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";


export default function WritePage(){


  const router = useRouter();


  const [title,setTitle] = useState("");

  const [content,setContent] = useState("");

  const [category,setCategory] = useState("📈 주식");





  async function submitPost(){


    const {

      data:{
        user

      }

    } = await supabase.auth.getUser();





    if(!user){

      alert("로그인이 필요합니다.");

      return;

    }






    const {error} = await supabase

      .from("posts")

      .insert({

        title,

        content,

        category,

        user_id:user.id

      });






    if(error){

      alert(error.message);

      return;

    }






    router.push("/community");


  }







  return(


    <main>


      <Header />



      <section className="hero">


        <h1>

          ✍️ 투자 글 작성

        </h1>



        <p>

          투자 아이디어와 분석을 공유하세요

        </p>


      </section>







      <section className="card">



        <select

          value={category}

          onChange={(e)=>

            setCategory(e.target.value)

          }

        >


          <option>

            📈 주식

          </option>


          <option>

            🪙 코인

          </option>


          <option>

            🏦 경제

          </option>


          <option>

            🔥 투자전략

          </option>


        </select>







        <input

          placeholder="제목"

          value={title}

          onChange={(e)=>

            setTitle(e.target.value)

          }

        />







        <textarea

          placeholder="내용"

          value={content}

          onChange={(e)=>

            setContent(e.target.value)

          }

        />








        <button

          onClick={submitPost}

        >

          등록하기

        </button>



      </section>



    </main>


  );


}