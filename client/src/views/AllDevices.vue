<template>
  <div>
    <b-container fluid class="iot-container" v-if="dataReady">
      <b-row class="iot-row-header">
        <b-col class="iot-title-page">Tous les objets connectés</b-col>
        <b-col class="iot-col-back">
          <b-button pill class="iot-btn-back">
            <router-link to="/" class="routerlink">Retour à la carte</router-link>
          </b-button>
        </b-col>
      </b-row>
      <b-row class="iot-row-bottom">
        <b-col xl="10" md="12" class="iot-col">
          <b-card title="Dernières mesures des températures (°C)" class="iot-card">
            <b-card-text>
              <div>
                <apexchart
                  width="100%"
                  height="250"
                  type="line"
                  :options="options"
                  :series="tempSeries"
                ></apexchart>
              </div>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col xl="2" md="12" class="iot-col">
          <b-row class="iot-row-bottom">
            <b-card title="Température maximale" :sub-title="maxTemp.deviceId" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="thermometer" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ maxTemp.celsius }}°C</div>
              </b-card-text>
            </b-card>
          </b-row>
          <b-row class="iot-row-bottom">
            <b-card title="Température minimale" :sub-title="minTemp.deviceId" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="thermometer" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ minTemp.celsius }}°C</div>
              </b-card-text>
            </b-card>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col xl="10" md="12" class="iot-row-bottom">
          <b-card title="Dernières mesures de l'humidité (%)" class="iot-card">
            <b-card-text>
              <div>
                <apexchart
                  width="100%"
                  height="250"
                  type="line"
                  :options="options"
                  :series="humiditySeries"
                ></apexchart>
              </div>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col xl="2" md="12">
          <b-row class="iot-row-bottom">
            <b-card title="Humidité maximale" :sub-title="maxHumidity.deviceId" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="droplet" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ maxHumidity.rate }}%</div>
              </b-card-text>
            </b-card>
          </b-row>
          <b-row class="iot-row-bottom">
            <b-card title="Humidité minimale" :sub-title="minHumidity.deviceId" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="droplet" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ minHumidity.rate }}%</div>
              </b-card-text>
            </b-card>
          </b-row>
        </b-col>
      </b-row>
      <b-row class="iot-row-bottom">
        <b-col xl="10" md="12">
          <b-card title="Dernières mesures de la rapidité du vent (km/h)" class="iot-card">
            <b-card-text>
              <div>
                <apexchart
                  width="100%"
                  height="250"
                  type="line"
                  :options="options"
                  :series="windSeries"
                ></apexchart>
              </div>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col xl="2" md="12" class="iot-col">
          <b-row class="iot-row-bottom">
            <b-card title="Vitesse du vent maximale" :sub-title="maxWind.deviceId" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="wind" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ maxWind.speed }} Km/h</div>
              </b-card-text>
            </b-card>
          </b-row>
          <b-row class="iot-row-bottom">
            <b-card title="Vitesse du vent minimale" :sub-title="minWind.deviceId" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="wind" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ minWind.speed }} Km/h</div>
              </b-card-text>
            </b-card>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import customIcon from 'vue-icon/lib/vue-feather.esm'
export default {
  components: {
    customIcon
  },
  data: function () {
    return {
      baseClass: 'v-icon',
      dataReady: false
    }
  },
  async mounted () {
    await this.$store.dispatch('devices/getAll')
    await this.$store.dispatch('devices/getHighestTemperature')
    await this.$store.dispatch('devices/getSmallestTemperature')
    await this.$store.dispatch('devices/getHighestWind')
    await this.$store.dispatch('devices/getSmallestWind')
    await this.$store.dispatch('devices/getHighestHumidity')
    await this.$store.dispatch('devices/getSmallestHumidity')
    await this.$store.dispatch('devices/getLatestTemperatures')
    await this.$store.dispatch('devices/getLatestWinds')
    await this.$store.dispatch('devices/getLatestHumidities')
    this.dataReady = true
  },
  computed: {
    options () {
      const devices = []
      if (this.$store.state.devices.all.items) {
        this.$store.state.devices.all.items.forEach(device => {
          devices.push(device.deviceId)
        })
      }
      const options = {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: devices
        },
        colors: ['#42b983'],
        markers: {
          size: 5
        },
        stroke: {
          curve: 'smooth'
        }
      }
      return options
    },
    tempSeries () {
      const temps = []
      this.$store.state.devices.latestTemperatures.forEach(temp => {
        temps.push(temp.celsius)
      })
      const series = [{
        name: 'Température',
        data: temps
      }]
      return series
    },
    windSeries () {
      const winds = []
      this.$store.state.devices.latestWinds.forEach(wind => {
        winds.push(wind.speed)
      })
      const series = [{
        name: 'Vitesse',
        data: winds
      }]
      return series
    },
    humiditySeries () {
      const humidities = []
      this.$store.state.devices.latestHumidities.forEach(humidity => {
        humidities.push(humidity.rate)
      })
      const series = [{
        name: 'Humidité',
        data: humidities
      }]
      return series
    },
    maxTemp () {
      return this.$store.state.devices.maxTemp
    },
    minTemp () {
      return this.$store.state.devices.minTemp
    },
    maxWind () {
      return this.$store.state.devices.maxWind
    },
    minWind () {
      return this.$store.state.devices.minWind
    },
    maxHumidity () {
      return this.$store.state.devices.maxHumidity
    },
    minHumidity () {
      return this.$store.state.devices.minHumidity
    }
  }
}
</script>
