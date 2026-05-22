export default function WinningMessage({ isWinning }) {
  return (
    <>
      {isWinning && (
        <h3>Congratulation, you won!</h3>
      )}
    </>
  );
}
