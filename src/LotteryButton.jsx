export default function LotteryButton({ onGetNewTicket }) {
  return (
    <button className="btn" onClick={onGetNewTicket}>
      Get New Ticket
    </button>
  );
}
