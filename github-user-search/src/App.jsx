import Header from './components/Header'
import { testApi } from './services/api'   // import from services

function App() {
  return (
    <div>
      <h1>GitHub User Search App</h1>
      <Header />
      <p>{testApi()}</p>
    </div>
  )
}

export default App
