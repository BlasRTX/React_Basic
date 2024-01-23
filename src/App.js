import './App.css';

/**
 * Create components, other name to say are properties
 * @returns 
 */

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.lastname}</h2>
    </>
  )
}

const App = () => {
  return (
    <div className="App">
      <Person name={'Cristiano'} lastname={'Ronaldo'} />
      <Person name={'Erling'} lastname={'Halland'} />
      <Person name={'Jude'} lastname={'Belingham'} />
    </div>
  );
}

export default App;
