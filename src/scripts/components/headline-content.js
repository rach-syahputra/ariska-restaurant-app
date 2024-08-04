class HeadlineContent extends HTMLElement {
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
      <article class="headline">
        <figure class="headline__figure">
          <img src="images/heros/hero-image_4.jpg" alt="A beautiful plated dish with flowers" />
          <figcaption>A beautiful plated dish with flowers</figcaption>
        </figure>
        <div class="headline__content">
          <h1 class="headline__title"> Craving something Insta-worthy?</h1>
          <p class="headline__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eum
            facere nostrum officiis qui quidem ratione similique, soluta veniam
            voluptatum. Accusantium ad amet asperiores, aut commodi corporis dicta
            distinctio ducimus expedita itaque laudantium magnam maiores, nobis
            obcaecati officiis provident quasi qui quos repellat rerum saepe sint soluta
            veniam vero vitae, voluptas voluptate voluptatem. Esse nobis non nulla optio
            vero. Laudantium!
          </p>
          <button class="headline__button">Read More</button>
        </div>
      </article>
    `
  }
}

customElements.define('headline-content', HeadlineContent)
