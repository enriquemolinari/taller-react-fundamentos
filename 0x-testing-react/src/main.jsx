import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import WithAjax from './components/WithAjax.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Counter /> */}
    <WithAjax />
  </StrictMode>,
)
