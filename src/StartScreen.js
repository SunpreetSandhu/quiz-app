function StartScreen({ numQuestions, dispatch }) {
  return (
    <div className="start">
      <h2>Welcoome to The React Quiz!</h2>
      <p>{numQuestions} questions to test your react skills!</p>
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
