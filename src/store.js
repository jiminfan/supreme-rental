import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let inventory = []
for (let i = 0; i < 3; i++) {
  inventory.push({
    id: i.toString(),
    image_url: "https://i.imgur.com/e6hOBiW.jpg",
    rate: 299,
    year: 2020,
    make: 'Mercedes',
    model: 'GLS-450'
  })
}

export default new Vuex.Store({
  state: {
    inventory
  },
  getters: {
    getVehicle: (state) => (id) => {
      return state.inventory.find(vehicle => vehicle.id === id)
    }
  }
})