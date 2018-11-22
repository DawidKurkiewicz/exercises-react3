import React from 'react'

import Counter from './Counter'
import Form from './Form'

const App = (props) => (
  <div>
    <Counter 
      startValue={5}
      min={-10}
      max={10}
    />
    <Form />
  </div>
)

export default App