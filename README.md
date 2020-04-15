![alt tag](https://nsa40.casimages.com/img/2020/04/10/200410110537552914.png)
## The project
MeteoConnect is a project realized by second year students of MASTERE. The purpose of this website is to measure meteorological data (temperature, humidity and wind speed) captured and coming from connected objects.
## Technologies used
* [Axios](https://www.npmjs.com/package/axios) - To read API
* [Leaflet](https://www.npmjs.com/package/leaflet) - For the interactive map
* [VueJS](https://vuejs.org/) - For the template
* [BootstrapVue](https://bootstrap-vue.js.org/) - For the template
* [VueIcon](https://qinshenxue.github.io/vue-icon/) - For icons
* [ApexChart](https://apexcharts.com/docs/vue-charts/) - For charts
## Module descriptions
### Home & Map
The home interface is split in two: the map and the navigation. The map shows the geographic position of all connected objects using latitude and longitude data. Still on the map, it is possible to see by clicking on a cursor: the name of the object and its status (ON or OFF). Navigation provides access either to a general view which groups all the statistics for all the objects, or to a detailed view which groups all the statistics for a single object.
### General view
The overview is a summary containing the global statistics of all the connected objects. It is therefore possible to see the following :
* **For the temperature :** We will be able to see three things: a graph that represents the last measurements recorded for each object, the object that has the highest temperature and the object that has the lowest temperature.
* **For the humidity :** We will be able to see three things: a graph that represents the last measurements recorded for each object, the object that has the highest humidity and the object that has the lowest humidity.
* **For the wind speed :** We will be able to see three things: a graph that represents the last measurements recorded for each object, the object that has the highest speed and the object that has the lowest speed.

![alt tag](https://nsa40.casimages.com/img/2020/04/14/200414025541553664.png)
### Detailed view
When you choose an object, the detailed view is completed. It will be possible to see and analyze the following :
* **For the temperature :** With regard to the temperature data, we will have access to five elements : a graph which traces the history of the twenty last recorded measurements, the average of the temperature of the object, the last recorded measurement, the maximum recorded temperature and finally the minimum temperature recorded.
* **For the humidity :** Regarding humidity data, we will also have access to five elements : a graph that traces the history of the last twenty recorded measurements, the average humidity of the object, the last recorded measurement, the maximum humidity recorded and finally the minimum recorded humidity.
* **For the wind speed :** Concerning the data related to the wind speed, we will also have access to five elements : a graph which traces the history of the last twenty recorded measurements, the average wind speed of the object, the last recorded measurement, the wind speed maximum recorded and finally the minimum recorded wind speed.

![alt-tag](https://nsa40.casimages.com/img/2020/04/14/200414025541432900.png)
## Graphical charter
### The logo
The logo was created by Aude PONS. It contains the following fonts : [Moon](https://www.behance.net/gallery/23468357/Moon-Free-Font) and [Fredoka One](https://fonts.google.com/specimen/Fredoka+One).
### Color pallet
* ![#343434](https://placehold.it/15/343434/000000?text=+) `#343434`
* ![#F8F8FB](https://placehold.it/15/F8F8FB/000000?text=+) `#F8F8FB`
* ![#42B983](https://placehold.it/15/42B983/000000?text=+) `#42B983`
## Authors
* Hakim MAKHTOUR
* Aude PONS
