import './App.css';

const App = () => {
  const handleClick = () => {
    console.log('button clicked');
  };

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
};

export default App;
