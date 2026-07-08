"use client";

export default function MarketCard(){

  const markets = [

    {
      name:"🇺🇸 나스닥",
      price:"18,200",
      change:"+1.2%"
    },

    {
      name:"🇺🇸 S&P500",
      price:"5,700",
      change:"+0.5%"
    },

    {
      name:"🚗 테슬라",
      price:"320",
      change:"-0.8%"
    }

  ];


  return(

    <div className="grid">

      {
        markets.map((item)=>(

          <div className="card" key={item.name}>

            <h3>
              {item.name}
            </h3>

            <h2>
              {item.price}
            </h2>

            <p>
              {item.change}
            </p>

          </div>

        ))
      }

    </div>

  );

}