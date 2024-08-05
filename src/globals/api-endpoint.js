import CONFIG from './config'

const API_ENDPOINT = {
  getRestaurantImage: (pictureId) => {
    return `${CONFIG.BASE_URL}/images/large/${pictureId}`
  },
  getRestaurantList: `${CONFIG.BASE_URL}/list`,
  getRestaurantDetail: (id) => {
    return `${CONFIG.BASE_URL}/detail/${id}`
  },
  addReview: `${CONFIG.BASE_URL}/review`
}

export default API_ENDPOINT
