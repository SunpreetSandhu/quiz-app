function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>Welcoome to The React Quiz!</h2>
      <p>{numQuestions} questions to test your react skills!</p>
      <button className="btn btn-ui">Let's start</button>
    </div>
  );
}

export default StartScreen;
