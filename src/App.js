import { useState } from 'react';
import './App.css';

function App() {
  const [ika, setIka] = useState('')
  const [sykerajat, setSykerajat] = useState('')

  const laske = (e) => {
    e.preventDefault()
    const ylaraja = (220 - ika) * 0.85
    const alaraja = (220 - ika) * 0.65
    setSykerajat(parseInt(alaraja)+" - "+parseInt(ylaraja))
  }

  return (
    <div>
      <h3>Sykkeen ylä- ja alaraja laskuri</h3>
      <form onSubmit={laske}>
        <div>
          <label>Ikä</label> <br />
          <input type="number" value={ika} onChange={e =>setIka(e.target.value)} />
        </div>
        <div>
          <label>Sykerajat</label> <br />
          <output>{sykerajat}</output>
          {/* <input type="string" value={sykerajat} onChange={e =>setSykerajat(e.target.value)} /> */}
        </div>
        <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
