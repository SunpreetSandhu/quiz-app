function FinishScreen({ points, maxPossiblePoints }) {
  const perc = (points / maxPossiblePoints) * 100;
  return (
    <p>
      You scored <strong>{points}</strong> out of {maxPossiblePoints}
    </p>
  );
}

export default FinishScreen;
