import './App.css'

function App() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <>
      <h1>Teste para vaga de estágio em React!</h1>
      <div className="card">
      <button onClick={handleClick}>
        Clique-me!
      </button>
      </div>
    </>
  )
}

export default App
