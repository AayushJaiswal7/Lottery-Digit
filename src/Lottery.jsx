import { useState } from "react";
import "./Lottery.css";
import { genTicket, sum } from "./helper";
import TicketDisplay from "./TicketDisplay";
import WinningMessage from "./WinningMessage";
import LotteryButton from "./LotteryButton";

export default function Lottery() {
   // State is lifted here (parent component)
   const [ticket, setTicket] = useState(genTicket(3));

   // Derived state calculated at parent level
   const isWinning = sum(ticket) === 15;

   // Event handler defined at parent level
   const handleTicketGenerate = () => {
      setTicket(() => {
         return genTicket(3);
      });
   };

   return (
      <>
         <div>
            <h1>Lottery Game !</h1>
            {/* Child component receives state as prop */}
            <WinningMessage isWinning={isWinning} />

            {/* Child component receives state as prop */}
            <TicketDisplay ticket={ticket} />

            {/* Child component receives handler as prop */}
            <LotteryButton onGetNewTicket={handleTicketGenerate} />
         </div>
      </>
   );
}