import CONFIG from './config'

const API_ENDPOINT = {
  getRestaurantImage: (pictureId) => {
    return `${CONFIG.BASE_URL}/images/large/${pictureId}`
  },
  getRestaurantList: `${CONFIG.BASE_URL}/list`
}

export default API_ENDPOINT
