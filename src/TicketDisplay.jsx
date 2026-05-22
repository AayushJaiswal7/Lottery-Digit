export default function TicketDisplay({ ticket }) {
  return (
    <div className="ticket">
      <h4>Lottery Ticket =</h4>
      <span>{ticket[0]}</span>
      <span>{ticket[1]}</span>
      <span>{ticket[2]}</span>
    </div>
  );
}
