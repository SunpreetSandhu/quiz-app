function FinishScreen({ points, maxPossiblePoints, highscore }) {
  const perc = (points / maxPossiblePoints) * 100;

  let emoji;
  if (perc === 100) emoji = "🥇";
  if (perc >= 80 && perc < 100) emoji = "🎉";
  if (perc >= 50 && perc < 80) emoji = "🙃";
  if (perc >= 0 && perc < 50) emoji = "🤨";
  if (perc === 0) emoji = "🤦‍♂️";
  return (
    <>
      <p className="result">
        <span>{emoji}</span>You scored <strong>{points}</strong> out of{" "}
        {maxPossiblePoints} ({Math.ceil(perc)}%)
      </p>
      <p className="highscore"> (Highscore: {highscore} points)</p>
    </>
  );
}

export default FinishScreen;
