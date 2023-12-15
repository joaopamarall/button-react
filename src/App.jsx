import './App.css'

function HandleClick() {
  const alertBtn = () => {
    window.alert('Você clicou no botão!');
  };
  
  return (
    <>
      <button onClick={alertBtn}>
        Clique-me!
      </button>
    </>
  )
}

function App() {
  
  return (
    <>
      <h1>Teste para vaga de estágio em React!</h1>
      <h3>Questão 1</h3>
      <div className="card">
        <HandleClick />
      </div>
    </>
  )
}

export default App
