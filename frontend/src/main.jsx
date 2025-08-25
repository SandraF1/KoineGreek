import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'  // <- import BrowserRouter

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/KoineGreek">  {/* <- set basename to your repo name */}
      <App />
    </BrowserRouter>
  </StrictMode>,
)
