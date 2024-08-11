import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.scss'
import App from './app'
import './components/index.js'
import swRegister from '../utils/sw-register.js'

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', async () => {
  app.renderPage()
  await swRegister()
})
