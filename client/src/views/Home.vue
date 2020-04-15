<template>
  <b-container fluid class="iot-map-container">
    <b-row>
      <div class="col-md-9" style="padding:0;">
        <l-map
          :zoom="zoom"
          :center="center"
          :options="mapOptions"
          style="height: 100vh"
          @update:center="centerUpdate"
          @update:zoom="zoomUpdate"
        >
          <l-tile-layer :url="url" :attribution="attribution" />
          <l-marker v-for="device in devices.items" :key="device.deviceId" :lat-lng="device.latlng" :icon="icon">
            <l-popup>
              <div @click="innerClick">
                {{ device.deviceId }}
                <p>Statut : {{ device.status }}</p>
              </div>
            </l-popup>
          </l-marker>
        </l-map>
      </div>
      <div class="col-md-3 centrage">
        <span>
          <b-row class="iot-row-bottom">
            <img src="../assets/logo.png" alt="logo" class="iot-logo" />
          </b-row>
          <b-row class="iot-row-bottom">
            <b-col xl="12" md="12" class="iot-col">
              <router-link to="/devices" class="routerlink">
                <b-card
                  title="Présentation générale"
                  sub-title="(Voir tous les objets)"
                  class="iot-card iot-menu"
                ></b-card>
              </router-link>
            </b-col>
          </b-row>
          <b-row class="iot-row-bottom">
            <b-col xl="12" md="12" class="iot-col">
              <router-link to="/device" class="routerlink">
                <b-card
                  title="Présentation détaillée"
                  sub-title="(Voir seulement un objet)"
                  class="iot-card iot-menu"
                ></b-card>
              </router-link>
            </b-col>
          </b-row>
        </span>
      </div>
    </b-row>
  </b-container>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Poppins&display=swap");

* {
  font-family: "Poppins", sans-serif;
}

.iot-row-header {
  padding: 15px;
}

.iot-title-page {
  font-size: 20px;
  font-weight: bold;
  text-align: left;
}

.iot-col-back {
  text-align: right;
}

.iot-btn-back {
  background: #42b983 !important;
  border-color: #42b983 !important;
}

.iot-btn-back a {
  color: white;
}

.iot-btn-back:hover {
  background: transparent !important;
  transition: 0.5s;
  color: #42b983 !important;
}

.iot-btn-back:hover .routerlink{
  color: #42b983;
}
.row {
  margin: 0 !important;
}

.iot-card {
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  width: 100% !important;
}

.card {
  border: 1px solid rgba(0, 0, 0, 0) !important;
}

.card-title {
  font-size: 18px;
}

.iot-row-bottom {
  padding-bottom: 15px;
}

.iot-stat-icon {
  width: 50%;
  text-align: right;
  float: left;
  padding-right: 5px !important;
}

.iot-stat {
  width: 50%;
  text-align: left;
  float: left;
}

.v-icon,
.custom-icon {
  width: 24px;
}

.iot-container {
  background: #f8f8fb !important;
}

.iot-col {
  margin-top: 15px;
}

.iot-map-container {
  padding: 0 !important;
  background: #f8f8fb !important;
}

.map {
  height: 100vh;
}

.centrage {
  background: #f8f8fb;
  height: 100vh;
  line-height: 100vh;
  text-align: center;
}

span {
  width: 90%;
  vertical-align: middle;
  display: inline-block;
  line-height: 1.2;
  text-align: left;
}

.iot-menu {
  text-align: center;
  color: #343434;
}

.iot-menu:hover {
  color: #42b983!important;
  transition: 0.5s;
  cursor: pointer;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);
  text-decoration: none;
}

.iot-logo {
  width: 100%;
  margin-bottom: 40px;
}

.leaflet-popup-content-wrapper {
  background: #343434!important;
  color: #42b983!important;
  border-radius: 6px!important;
}

.leaflet-popup-tip {
  background: #343434!important;
}

.routerlink {
  text-decoration: none!important;
}

</style>

<script>
import { latLng, icon } from 'leaflet'
import { LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet'

export default {
  name: 'Home',
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data () {
    return {
      zoom: 6,
      center: latLng(47, 2),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      mapOptions: {
        zoomSnap: 0.5
      },
      icon: icon({
        iconUrl: require('../assets/mill.png'),
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      })
    }
  },
  async mounted () {
    await this.$store.dispatch('devices/getAll')
  },
  computed: {
    devices () {
      if (this.$store.state.devices.all.items) {
        this.$store.state.devices.all.items.forEach(device => {
          const latlng = device.zone.split(',')
          device.latlng = latLng(latlng[0], latlng[1])
        })
      }
      return this.$store.state.devices.all
    }
  },
  methods: {
    zoomUpdate (zoom) {
      this.currentZoom = zoom
    },
    centerUpdate (center) {
      this.currentCenter = center
    },
    innerClick () {
      alert('Click!')
    }
  }
}
</script>
