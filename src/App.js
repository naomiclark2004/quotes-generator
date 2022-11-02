import './App.css';
import React, { useState, } from 'react';
function App() {
  const [quote, setQuote] = useState('')
  const [random, setRandom] = useState(0)
  async function fetchQuote() {
    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => response.json())
      .then(
        (result) => {
          const res = result.quotes;
          console.log(res)
          const ran = Math.round((Math.random() * 100))
          setRandom(ran)
          var q = res[random]
          console.log(q)
          setQuote(q)
        }
      )
  }

  return (
    <div className="container">
      <h1>Quote Generator</h1>
      <div className="quote">
        <p>{quote.quote}</p>
        <p>{quote.author}</p>
      </div>
      <button onClick={fetchQuote}>PUSH</button>
    </div>
  )
}

export default App;
