import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './index.css'
import ReactDOM from 'react-dom/client'
import App from './App'

const body = document.querySelector('#body')
body.className = 'bg-dark'

const root = document.querySelector('#root')
ReactDOM.createRoot(root).render(<App />)