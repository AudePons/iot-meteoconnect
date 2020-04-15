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
} = require("./api.service");

module.exports = {
  getDevices: (req, res) => {
    getDevices((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);
    });
  },
  getLatestTemperatures: (req, res) => {
    getLatestTemperatures((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);
    });
  },
  getLatestHumidities: (req, res) => {
    getLatestHumidities((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);
    });
  },
  getLatestWinds: (req, res) => {
    getLatestWinds((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);
    });
  },
  getDeviceById: (req, res) => {
    const deviceId = req.params.deviceId;
    getDeviceById(deviceId, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "Record not Found"
        });
      }
      return res.status(200).json(results);
    });
  },
  getDeviceHumidityHistory: (req, res) => {
    const deviceId = req.params.deviceId;
    getDeviceHumidityHistory(deviceId, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "Record not Found"
        });
      }
      return res.status(200).json(results);
    });
  },
  getDeviceTemperatureHistory: (req, res) => {
    const deviceId = req.params.deviceId;
    getDeviceTemperatureHistory(deviceId, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "Record not Found"
        });
      }
      return res.status(200).json(results);
    });
  },
  getDeviceWindHistory: (req, res) => {
    const deviceId = req.params.deviceId;
    getDeviceWindHistory(deviceId, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "Record not Found"
        });
      }
      return res.status(200).json(results);
    });
  },
  getDeviceAverages: (req, res) => {
    const deviceId = req.params.deviceId;
    getDeviceAverages(deviceId, (err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      if (!results) {
        return res.status(404).json({
          success: 0,
          message: "Record not Found"
        });
      }
      return res.status(200).json(results);
    });
  },
  getDeviceWithHighestHumidity: (req, res) => {
    getDeviceWithHighestHumidity((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);
    });
  },
  getDeviceWithHighestTemperature: (req, res) => {
    getDeviceWithHighestTemperature((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);
    });
  },
  getDeviceWithHighestWind: (req, res) => {
    getDeviceWithHighestWind((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);
    });
  },
  getDeviceWithSmallestHumidity: (req, res) => {
    getDeviceWithSmallestHumidity((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);
    });
  },
  getDeviceWithSmallestTemperature: (req, res) => {
    getDeviceWithSmallestTemperature((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);
    });
  },
  getDeviceWithSmallestWind: (req, res) => {
    getDeviceWithSmallestWind((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);
    });
  },
};
