import { useState } from 'react';
import './App.css';

type Setups = {
  numbers: boolean;
  letters: boolean;
  symbols: boolean;
}

function App() {
  const [passLength, setPassLength] = useState<number>(1)
  const [setups, setSetups] = useState<Setups>({
    numbers: false,
    letters: false,
    symbols: false
  })
  const [password, setPassword] = useState<string>('')

  const handleLength = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isFinite(+e.target.value) && +e.target.value <= 16 && +e.target.value >= 0) {
      setPassLength(+e.target.value)
    }
  }

  const handleGenerateButton = () => {
    const isUncheckedAll = Object.values(setups).every(item => item === false)
    if (!isUncheckedAll && passLength > 0) {
      const numbers = '0123456789'
      const letters = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
      const symbols = ';\'\\:.<>,?/}{[]+=_-)(*&^%$#@!~`|"'
      let passwordBase = ''
        
    }
  }

  return (
    <div className="App">
      <div className="result">

      </div>
      <div className="setups">
        <h3>I need a <input type="text" value={passLength} onChange={handleLength} /> long password</h3>
        <form>
          <input type="checkbox" id="numbers" checked={setups.numbers} onChange={() => setSetups(prevState => ({
            ...prevState, numbers: !prevState.numbers}
            ))} />
          <label htmlFor="numbers">Include Numbers</label>
          <input type="checkbox" id="letters" checked={setups.letters} onChange={() => setSetups(prevState => ({
            ...prevState, letters: !prevState.letters}
            ))} />
          <label htmlFor="letters">Include Letters</label>
          <input type="checkbox" id="symbols" checked={setups.symbols} onChange={() => setSetups(prevState => ({
            ...prevState, symbols: !prevState.symbols}
            ))} />
          <label htmlFor="symbols">Include Symbols</label>
        </form>
      </div>
      <button onClick={handleGenerateButton}>Generate!</button>
    </div>
  );
}

export default App;
