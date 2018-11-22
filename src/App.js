import React from 'react'
import Counter from './Counter'

const App = () => (
  <div>
    <Counter
      startValue={5}
      min={-10}
      max={10}
    />
  </div>
)

export default App
