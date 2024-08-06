import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'
import App from './views/app'
import './components/index.js'

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
})
