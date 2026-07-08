import { supabase } from "../lib/supabase";


export default async function TestPage(){


  const { data, error } = await supabase

    .from("posts")

    .select("*");




  if(error){

    return(

      <main>

        <h1>

          ❌ 연결 실패

        </h1>


        <p>

          {error.message}

        </p>

      </main>

    );

  }




  return(


    <main>


      <h1>

        ✅ Supabase 연결 성공

      </h1>



      <h2>

        게시글 데이터

      </h2>




      {

      data?.map((post)=>(


        <div

        key={post.id}

        >


          <h3>

            {post.title}

          </h3>


          <p>

            {post.opinion}

          </p>


        </div>


      ))

      }



    </main>


  );

}