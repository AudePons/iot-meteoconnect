const pool = require("../config/database");

module.exports = {
  getDevices: callBack => {
    pool.query("SELECT deviceId, zone, status FROM device", [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getLatestTemperatures: callBack => {
    pool.query("SELECT temperatureId, celsius, created_at, deviceId FROM temperature WHERE created_at IN (SELECT MAX(created_at) from temperature)", [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getLatestHumidities: callBack => {
    pool.query("SELECT humidityId, rate, created_at, deviceId FROM humidity WHERE created_at IN (SELECT MAX(created_at) from humidity)", [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getLatestWinds: callBack => {
    pool.query("SELECT windId, speed, created_at, deviceId FROM wind WHERE created_at IN (SELECT MAX(created_at) from wind)", [], (error, results, fields) => {
      if (error) {
        return callBack(error);
      }
      return callBack(null, results);
    });
  },
  getDeviceById: (deviceId, callBack) => {
    pool.query("SELECT deviceId, zone, status FROM device WHERE deviceId = ?",
      [deviceId],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      });
  },
  getDeviceHumidityHistory: (deviceId, callBack) => {
    pool.query(
      "SELECT humidityId, rate, created_at FROM humidity WHERE deviceId = ? ORDER BY created_at",
      [deviceId],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDeviceTemperatureHistory: (deviceId, callBack) => {
    pool.query(
      "SELECT temperatureId, celsius, created_at FROM temperature WHERE deviceId = ? ORDER BY created_at",
      [deviceId],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDeviceWindHistory: (deviceId, callBack) => {
    pool.query(
      "SELECT windId, speed, created_at FROM wind WHERE deviceId = ? ORDER BY created_at",
      [deviceId],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results);
      }
    );
  },
  getDeviceAverages: (deviceId, callBack) => {
    pool.query(
      "SELECT ROUND(AVG(speed)) as speed_avg, ROUND(AVG(celsius)) as celsius_avg, ROUND(AVG(rate)) as humidity_avg FROM wind, temperature, humidity WHERE wind.deviceId = temperature.deviceId AND wind.deviceId = humidity.deviceId AND wind.deviceId = ?",
      [deviceId],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      }
    )
  },
  getDeviceWithHighestTemperature: callBack => {
    pool.query("SELECT temperatureId, celsius, created_at, deviceId FROM temperature WHERE celsius IN (SELECT MAX(celsius) FROM temperature)",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      });
  },
  getDeviceWithHighestHumidity: callBack => {
    pool.query("SELECT humidityId, rate, created_at, deviceId FROM humidity WHERE rate IN (SELECT MAX(rate) FROM humidity)",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      });
  },
  getDeviceWithHighestWind: callBack => {
    pool.query("SELECT windId, speed, created_at, deviceId FROM wind WHERE speed IN (SELECT MAX(speed) FROM wind)",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      });
  },
  getDeviceWithSmallestTemperature: callBack => {
    pool.query("SELECT temperatureId, celsius, created_at, deviceId FROM temperature WHERE celsius IN (SELECT MIN(celsius) FROM temperature)",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      });
  },
  getDeviceWithSmallestHumidity: callBack => {
    pool.query("SELECT humidityId, rate, created_at, deviceId FROM humidity WHERE rate IN (SELECT MIN(rate) FROM humidity)",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      });
  },
  getDeviceWithSmallestWind: callBack => {
    pool.query("SELECT windId, speed, created_at, deviceId FROM wind WHERE speed IN (SELECT MIN(speed) FROM wind)",
      [],
      (error, results, fields) => {
        if (error) {
          return callBack(error);
        }
        return callBack(null, results[0]);
      });
  },
}
