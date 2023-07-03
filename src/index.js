import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { NftProvider } from './store/NftContext'
import NftContextProvider from './contexts/NftContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <NftContextProvider>
    <React.StrictMode>
      <NftProvider>
        <App />
      </NftProvider>
    </React.StrictMode>
  </NftContextProvider>
)

reportWebVitals()
