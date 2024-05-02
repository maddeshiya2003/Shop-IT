import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Reducer, {initialState} from "./providers/reducer.jsx" 
import { StateProvider } from './providers/StateProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    {/* binding App component with stateprovider */}
    <StateProvider initialState={initialState} reducer={Reducer}>
        <App />
    </StateProvider>

  </React.StrictMode>,
)
