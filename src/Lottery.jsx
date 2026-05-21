import { useState } from "react";
export default function Lottery(){
   let [ticket,setTicket]=useState([0,0,0])
   
   
   let handleTicketGenerate=()=>{

   }

   return(
      <>
      <div>
         <h1>Lottery</h1>
         <div>
            <h4>Lottery Ticket =</h4>
            <button onClick={handleTicketGenerate}>Get New Ticket</button>
         </div>
      </div>
      </>
   );
}