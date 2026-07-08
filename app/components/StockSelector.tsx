"use client";


type Props = {

  symbol:string;

  setSymbol:(symbol:string)=>void;

};



const stocks = [

  {
    symbol:"NASDAQ:AAPL",
    name:"애플",
    price:185
  },

  {
    symbol:"NASDAQ:TSLA",
    name:"테슬라",
    price:250
  },

  {
    symbol:"NASDAQ:NVDA",
    name:"엔비디아",
    price:170
  },


];



export default function StockSelector({

  symbol,

  setSymbol

}:Props){



  return (

    <section className="card">


      <h2>

        📊 종목 선택

      </h2>



      <select

        value={symbol}

        onChange={(e)=>
          setSymbol(e.target.value)
        }

        style={{

          padding:"10px",

          fontSize:"16px"

        }}

      >


        {
          stocks.map((item)=>(

            <option

              key={item.symbol}

              value={item.symbol}

            >

              {item.name}

            </option>

          ))
        }


      </select>



    </section>

  );

}