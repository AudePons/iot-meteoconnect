const pool = require("./database");
const axios = require('axios');

module.exports = {
  insertDevicesData: async () => {
    // INSERT DES NOUVEAUX DEVICES
    await axios.get('http://52.14.112.188:3000/api/v1/temperature').then(resp => {
      const temperatures = resp.data.temperature;
      temperatures.forEach(temp => {
        pool.query("INSERT IGNORE INTO device (deviceId, zone, status) VALUES (?,?,null)", [temp.id, temp.zone], (error, results, fields) => {
          if (error) throw error;
          axios.get('http://52.14.112.188:3000/api/v1/ping?device=' + temp.id).then(resp2 => {
            pool.query("UPDATE device SET status=? WHERE deviceId=?", [resp2.data.device, temp.id], (error, results, fields) => {
              if (error) throw error;
            })
          })
        })
      })
    })

    // INSERT DE LA TABLE TEMPERATURE
    axios.get('http://52.14.112.188:3000/api/v1/temperature').then(resp => {
      const temperatures = resp.data.temperature;
      temperatures.forEach(temp => {
        pool.query("SELECT COUNT(temperatureId) as nbTemp FROM temperature WHERE deviceId = ? ", [temp.id], (error, results, fields) => {
          if (error) throw error;
          if (results[0].nbTemp < 20) {
            pool.query("INSERT INTO temperature (celsius, created_at, deviceId) VALUES (?,NOW(),?)", [temp['°C'], temp.id], (error, results, fields) => {
              if (error) throw error;
            });
          } else {
            pool.query("UPDATE temperature SET celsius = ?, created_at = NOW() WHERE deviceId = ? AND created_at IN (SELECT * FROM (SELECT MIN(created_at) FROM temperature WHERE deviceId = ?) as temp)", [temp['°C'], temp.id, temp.id], (error, results, fields) => {
              if (error) throw error;
            });
          }
        });
      });
    })

    // INSERT DE LA TABLE HUMIDITY
    axios.get('http://52.14.112.188:3000/api/v1/humidity').then(resp => {
      const humidities = resp.data.humidity;
      humidities.forEach(humidity => {
        pool.query("SELECT COUNT(humidityId) as nbHumidities FROM humidity WHERE deviceId = ? ", [humidity.id], (error, results, fields) => {
          if (error) throw error;
          if (results[0].nbHumidities < 20) {
            pool.query("INSERT INTO humidity (rate, created_at, deviceId) VALUES (?,NOW(),?)", [humidity['%'], humidity.id], (error, results, fields) => {
              if (error) throw error;
            });
          } else {
            pool.query("UPDATE humidity SET rate = ?, created_at = NOW() WHERE deviceId = ? AND created_at IN (SELECT * FROM (SELECT MIN(created_at) FROM humidity WHERE deviceId = ?) as humidity)", [humidity['%'], humidity.id, humidity.id], (error, results, fields) => {
              if (error) throw error;
            });
          }
        });
      });
    })

    // INSERT DE LA TABLE WIND
    axios.get('http://52.14.112.188:3000/api/v1/wind').then(resp => {
      const winds = resp.data.wind;
      winds.forEach(wind => {
        pool.query("SELECT COUNT(windId) as nbWinds FROM wind WHERE deviceId = ? ", [wind.id], (error, results, fields) => {
          if (error) throw error;
          if (results[0].nbWinds < 20) {
            pool.query("INSERT INTO wind (speed, created_at, deviceId) VALUES (?,NOW(),?)", [wind['km/h'], wind.id], (error, results, fields) => {
              if (error) throw error;
            });
          } else {
            pool.query("UPDATE wind SET speed = ?, created_at = NOW() WHERE deviceId = ? AND created_at IN (SELECT * FROM (SELECT MIN(created_at) FROM wind WHERE deviceId = ?) as wind)", [wind['km/h'], wind.id, wind.id], (error, results, fields) => {
              if (error) throw error;
            });
          }
        });
      });
    })
  }
} 