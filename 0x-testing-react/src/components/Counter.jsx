import { useState } from 'react'
import '../App.css'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <div>
          <h3>Click en el botón para incrementar el contador</h3>
        </div>
        <button
          aria-label="increment-button"
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <button
          aria-label="reset-button"
          type="button"
          className="counter"
          onClick={() => setCount(() => 0)}
        >
          Reset
        </button>
      </section>
    </>
  )
}

export default Counter




