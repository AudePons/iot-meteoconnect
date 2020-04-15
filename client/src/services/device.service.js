import axios from 'axios'
const API_URL = 'http://localhost:8091/api/devices/'

class JobService {
  getAll () {
    return axios
      .get(API_URL).then(response => {
        return response.data
      })
  }

  getLatestTemperatures () {
    return axios
      .get(API_URL + 'latest/temperature').then(response => {
        return response.data
      })
  }

  getLatestHumidities () {
    return axios
      .get(API_URL + 'latest/humidity').then(response => {
        return response.data
      })
  }

  getLatestWinds () {
    return axios
      .get(API_URL + 'latest/wind').then(response => {
        return response.data
      })
  }

  getHighestTemperature () {
    return axios
      .get(API_URL + 'temperature/highest').then(response => {
        return response.data
      })
  }

  getSmallestTemperature () {
    return axios
      .get(API_URL + 'temperature/smallest').then(response => {
        return response.data
      })
  }

  getHighestHumidity () {
    return axios
      .get(API_URL + 'humidity/highest').then(response => {
        return response.data
      })
  }

  getSmallestHumidity () {
    return axios
      .get(API_URL + 'humidity/smallest').then(response => {
        return response.data
      })
  }

  getHighestWind () {
    return axios
      .get(API_URL + 'wind/highest').then(response => {
        return response.data
      })
  }

  getSmallestWind () {
    return axios
      .get(API_URL + 'wind/smallest').then(response => {
        return response.data
      })
  }

  getById (deviceId) {
    return axios
      .get(API_URL + deviceId).then(response => {
        return response.data
      })
  }

  getHumidityHistory (deviceId) {
    return axios
      .get(API_URL + deviceId + '/history/humidity/').then(response => {
        return response.data
      })
  }

  getTemperatureHistory (deviceId) {
    return axios
      .get(API_URL + deviceId + '/history/temperature/').then(response => {
        return response.data
      })
  }

  getWindHistory (deviceId) {
    return axios
      .get(API_URL + deviceId + '/history/wind/').then(response => {
        return response.data
      })
  }

  getAverages (deviceId) {
    return axios
      .get(API_URL + deviceId + '/averages/').then(response => {
        return response.data
      })
  }
}

export default new JobService()
