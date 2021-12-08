import './App.css';
import MensajeAlt from './MensajeAlt.js'
function App() {
  const mensaje = "Hola Cabrón"
  const a = 2
  const b = 3
  const Description = () => {
    return <h2>Un cohete sube al cielo...</h2>
  }

  return (
    <div className="App">
      <MensajeAlt color='red' message='Pues aquí ando'/>
      <MensajeAlt color='yellow' message='haciendo un curso'/>
      <MensajeAlt color='purple' message='de React...'/>
      <MensajeAlt message='y tú?'/>
      <Description />
      <h1>... al compás de las campanas.</h1>
      <strong>De BCN a NY la que vende todo</strong>
      <div>
        <p>El resultado es:</p>
        {a+b}
        {mensaje + ', llaves son evaluación'}
      </div>   
    </div>
  );
}

export default App;
