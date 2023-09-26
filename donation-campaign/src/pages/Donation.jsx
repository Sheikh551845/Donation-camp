import React, { useEffect, useState } from "react";
import DonatedCard from "../components/DonatedCard";

export default function Donation() {

  const [Donated, setDonated] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow,setIsShow] = useState(false)

  

  useEffect(() => {
    const DonatedCards = JSON.parse(localStorage.getItem("Donated"));
    
   
    if (DonatedCards) {
      setDonated(DonatedCards);

    } else {
      setNoFound("No Donation Added Yet");
    }
  }, []);

  // console.log(Donated);

  


  // console.log(isShow);

  return (
    <div className="pb-10">
       {noFound ? (
        <p className="h-[80vh] flex justify-center items-center">{noFound}</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ml-16 md:ml-24 lg:ml-24 my-10">
            {
                isShow ? Donated.map((donation) => (
                    <DonatedCard key={donation.id} donation={donation}></DonatedCard>
                  )) 
                  
                  : Donated.slice(0,4).map((donation) => (
                    <DonatedCard key={donation.id} donation={donation}></DonatedCard>
                  ))
            }
          </div>

          {Donated.length > 4 && <button onClick={()=>setIsShow(!isShow)} className="px-5 py-3 bg-green-500 text-white rounded-lg block mx-auto">
            {isShow ? "See less" : "See more"}
          </button>}
        </div>
      )}
    </div>
  )
}
