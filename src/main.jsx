import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <div className="w-screen h-screen p-0 m-0 flex justify-center items-center">
    <App />
  </div>
)
