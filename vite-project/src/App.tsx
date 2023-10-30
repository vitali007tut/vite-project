import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import InputField from './components/InputField'

function App() {
  // const [count, setCount] = useState(0)
  const [answer, setAnswer] = useState<string>("")
  const [answerView, setAnswerView] = useState<string>("")

  // useEffect(() => {
  //   localStorage.setItem("test", answer)
  // }, [answer]) 
  const url = "https://swapi.dev/api/people/?search="

  async function request(url: string) {
    setAnswerView("Searching...")
    const response = await fetch(url)
    const result = await response.json()
    const resultStr = JSON.stringify(result.results[0])
    if (result.results[0] != undefined) {
      setAnswerView(resultStr.split(",").join("\n"));
    } else {
      setAnswerView("People not found")
    }
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("searchRequest", answer);
    const urlApi = `${url}${answer}`
    request(urlApi)
    setAnswer("");
  }

  return (
    <>
      <InputField answer={answer} setAnswer={setAnswer} handleSearch={ handleSearch } />
      <p className='answer-view'>
        { answerView }
      </p>
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App
