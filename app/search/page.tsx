"use client";

import { useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Header from "../components/Header";


export default function SearchPage(){


  const [keyword,setKeyword] = useState("");

  const [category,setCategory] = useState("전체");

  const [posts,setPosts] = useState<any[]>([]);



  async function search(){


    if(!keyword.trim()){

      return;

    }



    let query = supabase

      .from("posts")

      .select(`
        id,
        title,
        content,
        category,
        created_at,
        views,
        profiles(
          nickname
        )
      `)

      .or(

        `title.ilike.%${keyword}%,content.ilike.%${keyword}%`

      );




    if(category !== "전체"){


      query = query.eq(

        "category",

        category

      );


    }




    const {data}=await query

      .order("created_at",{

        ascending:false

      });



    setPosts(data || []);


  }




  return(

    <main>


      <Header />



      <section className="hero">


        <h1>

          🔍 검색

        </h1>



        <p>

          핀브릭의 투자 정보를 찾아보세요.

        </p>



      </section>





      <section className="card">



        <input

          placeholder="검색어 입력"

          value={keyword}

          onChange={(e)=>

            setKeyword(e.target.value)

          }

        />




        <select

          value={category}

          onChange={(e)=>

            setCategory(e.target.value)

          }

        >


          <option>

            전체

          </option>


          <option>

            주식

          </option>


          <option>

            코인

          </option>


          <option>

            경제

          </option>


          <option>

            AI

          </option>


        </select>



        <button onClick={search}>

          검색

        </button>



      </section>







      <section>


        <h2 className="section-title">

          검색 결과

        </h2>




        {

        posts.map((post)=>(


          <Link

            key={post.id}

            href={`/community/post/${post.id}`}

            style={{

              color:"white",

              textDecoration:"none"

            }}

          >



            <div className="card">



              <p style={{
                color:"#c1123d"
              }}>

                {post.category}

              </p>




              <h3>

                {post.title}

              </h3>




              <p>

                👤 {

                post.profiles?.nickname || "익명"

                }

              </p>




              <p style={{
                color:"#999"
              }}>

                {post.content.slice(0,80)}

              </p>




              <small style={{
                color:"#777"
              }}>

                👀 {post.views || 0}

                {" · "}

                {

                new Date(
                  post.created_at
                ).toLocaleString()

                }


              </small>



            </div>


          </Link>



        ))

        }




      </section>



    </main>

  );

}