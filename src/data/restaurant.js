import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantAPI {
  static async getList() {
    const response = await fetch(API_ENDPOINT.getRestaurantList)
    const responseJson = await response.json()
    return responseJson.restaurants
  }

  static async getDetail(id) {
    const response = await fetch(API_ENDPOINT.getRestaurantDetail(id))
    const responseJson = await response.json()
    return responseJson.restaurant
  }
}

export default RestaurantAPI
