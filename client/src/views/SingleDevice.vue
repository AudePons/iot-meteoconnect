<template>
  <b-container fluid class="iot-container" v-if="dataReady">
    <b-row class="iot-row-header">
      <b-col class="iot-title-page" xl="4" md="12"><div v-if="currentStatus">{{ selected }} - Statut : {{ currentStatus }}</div></b-col>
      <b-col xl="4" md="12">
        <b-form-select v-model="selected" :options="devicesList" @change="onChangeDevice"></b-form-select>
      </b-col>
      <b-col class="iot-col-back" xl="4" md="12">
        <b-button pill class="iot-btn-back">
          <router-link to="/" class="routerlink">Retour à la carte</router-link>
        </b-button>
      </b-col>
    </b-row>
    <b-row class="iot-row-bottom">
      <b-col xl="8" md="12" class="iot-col">
        <b-card :title="'Mesures des températures (°C) - ' + today" class="iot-card">
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
      <b-col xl="4" md="10">
        <b-row class="iot-row-bottom">
          <b-col xl="6" md="12" class="iot-col">
            <b-card title="Moyenne températures" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="thermometer" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ avgTemp }}°C</div>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col xl="6" md="12" class="iot-col">
            <b-card title="Dernière température" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="thermometer" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ lastTemp }}°C</div>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="iot-row-bottom">
          <b-col xl="6" md="12" class="iot-col">
            <b-card title="Température maximale" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="thermometer" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ maxTemp }}°c</div>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col xl="6" md="12" class="iot-col">
            <b-card title="Température minimale" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="thermometer" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ minTemp }}°C</div>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="iot-row-bottom">
      <b-col xl="8" md="12" class="iot-col">
        <b-card :title="'Mesures de l\'humidité (%) - ' + today" class="iot-card">
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
      <b-col xl="4" md="10">
        <b-row class="iot-row-bottom">
          <b-col xl="6" md="12" class="iot-col">
            <b-card title="Moyenne humidités" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="droplet" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ avgHumidity }}%</div>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col xl="6" md="12" class="iot-col">
            <b-card title="Dernière humidité" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="droplet" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ lastHumidity }} %</div>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="iot-row-bottom">
          <b-col xl="6" md="12" class="iot-col">
            <b-card title="Humidité maximale" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="droplet" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ maxHumidity }} %</div>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col xl="6" md="12" class="iot-col">
            <b-card title="Humidité minimale" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="droplet" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ minHumidity }} %</div>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
    <b-row class="iot-row-bottom">
      <b-col xl="8" md="12" class="iot-col">
        <b-card :title="'Mesures de la vitesse du vent (Km/h) - ' + today" class="iot-card">
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
      <b-col xl="4" md="10">
        <b-row class="iot-row-bottom">
          <b-col xl="6" md="12" class="iot-col">
            <b-card title="Moyenne vitesses" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="wind" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ avgWind }} Km/h</div>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col xl="6" md="12" class="iot-col">
            <b-card title="Dernière vitesse" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="wind" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ lastWind }} Km/h</div>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
        <b-row class="iot-row-bottom">
          <b-col xl="6" md="12" class="iot-col">
            <b-card title="Vitesse maximale" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="wind" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ maxWind }} Km/h</div>
              </b-card-text>
            </b-card>
          </b-col>
          <b-col xl="6" md="12" class="iot-col">
            <b-card title="Vitesse minimale" class="iot-card">
              <b-card-text>
                <div class="iot-stat-icon">
                  <custom-icon name="wind" base-class="custom-icon"></custom-icon>
                </div>
                <div class="iot-stat">{{ minWind }} Km/h</div>
              </b-card-text>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
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
      selected: null,
      dataReady: false,
      currentStatus: null,
      lastTemp: 0,
      maxTemp: 0,
      minTemp: 0,
      avgTemp: 0,
      lastHumidity: 0,
      maxHumidity: 0,
      minHumidity: 0,
      avgHumidity: 0,
      lastWind: 0,
      maxWind: 0,
      minWind: 0,
      avgWind: 0
    }
  },
  async mounted () {
    await this.$store.dispatch('devices/getAll')
    await this.$store.dispatch('devices/getTemperatureHistory', null)
    await this.$store.dispatch('devices/getHumidityHistory', null)
    await this.$store.dispatch('devices/getWindHistory', null)
    await this.$store.dispatch('devices/getAverages', null)
    this.dataReady = true
  },
  computed: {
    options () {
      const hours = []
      this.$store.state.devices.tempHistory.forEach(temp => {
        hours.push(temp.created_at.split('T')[1].slice(0, -5))
      })
      const options = {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: hours
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
    today () {
      const today = new Date()
      const date = today.getDate() + '/0' + (today.getMonth() + 1) + '/' + today.getFullYear()
      return date
    },
    devicesList () {
      const list = [{ value: 'null', text: 'Choisir un objet connecté', disabled: true }]
      this.$store.state.devices.all.items.forEach(device => {
        list.push({ value: device.deviceId, text: device.deviceId, status: device.status })
      })
      return list
    },
    tempSeries () {
      const temps = []
      if (this.selected !== null) {
        this.$store.state.devices.tempHistory.forEach(temp => {
          temps.push(temp.celsius)
        })

        const last = temps[temps.length - 1]
        const max = Math.max(...temps)
        const min = Math.min(...temps)

        this.tempCases(last, max, min)
      }
      const series = [{
        name: 'Température',
        data: temps
      }]
      return series
    },
    humiditySeries () {
      const humidities = []
      if (this.selected !== null) {
        this.$store.state.devices.humidityHistory.forEach(humidity => {
          humidities.push(humidity.rate)
        })

        const last = humidities[humidities.length - 1]
        const max = Math.max(...humidities)
        const min = Math.min(...humidities)

        this.humidityCases(last, max, min)
      }
      const series = [{
        name: 'Humidité',
        data: humidities
      }]
      return series
    },
    windSeries () {
      const winds = []
      if (this.selected !== null) {
        this.$store.state.devices.windHistory.forEach(wind => {
          winds.push(wind.speed)
        })
        const last = winds[winds.length - 1]
        const max = Math.max(...winds)
        const min = Math.min(...winds)

        this.windCases(last, max, min)
      }
      const series = [{
        name: 'Humidité',
        data: winds
      }]
      return series
    }
  },
  methods: {
    async onChangeDevice () {
      await this.$store.dispatch('devices/getTemperatureHistory', this.selected)
      await this.$store.dispatch('devices/getHumidityHistory', this.selected)
      await this.$store.dispatch('devices/getWindHistory', this.selected)
      await this.$store.dispatch('devices/getAverages', this.selected)
      await this.setStatus()
    },
    tempCases (last, max, min) {
      this.avgTemp = this.$store.state.devices.averages.celsius_avg
      this.lastTemp = last
      this.maxTemp = max
      this.minTemp = min
    },
    humidityCases (last, max, min) {
      this.avgHumidity = this.$store.state.devices.averages.humidity_avg
      this.lastHumidity = last
      this.maxHumidity = max
      this.minHumidity = min
    },
    windCases (last, max, min) {
      this.avgWind = this.$store.state.devices.averages.speed_avg
      this.lastWind = last
      this.maxWind = max
      this.minWind = min
    },
    setStatus () {
      console.log(this.devicesList)
      const device = this.devicesList.find(element => element.value === this.selected)
      console.log(device)
      this.currentStatus = device.status
    }
  }
}
</script>
