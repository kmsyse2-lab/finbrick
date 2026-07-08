"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import Header from "../components/Header";


export default function PopularPage(){


  const [posts,setPosts] = useState<any[]>([]);



  useEffect(()=>{

    loadPopular();

  },[]);




  async function loadPopular(){


    const {data}=await supabase

      .from("posts")

      .select(`
        id,
        title,
        category,
        views,
        created_at,
        profiles(
          nickname
        ),
        likes(
          id
        )
      `)

      .order("views",{

        ascending:false

      })

      .limit(20);



    const sorted = (data || []).sort(

      (a,b)=>

      (b.likes?.length || 0) + (b.views || 0)

      -

      ((a.likes?.length || 0) + (a.views || 0))

    );



    setPosts(sorted);


  }





  return(

    <main>


      <Header />



      <section className="hero">


        <h1>

          🔥 인기글

        </h1>



        <p>

          지금 가장 많은 관심을 받고 있는 이야기

        </p>


      </section>





      <section>


        <h2 className="section-title">

          TOP 20

        </h2>





        {

        posts.map((post,index)=>(



          <Link

            key={post.id}

            href={`/community/post/${post.id}`}

            style={{

              color:"white",

              textDecoration:"none"

            }}

          >


            <div className="card">


              <h3>

                {index + 1}위

                {" · "}

                {post.title}

              </h3>



              <p style={{
                color:"#c1123d"
              }}>

                {post.category}

              </p>




              <p>

                👤 {

                post.profiles?.nickname || "익명"

                }

              </p>




              <small style={{
                color:"#777"
              }}>


                ❤️ {post.likes?.length || 0}

                {"  "}

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