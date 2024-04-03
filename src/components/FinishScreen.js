function FinishScreen({ points, maxPossiblePoints }) {
  const perc = (points / maxPossiblePoints) * 100;
  return (
    <p className="result">
      You scored <strong>{points}</strong> out of {maxPossiblePoints} (
      {Math.ceil(perc)}%)
    </p>
  );
}

export default FinishScreen;
