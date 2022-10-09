import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = document.querySelector('#root')
root.className = 'bg-dark'
ReactDOM.createRoot(root).render(<App />)