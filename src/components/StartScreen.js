function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcoome to The NBA Quiz!</h2>
      <h3>{numQuestions} questions to test your knowledge!</h3>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="btn btn-ui"
      >
        Let's start
      </button>
    </div>
  );
}

export default StartScreen;
