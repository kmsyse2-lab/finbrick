"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Header from "../../components/Header";


export default function EditProfilePage(){

  const router = useRouter();

  const [nickname,setNickname] = useState("");

  const [loading,setLoading] = useState(false);



  useEffect(()=>{

    loadProfile();

  },[]);



  async function loadProfile(){


    const {
      data:{
        user
      }
    } = await supabase.auth.getUser();



    if(!user){

      router.push("/login");

      return;

    }



    const {data}=await supabase

      .from("profiles")

      .select("nickname")

      .eq("id",user.id)

      .maybeSingle();



    setNickname(

      data?.nickname || ""

    );


  }





  async function updateNickname(){


    if(!nickname.trim()){

      alert("닉네임을 입력해주세요.");

      return;

    }



    setLoading(true);



    const {
      data:{
        user
      }
    } = await supabase.auth.getUser();



    if(!user){

      return;

    }



    const {error}=await supabase

      .from("profiles")

      .update({

        nickname:nickname

      })

      .eq("id",user.id);





    if(error){

      alert(error.message);

      setLoading(false);

      return;

    }




    alert("닉네임 변경 완료");

    router.push("/profile");


  }





  return(

    <main>


      <Header />



      <section className="card">


        <h1>

          닉네임 변경

        </h1>



        <p style={{
          color:"#888"
        }}>

          핀브릭에서 사용할 이름을 설정하세요.

        </p>




        <input

          value={nickname}

          placeholder="닉네임"

          onChange={(e)=>

            setNickname(e.target.value)

          }

        />



        <button

          onClick={updateNickname}

          disabled={loading}

        >

          {

            loading

            ?

            "저장 중..."

            :

            "저장하기"

          }

        </button>



      </section>



    </main>

  );

}