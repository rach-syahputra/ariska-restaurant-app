import routes from '../../routes/routes'
import UrlParser from '../../routes/url-parser'

class App {
  constructor({ content }) {
    this._content = content
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
