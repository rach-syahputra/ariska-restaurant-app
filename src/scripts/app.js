import routes from '../routes/routes'
import UrlParser from '../routes/url-parser'
import DrawerInitiator from '../utils/drawer-initiator'

class App {
  constructor({ button, drawer, content }) {
    this._button = button
    this._drawer = drawer
    this._content = content

    this._initialAppShell()
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content
    })
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]
    this._content.innerHTML = await page.render()
    await page.afterRender()
    this._skipToLinkInit()
  }

  _skipToLinkInit() {
    const skipLinkElement = document.querySelector('.skip-link')
    skipLinkElement.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        document.querySelector('#mainContent').focus()
      }
    })

    skipLinkElement.addEventListener('click', (event) => {
      event.preventDefault()
      document.querySelector('#mainContent').focus()
    })
  }
}

export default App
