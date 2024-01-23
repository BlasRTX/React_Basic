
import './App.css';

const App = () => {
  const name = 'Obi Wan';
  const isNameShowing = false;
  return (
    <div className="App">
      <h1>Hello there!</h1>
      {name ? (
        <>
          test
        </>
      ) : (
        <>
          <h1>General {isNameShowing ? name : 'Kenobi'}!</h1>
          <h2>I will do what I must do</h2>
        </>
      )}
    </div>
  );
}

export default App;
