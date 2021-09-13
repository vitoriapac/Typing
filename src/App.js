import React from 'react'

const App = () => {
  return (
    <div className="container">
      <div className="valid-keys">
        <span className="matched">Vito</span>
        <span className="remaider">ria</span>
      </div>
      <div className="typed-keys">asdfvitoasdf</div>
      <div className="completed-words">
        <ol>
          <li>Cidade</li>
          <li>Casa</li>
          <li>Logo</li>
        </ol>
      </div>
    </div>
  )
}

export default App
