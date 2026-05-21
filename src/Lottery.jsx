import { useState } from "react";
import "./Lottery.css"
import { genTicket,sum } from "./helper";
export default function Lottery(){
   let [ticket,setTicket]=useState(genTicket(3));
   let isWinning =sum(ticket)===15;
   
   function handleTicketGenerate(){
      setTicket(()=>{
         return genTicket(3)
      })



   }

   return(
      <>
      <div>
         <h1>Lottery Game !</h1>
         <h3>{isWinning && "Congratulation ,you won! "}</h3>
         <div className="ticket">
            <h4>Lottery Ticket =</h4>
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
         </div>
            <button className="btn" onClick={handleTicketGenerate}>Get New Ticket</button>
      </div>
      </>
   );
}