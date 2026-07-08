"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";


export default function AccountCard(){


  const [balance,setBalance] = useState(0);



  useEffect(()=>{

    loadAccount();

  },[]);





  async function loadAccount(){


    const {

      data:{
        user

      }

    } = await supabase.auth.getUser();





    if(!user) return;





    const {data:account}=await supabase

      .from("accounts")

      .select("*")

      .eq(

        "user_id",

        user.id

      )

      .single();






    if(account){


      setBalance(account.balance);


      return;

    }





    const {data:newAccount}=await supabase

      .from("accounts")

      .insert({

        user_id:user.id,

        balance:10000000

      })

      .select()

      .single();





    if(newAccount){

      setBalance(newAccount.balance);

    }



  }





  return(


    <div className="card">


      <h2>

        💰 내 모의투자

      </h2>



      <h1>

        ₩

        {

        balance.toLocaleString()

        }

      </h1>



      <p>

        시작 투자금 10,000,000원

      </p>


    </div>


  );


}