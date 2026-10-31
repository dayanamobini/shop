import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <h1>deva</h1>
      <p className="lead">React + TypeScript + Vite</p>

      <button type="button" className="counter" onClick={() => setCount((c) => c + 1)}>
        count is {count}
      </button>

      <p className="hint">
        Edit <code>src/App.tsx</code> and save to test hot module replacement.
      </p>
    </main>
  )
}
