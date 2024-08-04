class HeroElement extends HTMLElement {
  constructor() {
    super()

    this.render()
  }

  _emptyContent() {
    this.innerHTML = ''
  }

  render() {
    this._emptyContent()

    this.innerHTML += `
      <div class="hero"></div>
    `
  }
}

customElements.define('hero-element', HeroElement)
