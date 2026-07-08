"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Header from "../../../components/Header";


export default function PostPage({

  params

}:{

  params:{
    id:string
  }

}){


  const [post,setPost]=useState<any>(null);

  const [likes,setLikes]=useState(0);

  const [comments,setComments]=useState<any[]>([]);

  const [comment,setComment]=useState("");





  useEffect(()=>{

    loadPost();

  },[]);






  async function loadPost(){


    const {data:postData}=await supabase

      .from("posts")

      .select(`

        *,

        profiles(

          nickname,

          badge,

          rank,

          score

        )

      `)

      .eq("id",params.id)

      .single();





    setPost(postData);





    await supabase

      .from("posts")

      .update({

        views:(postData.views || 0)+1

      })

      .eq("id",params.id);







    const {count}=await supabase

      .from("likes")

      .select("*",{

        count:"exact",

        head:true

      })

      .eq("post_id",params.id);




    setLikes(count || 0);







    const {data:commentData}=await supabase

      .from("comments")

      .select("*")

      .eq("post_id",params.id)

      .order("created_at",{

        ascending:true

      });




    setComments(commentData || []);


  }








  async function likePost(){



    const {

      data:{

        user

      }

    }=await supabase.auth.getUser();





    if(!user){

      alert("로그인이 필요합니다.");

      return;

    }





    await supabase

      .from("likes")

      .insert({

        post_id:params.id,

        user_id:user.id

      });





    setLikes(likes+1);


  }








  async function addComment(){



    const {

      data:{

        user

      }

    }=await supabase.auth.getUser();





    if(!user){

      alert("로그인이 필요합니다.");

      return;

    }





    if(!comment.trim()) return;





    await supabase

      .from("comments")

      .insert({

        post_id:params.id,

        user_id:user.id,

        content:comment

      });





    setComment("");

    loadPost();


  }








  if(!post){

    return(

      <main>

        <Header />

        불러오는 중...

      </main>

    )

  }







  return(


    <main>


      <Header />





      <section className="card">



        <p>

          {post.category || "📈 투자"}

        </p>





        <h1>

          {post.title}

        </h1>





        <p>


          {

          post.profiles?.badge || "🐜"

          }


          {" "}


          {


          post.profiles?.nickname || "익명"

          }



        </p>





        <small>

          {

          post.profiles?.rank || "개미 투자자"

          }


          {" · "}


          ⭐ {

          post.profiles?.score || 0

          }


        </small>





        <hr />





        <p>

          {post.content}

        </p>





        <button onClick={likePost}>

          ❤️ 좋아요 {likes}

        </button>



      </section>









      <section>


        <h2 className="section-title">

          💬 댓글

        </h2>





        <div className="card">


          <input

          placeholder="댓글 입력"

          value={comment}

          onChange={(e)=>

            setComment(e.target.value)

          }

          />



          <button onClick={addComment}>

            등록

          </button>


        </div>






        {

        comments.map((item)=>(


          <div

          className="card"

          key={item.id}

          >

            {item.content}

          </div>


        ))

        }



      </section>



    </main>


  );

}