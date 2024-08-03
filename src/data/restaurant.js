import API_ENDPOINT from '../globals/api-endpoint'

class RestaurantAPI {
  static async getList() {
    const response = await fetch(API_ENDPOINT.getRestaurantList)
    const responseJson = await response.json()
    return responseJson.restaurants
  }
}

export default RestaurantAPI
