import deviceService from '../services/device.service'

export const devices = {
  namespaced: true,
  state: {
    all: {},
    maxTemp: {},
    minTemp: {},
    maxWind: {},
    minWind: {},
    maxHumidity: {},
    minHumidity: {},
    latestTemperatures: {},
    latestHumidities: {},
    latestWinds: {},
    tempHistory: {},
    humidityHistory: {},
    windHistory: {},
    averages: {}
  },
  actions: {
    async getAll ({ commit }) {
      await deviceService.getAll()
        .then(devices => commit('getAllSuccess', devices))
    },
    async getHighestTemperature ({ commit }) {
      await deviceService.getHighestTemperature()
        .then(result => commit('getHighestTemperatureSuccess', result))
    },
    async getSmallestTemperature ({ commit }) {
      await deviceService.getSmallestTemperature()
        .then(result => commit('getSmallestTemperatureSuccess', result))
    },
    async getHighestWind ({ commit }) {
      await deviceService.getHighestWind()
        .then(result => commit('getHighestWindSuccess', result))
    },
    async getSmallestWind ({ commit }) {
      await deviceService.getSmallestWind()
        .then(result => commit('getSmallestWindSuccess', result))
    },
    async getHighestHumidity ({ commit }) {
      await deviceService.getHighestHumidity()
        .then(result => commit('getHighestHumiditySuccess', result))
    },
    async getSmallestHumidity ({ commit }) {
      await deviceService.getSmallestHumidity()
        .then(result => commit('getSmallestHumiditySuccess', result))
    },
    async getLatestTemperatures ({ commit }) {
      await deviceService.getLatestTemperatures()
        .then(results => commit('getLatestTemperaturesSuccess', results))
    },
    async getLatestHumidities ({ commit }) {
      await deviceService.getLatestHumidities()
        .then(results => commit('getLatestHumiditiesSuccess', results))
    },
    async getLatestWinds ({ commit }) {
      await deviceService.getLatestWinds()
        .then(results => commit('getLatestWindsSuccess', results))
    },
    async getTemperatureHistory ({ commit }, deviceId) {
      await deviceService.getTemperatureHistory(deviceId)
        .then(history => commit('getTemperatureHistorySuccess', history))
    },
    async getHumidityHistory ({ commit }, deviceId) {
      await deviceService.getHumidityHistory(deviceId)
        .then(history => commit('getHumidityHistorySuccess', history))
    },
    async getWindHistory ({ commit }, deviceId) {
      await deviceService.getWindHistory(deviceId)
        .then(history => commit('getWindHistorySuccess', history))
    },
    async getAverages ({ commit }, deviceId) {
      await deviceService.getAverages(deviceId)
        .then(history => commit('getAveragesSuccess', history))
    }
  },
  mutations: {
    getAllSuccess (state, devices) {
      state.all = { items: devices }
    },
    getHighestTemperatureSuccess (state, result) {
      state.maxTemp = result
    },
    getSmallestTemperatureSuccess (state, result) {
      state.minTemp = result
    },
    getHighestWindSuccess (state, result) {
      state.maxWind = result
    },
    getSmallestWindSuccess (state, result) {
      state.minWind = result
    },
    getHighestHumiditySuccess (state, result) {
      state.maxHumidity = result
    },
    getSmallestHumiditySuccess (state, result) {
      state.minHumidity = result
    },
    getLatestTemperaturesSuccess (state, results) {
      state.latestTemperatures = results
    },
    getLatestHumiditiesSuccess (state, results) {
      state.latestHumidities = results
    },
    getLatestWindsSuccess (state, results) {
      state.latestWinds = results
    },
    getTemperatureHistorySuccess (state, history) {
      state.tempHistory = history
    },
    getHumidityHistorySuccess (state, history) {
      state.humidityHistory = history
    },
    getWindHistorySuccess (state, history) {
      state.windHistory = history
    },
    getAveragesSuccess (state, history) {
      state.averages = history
    }
  }
}
