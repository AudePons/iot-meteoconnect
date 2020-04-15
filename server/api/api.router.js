const {
  getDevices,
  getDeviceById,
  getDeviceHumidityHistory,
  getDeviceTemperatureHistory,
  getDeviceWindHistory,
  getDeviceAverages,
  getDeviceWithHighestHumidity,
  getDeviceWithHighestTemperature,
  getDeviceWithHighestWind,
  getDeviceWithSmallestHumidity,
  getDeviceWithSmallestTemperature,
  getDeviceWithSmallestWind,
  getLatestTemperatures,
  getLatestHumidities,
  getLatestWinds
} = require("./api.controller")

const router = require("express").Router()

router.get("/devices/", getDevices)

router.get("/devices/:deviceId", getDeviceById)

router.get("/devices/latest/temperature", getLatestTemperatures)
router.get("/devices/latest/humidity", getLatestHumidities)
router.get("/devices/latest/wind", getLatestWinds)

router.get("/devices/:deviceId/history/humidity/", getDeviceHumidityHistory)
router.get("/devices/:deviceId/history/temperature/", getDeviceTemperatureHistory)
router.get("/devices/:deviceId/history/wind/", getDeviceWindHistory)

router.get("/devices/:deviceId/averages/", getDeviceAverages)

router.get("/devices/temperature/highest", getDeviceWithHighestTemperature)
router.get("/devices/temperature/smallest", getDeviceWithSmallestTemperature)

router.get("/devices/humidity/highest", getDeviceWithHighestHumidity)
router.get("/devices/humidity/smallest", getDeviceWithSmallestHumidity)

router.get("/devices/wind/highest", getDeviceWithHighestWind)
router.get("/devices/wind/smallest", getDeviceWithSmallestWind)


module.exports = router
