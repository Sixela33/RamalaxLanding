import { Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import { DocsPage } from "./pages/DocsPage/Docs"
import Home from "./pages/Home"

function App() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/docs" element={<DocsPage/>} />

      </Routes>
    </div>
  )
}

export default App
