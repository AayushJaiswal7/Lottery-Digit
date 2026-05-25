import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Lottery from './Lottery.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <Lottery />
  </StrictMode>,
)
