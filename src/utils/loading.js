const Loading = {
  show(container) {
    const loadingSpinner = document.createElement('loading-spinner')

    container.appendChild(loadingSpinner)
  },

  hide(container) {
    const loadingSpinner = container.querySelector('loading-spinner')

    loadingSpinner.remove()
  }
}

export default Loading
