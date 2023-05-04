import CanvasModel from "./canvas/index.jsx";
import { Customizer } from "./pages/Customizer";
import { Home } from "./pages/Home";
import './index.css'

function App() {
  return (
    <main className={'app transition-all ease-in'}>
        <Home />
        <CanvasModel />
        <Customizer />
    </main>
  )
}

export default App
