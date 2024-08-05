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

  static async addReview(customer) {
    console.log('customer request', customer)
    const response = await fetch(API_ENDPOINT.addReview, {
      method: 'POST',
      body: JSON.stringify(customer),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const responseJson = await response.json()
    return responseJson.customerReviews
  }
}

export default RestaurantAPI
