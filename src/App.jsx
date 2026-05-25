import Lottery from "./Lottery.jsx";


export default function App() {

   let winCondition = (ticket) => {
      return ticket.every((num) => num === ticket[0]);
   };

   return (
      <>
         <Lottery n={3} winCondition={winCondition} />
      </>
   );

}